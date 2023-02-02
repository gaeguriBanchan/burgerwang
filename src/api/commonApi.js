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

export const loginUser = async () => {
  try {
    const params = {
      email: "user001@email.com",
      pwd: "123456",
    };
    const res = await apiClient.post("/api/member/login", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};
