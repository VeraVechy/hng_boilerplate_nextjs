"use client";

import { useEffect, useState } from "react";

const NotificationPage = () => {
  const [baseUrl, setBaseUrl] = useState<string | undefined>(); // Use `undefined` instead of `null`

  useEffect(() => {
    const getBaseUrl = async () => {
      const url = process.env.API_URL;
      setBaseUrl(url); // Set `undefined` if the URL is not defined
    };

    getBaseUrl();
  }, []);

  return (
    <div>
      <h1>Notification Settings</h1>
      <p>Base URL: {baseUrl || "Base URL is not defined"}</p>
      {/* Render other notification settings here */}
    </div>
  );
};

export default NotificationPage;
