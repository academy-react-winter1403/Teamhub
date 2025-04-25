import { getItemLocalStorage } from "./../../hooks/localStorage/getItem";
import axios, { AxiosResponse, AxiosError } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (err: Error | AxiosError) => {
  console.log(err);
  if (axios.isAxiosError(err) && err.response) {
    if (err.response.status === 401) {
      // token expiered
      localStorage.removeItem("token");
      // window.location.href = '/auth/login';
    } else if (err.response.status >= 400 && err.response.status < 500) {
      alert("client error: " + err.response.status);
    }
  } else {
    console.error("An unexpected error occurred:", err);
  }
  return Promise.reject(err); // خطا رو پرت کن تا کامپوننت مدیریتش کنه
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItemLocalStorage("Token");
  if (token) {
    opt.headers["Authorization"] = `Bearer ${token}`;
  }
  opt.headers["MessageTest"] = "Hello World"; // نگه داشتم
  return opt;
});

export default instance;
