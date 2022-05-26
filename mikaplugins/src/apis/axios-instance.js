import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://raw.githubusercontent.com/mikalooloo/mikalooloo.github.io/main/mikaplugins",
});

export default axiosInstance;