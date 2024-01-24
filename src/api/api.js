import instance from "../redux/api-instance";

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
