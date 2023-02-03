import apiClient from "./apiClient";

export const putOrder = async (data) => {
  try {
    const res = await apiClient.put("/order", data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getCoupon = async (memberId) => {
  const res = await apiClient.get(`/api/member/coupon/${memberId}`);
  return res.data;
};

export const getPayment = async (data) => {
  try {
    const res = await apiClient.get(`/order/payment/${data}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getOrderList = async (data) => {
  const res = await apiClient.get(`/order/list/${data}`);
  // const res = await apiClient.get("/apidummy/orderlist.json");
  return res.data;
};

export const getOrderListDetail = async (data) => {
  const { seq, member } = data;
  const res = await apiClient.get(`/order/detail/${seq}/${member}`);
  // const res = await apiClient.get("/apidummy/orderdetail.json");
  return res.data;
};
