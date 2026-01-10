import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface NotificationSettings {
  push_enabled: boolean;
  prayer_time: string | null;
  reading_time: string | null;
  devotional_time: string | null;
}

const defaultSettings: NotificationSettings = {
  push_enabled: false,
  prayer_time: null,
  reading_time: null,
  devotional_time: null,
};

const NOTIFICATION_MESSAGES = {
  prayer: {
    title: '🙏 Hora da Oração',
    body: 'Chegou a hora de fazer sua oração diária. Que São Miguel Arcanjo te proteja!',
  },
  reading: {
    title: '📖 Hora da Leitura',
    body: 'É hora de sua leitura espiritual. São Gabriel te ilumina!',
  },
  devotional: {
    title: '✨ Hora do Devocional',
    body: 'Momento de reflexão e devocional. São Rafael te acompanha!',
  },
};

export const usePushNotifications = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<NotificationSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission>('default');
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastNotifiedRef = useRef<{ prayer?: string; reading?: string; devotional?: string }>({});

  // Check browser notification permission
  useEffect(() => {
    if ('Notification' in window) {
      setPermissionStatus(Notification.permission);
    }
    // Check if notifications were previously activated
    const active = localStorage.getItem('notificationsActive') === 'true';
    setIsNotificationActive(active);
  }, []);

  // Fetch user notification settings
  useEffect(() => {
    const fetchSettings = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('notification_settings')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching notification settings:', error);
        }

        if (data) {
          setSettings({
            push_enabled: data.push_enabled ?? false,
            prayer_time: data.prayer_time,
            reading_time: data.reading_time,
            devotional_time: data.devotional_time,
          });
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [user]);

  // Check and fire notifications
  const checkAndFireNotifications = useCallback(() => {
    if (permissionStatus !== 'granted') return;

    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const today = now.toDateString();

    const schedules = localStorage.getItem('notificationSchedules');
    if (!schedules) return;

    const { prayer, reading, devotional } = JSON.parse(schedules);

    // Check prayer time
    if (prayer && currentTime === prayer && lastNotifiedRef.current.prayer !== today) {
      new Notification(NOTIFICATION_MESSAGES.prayer.title, {
        body: NOTIFICATION_MESSAGES.prayer.body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'prayer-notification',
      });
      lastNotifiedRef.current.prayer = today;
    }

    // Check reading time
    if (reading && currentTime === reading && lastNotifiedRef.current.reading !== today) {
      new Notification(NOTIFICATION_MESSAGES.reading.title, {
        body: NOTIFICATION_MESSAGES.reading.body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'reading-notification',
      });
      lastNotifiedRef.current.reading = today;
    }

    // Check devotional time
    if (devotional && currentTime === devotional && lastNotifiedRef.current.devotional !== today) {
      new Notification(NOTIFICATION_MESSAGES.devotional.title, {
        body: NOTIFICATION_MESSAGES.devotional.body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'devotional-notification',
      });
      lastNotifiedRef.current.devotional = today;
    }
  }, [permissionStatus]);

  // Start notification scheduler
  const startNotificationScheduler = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Check every 30 seconds for more accuracy
    intervalRef.current = setInterval(checkAndFireNotifications, 30000);
    
    // Also check immediately
    checkAndFireNotifications();
  }, [checkAndFireNotifications]);

  // Effect to manage the scheduler
  useEffect(() => {
    if (isNotificationActive && permissionStatus === 'granted') {
      startNotificationScheduler();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isNotificationActive, permissionStatus, startNotificationScheduler]);

  // Request notification permission
  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      toast.error('Seu navegador não suporta notificações');
      return false;
    }

    if (Notification.permission === 'granted') {
      setPermissionStatus('granted');
      return true;
    }

    if (Notification.permission === 'denied') {
      toast.error('Notificações bloqueadas. Habilite nas configurações do navegador.');
      setPermissionStatus('denied');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermissionStatus(permission);
      return permission === 'granted';
    } catch (err) {
      console.error('Error requesting permission:', err);
      return false;
    }
  }, []);

  // Save notification settings
  const saveSettings = useCallback(async (newSettings: Partial<NotificationSettings>): Promise<boolean> => {
    if (!user) return false;

    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    try {
      const { error } = await supabase
        .from('notification_settings')
        .upsert({
          user_id: user.id,
          push_enabled: updatedSettings.push_enabled,
          prayer_time: updatedSettings.prayer_time,
          reading_time: updatedSettings.reading_time,
          devotional_time: updatedSettings.devotional_time,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error('Error saving settings:', error);
        toast.error('Erro ao salvar configurações');
        return false;
      }

      return true;
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
  }, [user, settings]);

  // Enable notifications
  const enableNotifications = useCallback(async (): Promise<boolean> => {
    const permitted = await requestPermission();
    if (permitted) {
      const success = await saveSettings({ push_enabled: true });
      return success;
    }
    return false;
  }, [requestPermission, saveSettings]);

  // Disable notifications
  const disableNotifications = useCallback(async (): Promise<boolean> => {
    return saveSettings({ push_enabled: false });
  }, [saveSettings]);

  // Activate notifications and start scheduler
  const activateNotifications = useCallback(async (): Promise<boolean> => {
    const permitted = await requestPermission();
    if (!permitted) return false;

    // Save schedules to localStorage
    const schedules = {
      prayer: settings.prayer_time,
      reading: settings.reading_time,
      devotional: settings.devotional_time,
    };
    localStorage.setItem('notificationSchedules', JSON.stringify(schedules));
    localStorage.setItem('notificationsActive', 'true');
    
    setIsNotificationActive(true);
    startNotificationScheduler();
    
    // Show confirmation notification
    new Notification('✅ Notificações Ativadas', {
      body: 'Você receberá lembretes nos horários configurados.',
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      tag: 'activation-notification',
    });

    toast.success('Notificações ativadas com sucesso!');
    return true;
  }, [requestPermission, settings, startNotificationScheduler]);

  // Deactivate notifications
  const deactivateNotifications = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    localStorage.setItem('notificationsActive', 'false');
    setIsNotificationActive(false);
    toast.info('Notificações desativadas');
  }, []);

  // Show a test notification
  const showTestNotification = useCallback(() => {
    if (permissionStatus !== 'granted') {
      toast.error('Permissão de notificação não concedida');
      return;
    }

    new Notification('Milícia Celestial', {
      body: 'Que os Arcanjos Miguel, Gabriel e Rafael te abençoem! 🙏',
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      tag: 'test-notification',
    });
  }, [permissionStatus]);

  return {
    settings,
    loading,
    permissionStatus,
    isNotificationActive,
    enableNotifications,
    disableNotifications,
    saveSettings,
    requestPermission,
    showTestNotification,
    activateNotifications,
    deactivateNotifications,
  };
};
