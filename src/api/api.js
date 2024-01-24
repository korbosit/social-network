// import instance from "../redux/api-instance";
import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "e2ce764c-daf0-40f7-af22-472dae522b83",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true,
            })
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`);
    },
};

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    },
};
