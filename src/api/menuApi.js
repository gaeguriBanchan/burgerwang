import apiClient from "./apiClient";

export const getMenu = async (seq) => {
  try {
    const params = {
      store: 3,
      seq: parseInt(seq),
    };
    // const res = await apiClient.get("/apidummy/menu.json");
    const res = await apiClient.get("/api/menu/category", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMenuDetail = async (cate, seq) => {
  try {
    // const res = await apiClient.get("/apidummy/detail.json");
    const res = await apiClient.get(`/api/menu/${cate}/${seq}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMenuIngredient = async (seq) => {
  try {
    // const res = await apiClient.get("/apidummy/ingredient.json");
    const res = await apiClient.get(`api/menu/ingredient/${seq}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMenuSide = async (seq) => {
  try {
    const params = {
      seq: parseInt(seq),
    };
    // const res = await apiClient.get("/apidummy/sideopt.json");
    const res = await apiClient.get("/api/menu/sideopt", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMenuDrink = async (seq) => {
  try {
    const params = {
      seq: parseInt(seq),
    };
    // const res = await apiClient.get("/apidummy/drinkopt.json");
    const res = await apiClient.get("/api/menu/drinkopt", { params });
    return res.data;
  } catch (err) {
    return err;
  }
};
