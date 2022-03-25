import axios from "axios";
const api = axios.create({
    baseURL:"https://api.quran.com/api/v4"
})
export default api ;