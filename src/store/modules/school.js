import SchoolService from "@/services/SchoolService";
import { School } from '@/models/School';

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
            if (s._id === schoolDetails._id) { s = Object.assign(new School(schoolDetails)); }
            return s;
        })
    },
    CREATE_SCHOOL(state, school) {
        state.schools.push(school);
    },
    UPDATE_SCHOOL(state, school) {
        const index = state.schools.indexOf(s => s._id === school._id);
        if (index !== -1) {
            state.schools[index] = Object.assign(school);
        }
    }
}

const actions = {
    async getSchools({ commit }) {
        const response = await SchoolService.getSchools();
        commit("SET_SCHOOLS", response.data.data);
    },

    async getSchoolDetails({ commit }, id) {
        const response = await SchoolService.getSchool(id);
        commit("SET_SCHOOL_DETAILS", response.data.data);
    },

    async updateSchoolLocally({ commit }, payload) {
        commit("SET_SCHOOL_DETAILS", payload);
    },

    async createSchool({ commit }, payload) {
        const response = await SchoolService.createSchool(payload);
        commit("CREATE_SCHOOL", response.data.data);
    },

    async updateSchool({ commit }, payload) {
        const response = await SchoolService.updateSchool(payload._id, payload);
        commit("UPDATE_SCHOOL", response.data.data);
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