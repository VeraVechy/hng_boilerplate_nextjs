export interface NotificationSettingsProperties {
  email_notifications: boolean;
  push_notifications: boolean;
  sms_notifications: boolean;
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}
