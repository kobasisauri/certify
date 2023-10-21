import axiosInstance from "./axios";

export const authBuisinessAcc = (body) =>
  axiosInstance.post("business/login", body);

export const registerBuisinessAcc = (body) =>
  axiosInstance.post("business/register", body);

export const authPrivateAcc = (body) =>
  axiosInstance.post("private/login", body);

export const registerprivateAcc = (body) =>
  axiosInstance.post("private/register", body);
