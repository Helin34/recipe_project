import axios from "axios"

const api = axios.create({
    baseUrl: "http://127.0.0.1:4000",
});
export default api;