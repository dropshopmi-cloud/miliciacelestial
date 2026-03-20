CREATE POLICY "Users can delete their own notification settings"
  ON public.notification_settings FOR DELETE
  USING (auth.uid() = user_id);