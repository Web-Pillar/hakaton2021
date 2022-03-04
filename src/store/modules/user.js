import UserService from "@/services/UserService";

function setPaginatedUsers(commit, response) {
    commit("SET_USERS", response.data.data);
}

const state = {
    users: []
};

const mutations = {
    SET_USERS(state, users) {
        state.users = users;
    },
    CREATE_USER(state, user) {
        state.users.push(user);
    },
    UPDATE_USER(state, user) {
        state.users = state.users.map(u => {
            if (u._id === user._id) { u = Object.assign(user); }
            return u;
        })
    }
}

const actions = {
    getUsers({ commit }) {
        UserService.getUsers()
            .then((response) => {
                setPaginatedUsers(commit, response);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    },
    createUser({ commit }, payload) {
        UserService.createUser(payload)
            .then((response) => {
                commit("CREATE_USER", response.data.data);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    },
    updateUser({ commit }, payload) {
        UserService.updateUser(payload._id, payload)
            .then((response) => {
                commit("UPDATE_USER", response.data.data);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    }
}

const getters = {
    users: state => state.users,
}

const userModule = {
    state,
    mutations,
    actions,
    getters,
}

export default userModule;