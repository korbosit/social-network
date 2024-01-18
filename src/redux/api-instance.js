import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "e2ce764c-daf0-40f7-af22-472dae522b83",
    },
});

export default instance;
