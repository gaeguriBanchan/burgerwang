/** @format */

import axios from 'axios';

const baseURL = 'http://192.168.0.122:9898';
// const baseURL = "";
const baseURL = process.env.REACT_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: baseURL,
  headers: { 'Content-type': 'application/json' },
});

export default apiClient;
