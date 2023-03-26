import axios from "axios";

const api = axios.create({
  baseURL: "https://clientapi-ble6.onrender.com",
});

export default api;
