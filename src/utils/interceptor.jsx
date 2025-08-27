import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "./cookie";

export const TOKEN = "accessToken";

const DOMAIN = "https://movienew.cybersoft.edu.vn";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxNiIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc2ODI2MjQwMDAwMCIsIm5iZiI6MTc0NTM0NDgwMCwiZXhwIjoxNzY4NDEzNjAwfQ.7HwjnwyCQy67B09sLtGp-d7oyhXyP3LUVtXaz60bQeo";

export const navigateHistory = createBrowserHistory();

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
});

http.interceptors.request.use((req) => {
  req.headers = {
    //giữ lại các api phần chung và các api có header riêng
    ...req.headers,
    Authorization: getCookie(TOKEN),
    tokenCybersoft: TOKEN_CYBERSOFT,
  };
  return req;
});
