import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, BellOff, Heart, BookOpen, ScrollText, X, Check } from 'lucide-react';
import { usePushNotifications } from '@/hooks/usePushNotifications';

interface TimeOption {
  label: string;
  value: string;
}

const timeOptions: TimeOption[] = [
  { label: '05:00', value: '05:00' },
  { label: '06:00', value: '06:00' },
  { label: '07:00', value: '07:00' },
  { label: '08:00', value: '08:00' },
  { label: '09:00', value: '09:00' },
  { label: '12:00', value: '12:00' },
  { label: '18:00', value: '18:00' },
  { label: '19:00', value: '19:00' },
  { label: '20:00', value: '20:00' },
  { label: '21:00', value: '21:00' },
  { label: '22:00', value: '22:00' },
];

interface NotificationSettingsProps {
  onClose?: () => void;
}

export const NotificationSettings = ({ onClose }: NotificationSettingsProps) => {
  const {
    settings,
    loading,
    permissionStatus,
    isNotificationActive,
    enableNotifications,
    disableNotifications,
    saveSettings,
    activateNotifications,
    deactivateNotifications,
  } = usePushNotifications();

  const [localSettings, setLocalSettings] = useState({
    prayer_time: settings.prayer_time || '07:00',
    reading_time: settings.reading_time || '12:00',
    devotional_time: settings.devotional_time || '20:00',
  });

  const [isActivating, setIsActivating] = useState(false);

  // Sync local settings when settings change
  useEffect(() => {
    setLocalSettings({
      prayer_time: settings.prayer_time || '07:00',
      reading_time: settings.reading_time || '12:00',
      devotional_time: settings.devotional_time || '20:00',
    });
  }, [settings]);

  const handleToggleNotifications = async () => {
    if (settings.push_enabled) {
      await disableNotifications();
      deactivateNotifications();
    } else {
      await enableNotifications();
    }
  };

  const handleSaveTime = async (type: 'prayer_time' | 'reading_time' | 'devotional_time', value: string) => {
    setLocalSettings(prev => ({ ...prev, [type]: value }));
    await saveSettings({ [type]: value });
  };

  const handleActivateNotifications = async () => {
    setIsActivating(true);
    await activateNotifications();
    setIsActivating(false);
  };

  if (loading) {
    return (
      <Card className="bg-card border-gold/20">
        <CardContent className="p-8 text-center">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-card via-card to-muted/30 border-gold/20 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gold/10">
                <Bell className="w-6 h-6 text-gold" />
              </div>
              <div>
                <CardTitle className="text-foreground text-xl font-display">Notificações</CardTitle>
                <CardDescription className="font-body">Configure lembretes diários</CardDescription>
              </div>
            </div>
            {onClose && (
              <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Permission Status */}
          {permissionStatus === 'denied' && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
              <div className="flex items-center gap-2 text-destructive">
                <BellOff className="w-5 h-5" />
                <span className="font-body text-sm">Notificações bloqueadas no navegador. Habilite nas configurações.</span>
              </div>
            </div>
          )}

          {/* Main Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-gold/10">
            <div className="flex items-center gap-3">
              {settings.push_enabled ? (
                <Bell className="w-5 h-5 text-gold" />
              ) : (
                <BellOff className="w-5 h-5 text-muted-foreground" />
              )}
              <div>
                <Label className="text-foreground font-body cursor-pointer">Ativar Notificações</Label>
                <p className="text-muted-foreground text-xs font-body">Receba lembretes de orações diárias</p>
              </div>
            </div>
            <Switch
              checked={settings.push_enabled}
              onCheckedChange={handleToggleNotifications}
              disabled={permissionStatus === 'denied'}
            />
          </div>

          {/* Time Settings */}
          {settings.push_enabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              {/* Prayer Time */}
              <div className="p-4 bg-muted/20 rounded-xl border border-gold/10 space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <Label className="text-foreground font-body text-sm">Lembrete de Oração</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {timeOptions.slice(0, 6).map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSaveTime('prayer_time', option.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-body transition-all ${
                        localSettings.prayer_time === option.value
                          ? 'bg-gold text-navy-dark'
                          : 'bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reading Time */}
              <div className="p-4 bg-muted/20 rounded-xl border border-gold/10 space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <Label className="text-foreground font-body text-sm">Lembrete de Leitura</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {timeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSaveTime('reading_time', option.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-body transition-all ${
                        localSettings.reading_time === option.value
                          ? 'bg-gold text-navy-dark'
                          : 'bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Devotional Time */}
              <div className="p-4 bg-muted/20 rounded-xl border border-gold/10 space-y-3">
                <div className="flex items-center gap-2">
                  <ScrollText className="w-4 h-4 text-gold" />
                  <Label className="text-foreground font-body text-sm">Lembrete de Devocional</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {timeOptions.slice(5).map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSaveTime('devotional_time', option.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-body transition-all ${
                        localSettings.devotional_time === option.value
                          ? 'bg-gold text-navy-dark'
                          : 'bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Activate Notifications Button */}
              <Button 
                onClick={isNotificationActive ? deactivateNotifications : handleActivateNotifications}
                disabled={isActivating}
                className={`w-full font-body transition-all duration-300 ${
                  isNotificationActive 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gold hover:bg-gold-light text-navy-dark'
                }`}
              >
                <motion.div
                  animate={isNotificationActive ? { rotate: [0, -15, 15, -15, 15, 0] } : {}}
                  transition={{ duration: 0.5, repeat: isNotificationActive ? Infinity : 0, repeatDelay: 3 }}
                  className="mr-2"
                >
                  {isNotificationActive ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Bell className="w-4 h-4" />
                  )}
                </motion.div>
                {isActivating ? 'Ativando...' : isNotificationActive ? 'Notificações Ativas' : 'Notificar'}
              </Button>
            </motion.div>
          )}

          {/* Info */}
          <p className="text-muted-foreground text-xs font-body text-center">
            As notificações serão enviadas diariamente nos horários configurados.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
