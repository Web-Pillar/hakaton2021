import CasinoService from "@/services/CasinoService";

function setPaginatedCasinos(commit, response) {
    commit("SET_CASINOS", response.data.data);
}

const state = {
    casinos: [],
};

const mutations = {
    SET_CASINOS(state, casinos) {
        state.casinos = casinos;
    },
}

const actions = {
    getCasinos({ commit }) {
        CasinoService.getCasinos()
            .then((response) => {
                setPaginatedCasinos(commit, response);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    },
}

const getters = {
    casinos: state => state.casinos,
}

const casinoModule = {
    state,
    mutations,
    actions,
    getters,
}

export default casinoModule;