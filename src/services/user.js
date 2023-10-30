import axios from "axios";

export const uploadPic = (data) => {
  const x = axios.create({
    baseURL: "https://api-soft.dentalapp.ge/",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  x.interceptors.request.use(
    async (request) => {
      const token = localStorage.getItem("token");
      const branchId = localStorage.getItem("branchId");

      if (token) {
        if (request.headers) {
          request.headers.Authorization = `Bearer ${token}`;
          request.headers.Branchid = branchId;
        } else {
          request.headers = {
            Authorization: `Bearer ${token}`,
            Branchid: branchId,
          };
        }
      }
      return request;
    },
    (error) => Promise.reject({ ...error })
  );

  const onResponseFulfilled = (response) => response.data;

  x.interceptors.response.use((response) => onResponseFulfilled(response));
  return x.post("/profile-picture/upload", data);
};
