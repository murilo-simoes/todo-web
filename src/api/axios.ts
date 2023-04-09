import axios from "axios";

export const api = axios.create({
  baseURL: "https://todo-api-olive.vercel.app/",
});
