import * as API from "@/services/API";

export default {
    getCasinos() {
        return API.apiClient.get(`/casino`);
    },

    deleteCasino(casinoId) {
        return API.apiClient.delete(`/casino/${casinoId}`);
    }
};
