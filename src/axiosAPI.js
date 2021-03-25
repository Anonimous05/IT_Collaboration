import axios from "axios";

const axiosAPI = axios.create({
   baseURL: "https://test-90991-default-rtdb.firebaseio.com/",
});

export default axiosAPI;