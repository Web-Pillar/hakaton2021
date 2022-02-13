import * as API from "@/services/API";

export default {
    getSchools() {
        return API.apiClient.get(`/school`);
    },

    getSchool(schoolId) {
        return API.apiClient.get(`/school/${schoolId}`);
    },

    updateSchool(schoolId, payload) {
        return API.apiClient.put(`/school/${schoolId}`, payload);
    },

    createSchool(payload) {
        return API.apiClient.post(`/school`, payload);
    },

    deleteSchool(schoolId) {
        return API.apiClient.delete(`/school/${schoolId}`);
    }
};
