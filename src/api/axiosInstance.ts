import axios, { AxiosInstance } from "axios";
import cookies from "js-cookie";

const accessToken = cookies.get("accessToken");
axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
  timeout: 5000,
});

export default axiosInstance;
