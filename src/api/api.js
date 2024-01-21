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
};
