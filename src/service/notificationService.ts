// src/services/notificationService.ts

import { NotificationSettingsProperties } from "~/app/dashboard/(user-dashboard)/settings/notification/types/notification-settings.types";

// Define the fetchData function with proper types
export const fetchData = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: Partial<NotificationSettingsProperties>,
) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      "There was a problem with the server configuration. Check the server logs for more information.",
      error,
    );
    throw new Error(
      "There was a problem with the server configuration. Check the server logs for more information.",
    );
  }
};
