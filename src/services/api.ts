import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { Accept: "application/json" },
});

api.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;