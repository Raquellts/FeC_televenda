import axios from "axios";
import Cookies from "js-cookie";

const axiosWithAuth = axios.create();

axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = Cookies.get("Token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosWithAuth;
