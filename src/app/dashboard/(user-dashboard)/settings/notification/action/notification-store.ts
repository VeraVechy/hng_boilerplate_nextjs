import { create } from "zustand";

import { NotificationSettingsProperties } from "../types/notification-settings.types";
import {
  retrieveUserNotificationSettings,
  updateUserNotificationSettings,
} from "./notification";

interface NotificationStore {
  settings: NotificationSettingsProperties;
  error: string | undefined;
  updateSettings: (
    newSettings: Partial<NotificationSettingsProperties>,
  ) => void;
  fetchSettings: () => void;
  clearError: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  settings: {
    email_notifications: true,
    push_notifications: false,
    sms_notifications: false,
  },
  error: undefined,
  updateSettings: async (
    newSettings: Partial<NotificationSettingsProperties>,
  ) => {
    try {
      await updateUserNotificationSettings(newSettings);
      set((state) => ({
        settings: { ...state.settings, ...newSettings },
        error: undefined,
      }));
    } catch (error) {
      if (error instanceof Error) {
        set({ error: "Failed to update settings: " + error.message });
      } else {
        set({ error: "Failed to update settings: Unknown error" });
      }
    }
  },
  fetchSettings: async () => {
    try {
      const settings = await retrieveUserNotificationSettings();
      set({ settings, error: undefined });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: "Failed to fetch settings: " + error.message });
      } else {
        set({ error: "Failed to fetch settings: Unknown error" });
      }
    }
  },
  clearError: () => set({ error: undefined }),
}));
