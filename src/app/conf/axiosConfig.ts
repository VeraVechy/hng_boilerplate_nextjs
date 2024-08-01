// config/axiosConfig.ts
import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
