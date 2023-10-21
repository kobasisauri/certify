import axios from "axios";

// import notificationService from "./notify";

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

const axiosInstance = axios.create({
  baseURL: "https://apicertify.com.ge/api/",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": csrfToken,
  },
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (request.headers) {
        request.headers.Authorization = `Bearer ${token}`;
      } else {
        request.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return request;
  },
  (error) => Promise.reject({ ...error })
);

const onResponseFulfilled = (response) => response.data;

const onResponseRejected = (error) => {
  //   if (!error.response) {
  //     notificationService.notify("warning", "Warning", "no internet connection");
  //     return Promise.reject({ ...error });
  //   }
  //   if (error.response.status === 408 || error.response.status === 504) {
  //     notificationService.notify(
  //       "error",
  //       `error #${error.response.status}`,
  //       "request timed out"
  //     );
  //   } else if (error.response.status === 404 || error.response.status === 504) {
  //     notificationService.notify("error", "Not Found");
  //   } else if (error.response.status === 500) {
  //     notificationService.notify("error", "Internal Server Error");
  //   }
  if (
    error.response.status === 401 ||
    error.response.status === 404 ||
    error.response.status === 403
  ) {
    localStorage.setItem("authData", "");
    // storeRegistry?.getStore().dispatch(resetStoreAction());
  }
  return Promise.reject({ ...error });
};

axiosInstance.interceptors.response.use(
  (response) => onResponseFulfilled(response),
  (error) => onResponseRejected(error)
);

export default axiosInstance;
