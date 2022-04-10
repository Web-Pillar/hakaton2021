import * as API from "@/services/API";

export default {
    createRequest(payload) {
        return API.apiClient.post(`/admin_request`, payload);
    },

    getRequests() {
        return API.apiClient.get(`/admin_request`);
    },

    getRequest(reqId) {
        return API.apiClient.get(`/admin_request/${reqId}`);
    },

    updateRequest(reqId, payload) {
        return API.apiClient.put(`/admin_request/${reqId}`, payload);
    },

    deleteRequest(reqId) {
        return API.apiClient.delete(`/admin_request/${reqId}`);
    }
};
