import apiClient from "./apiClient";
export const getStore = async (data) => {
  try {
    const params = {
      address: data,
    };
    const res = await apiClient.get("/store/select", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};
