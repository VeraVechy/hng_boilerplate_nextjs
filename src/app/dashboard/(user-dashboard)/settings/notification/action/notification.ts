import { NotificationSettingsProperties } from "../types/notification-settings.types";

// Retrieve the base URL from environment variables
const baseUrl = process.env.API_URL;

if (!baseUrl) {
  throw new Error("API_URL environment variable is not defined");
}

// Function to update user notification settings
export const updateUserNotificationSettings = async (
  newSettings: Partial<NotificationSettingsProperties>,
) => {
  const response = await fetch(`${baseUrl}/user/notifications`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSettings),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to update notification settings: ${errorData.message}`,
    );
  }

  return response.json();
};

// Function to retrieve user notification settings
export const retrieveUserNotificationSettings = async () => {
  const response = await fetch(`${baseUrl}/user/notifications`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to retrieve notification settings: ${errorData.message}`,
    );
  }

  return response.json();
};
