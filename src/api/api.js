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
            })
            .catch((error) => {
                console.error("Error during getUsers request:", error);
                throw error; // переброс ошибки для дальнейшей обработки
            });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`);
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please profileAPI object");
        return profileAPI.getProfile(userId);
    },
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    },
};

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    },
};
