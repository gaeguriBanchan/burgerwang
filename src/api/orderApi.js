import apiClient from "./apiClient";

export const getOrder = async (data) => {
  try {
    // const res = await apiClient.get("/cart/info");
    const res = await apiClient.get("/apidummy/order.json", data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getOrderList = async () => {
  try {
    // const res = await apiClient.get("/order/list");
    const res = await apiClient.get("/apidummy/orderlist.json");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getOrderListDetail = async (id) => {
  try {
    // const params = {
    //   seq: id,
    // };
    // const res = await apiClient.get("/order/detail/{params}");
    const res = await apiClient.get("/apidummy/orderdetail.json");
    return res.data;
  } catch (err) {
    return err;
  }
};
