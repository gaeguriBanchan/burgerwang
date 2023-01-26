import apiClient from "./apiClient";

export const addCart = async () => {
  const data = {};
  try {
    const res = await apiClient.put("/cart", data);
    return res;
  } catch (err) {
    return err;
  }
};

export const getCart = async () => {
  try {
    // const res = await apiClient.get("/cart/list");
    const res = await apiClient.get("/apidummy/cart.json");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const editCountCart = async (seq) => {
  try {
    const res = await apiClient.patch(`cart/list/count/${seq}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const editOptionCart = async (seq, data) => {
  // const data = {
  // 데이터 예시
  // side: "5",
  // drink: "6",
  // drink2: "25",
  // ingredients: ["25", "48"],
  // };
  try {
    const res = await apiClient.patch(`cart/list/option/${seq}`, data);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteCart = async (seq) => {
  try {
    const res = await apiClient.patch(`cart/list/count/${seq}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
