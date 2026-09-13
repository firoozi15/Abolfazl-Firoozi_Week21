import axios from "axios";
import { getAuthCookie } from "../utils/cookie";
import { authLogoutEvent } from "../utils/authEvent";
import { toast } from "react-toastify";

const api = axios.create({ baseURL: "http://localhost:3000", timeout: 5000 });

api.interceptors.request.use((config) => {
  const { token } = getAuthCookie();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      authLogoutEvent();
      toast.error("نشست شما پایان یافت.");
    }
    return Promise.reject(error);
  },
);

export default api;
