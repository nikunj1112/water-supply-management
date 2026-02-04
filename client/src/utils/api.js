import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1011/api",
  withCredentials: true
});

export default api;
