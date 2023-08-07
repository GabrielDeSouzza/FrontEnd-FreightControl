import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        Accept: "*/*",
        "Content-Type": 'application/x-www-form-urlencoded' 
    }
})

export default api