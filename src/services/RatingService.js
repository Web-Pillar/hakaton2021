import * as API from "@/services/API";

export default {
    submit(payload) {
        return API.apiClient.post(`/rating`, payload);
    },
};
