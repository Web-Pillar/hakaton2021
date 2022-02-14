import * as API from "@/services/API";

export default {
    getUsers() {
        return API.apiClient.get(`/user`);
    },

    getUser(userId) {
        return API.apiClient.get(`/user/${userId}`);
    },

    updateUser(userId, payload) {
        return API.apiClient.put(`/user/${userId}`, payload);
    },

    createUser(payload) {
        return API.apiClient.post(`/user`, payload);
    },

    deleteUser(userId) {
        return API.apiClient.delete(`/user/${userId}`);
    }

    //   getUsers(page) {
    //     return API.apiClient.get(`/user/?page=${page}`);
    //   },
    //   paginateUsers(link) {
    //     return API.apiClient.get(link);
    //   },
};
