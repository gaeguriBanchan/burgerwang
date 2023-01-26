import apiClient from "./apiClient";

export const getMenu = async (seq) => {
  try {
    const params = {
      seq: parseInt(seq),
    };
    const res = await apiClient.get("/apidummy/menu.json", { params });
    // const res = await apiClient.get("/api/menu/category", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};
