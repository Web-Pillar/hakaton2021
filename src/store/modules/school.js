import SchoolService from "@/services/SchoolService";
import { School } from '@/models/School';

function setPaginatedSchools(commit, response) {
    commit("SET_SCHOOLS", response.data.data);
}

const state = {
    schools: [],
};

const mutations = {
    SET_SCHOOLS(state, schools) {
        state.schools = schools.map(s => {
            const schoolDTO = new School(s);
            return schoolDTO;
        });
    },
    SET_SCHOOL_DETAILS(state, schoolDetails) {
        state.schools = state.schools.map(s => {
            if (s._id === schoolDetails._id) { s = Object.assign(schoolDetails); }
            return s;
        })
    },
    CREATE_SCHOOL(state, school) {
        state.schools.push(school);
    },
    UPDATE_SCHOOL(state, school) {
        state.schools = state.schools.map(s => {
            if (s._id === school._id) { s = Object.assign(school); }
            return s;
        })
    }
}

const actions = {
    getSchools({ commit }) {
        SchoolService.getSchools()
            .then((response) => {
                setPaginatedSchools(commit, response);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    },
    getSchoolDetails({ commit }, id) {
        SchoolService.getSchool(id)
            .then((response) => {
                commit("SET_SCHOOL_DETAILS", response.data.data);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    },
    createSchool({ commit }, payload) {
        SchoolService.createSchool(payload)
        .then((response) => {
            commit("CREATE_SCHOOL", response.data.data);
        })
        .catch((error) => {
            console.log('ERROR', error);
            // commit("SET_LOADING", false);
            // commit("SET_ERROR", getError(error));
        });
    },
    updateSchool({ commit }, payload) {
        SchoolService.updateSchool(payload._id, payload)
            .then((response) => {
                commit("UPDATE_SCHOOL", response.data.data);
            })
            .catch((error) => {
                console.log('ERROR', error);
                // commit("SET_LOADING", false);
                // commit("SET_ERROR", getError(error));
            });
    }
}

const getters = {
    schools: state => state.schools,
}

const schoolModule = {
    state,
    mutations,
    actions,
    getters,
}

export default schoolModule;