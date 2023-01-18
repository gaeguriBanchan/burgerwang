import apiClient from "./apiClient";

export const getCart = async () => {
  try {
    // const res = await apiClient.get("/cart/list");
    const res = await apiClient.get("/apidummy/cart.json");
    return res.data;
  } catch (err) {
    return err;
  }
};
