import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // should be https://chatify-back-xcex.onrender.com/api in .env
  withCredentials: true,
});
