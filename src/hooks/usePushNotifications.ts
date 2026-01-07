import { useState, useEffect, useCallback } from 'react';
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

export const usePushNotifications = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<NotificationSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission>('default');

  // Check browser notification permission
  useEffect(() => {
    if ('Notification' in window) {
      setPermissionStatus(Notification.permission);
    }
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

      toast.success('Configurações salvas com sucesso!');
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
      if (success) {
        scheduleNotifications();
      }
      return success;
    }
    return false;
  }, [requestPermission, saveSettings]);

  // Disable notifications
  const disableNotifications = useCallback(async (): Promise<boolean> => {
    return saveSettings({ push_enabled: false });
  }, [saveSettings]);

  // Schedule local notifications based on settings
  const scheduleNotifications = useCallback(() => {
    if (!settings.push_enabled || permissionStatus !== 'granted') return;

    // Store scheduled times in localStorage for service worker
    const schedules = {
      prayer: settings.prayer_time,
      reading: settings.reading_time,
      devotional: settings.devotional_time,
    };
    localStorage.setItem('notificationSchedules', JSON.stringify(schedules));
  }, [settings, permissionStatus]);

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
    enableNotifications,
    disableNotifications,
    saveSettings,
    requestPermission,
    showTestNotification,
    scheduleNotifications,
  };
};
