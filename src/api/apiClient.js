import axios from "axios";

const baseURL = "";
// const baseURL = "http://192.168.0.122:9898";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: { "Content-type": "application/json" },
});

export default apiClient;
