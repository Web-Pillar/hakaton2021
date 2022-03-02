/*
 * This is the initial API interface
 * we set the base URL for the API
 */

import axios from "axios";
import store from "@/store";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:8000/api',
});

/*
 * Add a request interceptor
 */
apiClient.interceptors.request.use(
    (config) => {
        const token = store.getters.getToken || localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
)

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 419)
    ) {
      if (!store.getters["auth/guest"]) {
        store.dispatch("auth/logout");
      }
    }
    return Promise.reject(error);
  }
);
