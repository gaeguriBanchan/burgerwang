import apiClient from "./apiClient";
export const getStore = async (data) => {
  const params = {
    address: data,
  };
  const res = await apiClient.get("/store/select", { params });
  return res.data;
};
export const checkStoreOpen = async (data) => {
  const params = {
    seq: data,
  };
  const res = await apiClient.get("/store/open", { params });
  return res.data;
};
