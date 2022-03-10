<template>
  <div>
    <div class="mx-14 my-8">
      <v-row class="shrink">
        <v-col>
          <v-card-title class="text-h5">{{$t("nameofschool")}}</v-card-title>
        </v-col>
        <v-col v-for="school in filteredSchools" :key="`school_${school.id}`">
          <v-card-title class="text-h5">{{ school.schoolName }}</v-card-title>
        </v-col>
      </v-row>
      <v-btn @click="deleteCompare(), $router.go(-1)">{{$t("removecompare")}}</v-btn>
    </div>

    <v-tabs-items v-model="model">
      <v-tab-item :value="model">
        <v-card text>
          <div class="mx-14 my-8">
            <v-row class="shrink">
              <v-col>
                <v-card-text>{{$t("adresse")}}:</v-card-text>
                <v-card-text>{{$t("phonenumber")}}:</v-card-text>
                <v-card-text>{{$t("faksnumber")}}:</v-card-text>
                <v-card-text>{{$t("email")}}:</v-card-text>
                <v-card-text>{{$t("foundedby")}}:</v-card-text>
                <v-card-text>{{$t("teachinglanguage")}}:</v-card-text>
                <v-card-text>{{$t("yearofconstruction")}}:</v-card-text>
                <v-card-text>{{$t("typeofconstruction")}}:</v-card-text>
                <v-card-text>{{$t("areaofobject")}}:</v-card-text>
                <v-card-text>{{$t("areaofschoolpark")}}:</v-card-text>
                <v-card-text>{{$t("shcoolworkswithshifts")}}:</v-card-text>
                <v-card-text>{{$t("heatingsystem")}}:</v-card-text>
                <v-card-text>{{$t("numberofclasses")}}:</v-card-text>
                <v-card-text>{{$t("numberofstudents")}}:</v-card-text>
                <v-card-text>{{$t("numberofteachers")}}:</v-card-text>
                <v-card-text>{{$t("canteene")}}:</v-card-text>
                <v-card-text>{{$t("library")}}:</v-card-text>
                <v-card-text>{{$t("laboratory")}}:</v-card-text>
              </v-col>
              <v-col
                v-for="school in filteredSchools"
                :key="`school_details_${school.id}`"
              >
                <v-card-text>{{ school.address }}</v-card-text>
                <v-card-text>{{ school.phoneNumber }}</v-card-text>
                <v-card-text>{{ school.fax }}</v-card-text>
                <v-card-text>{{ school.email }}</v-card-text>
                <v-card-text>{{ school.foundedBy }}</v-card-text>
                <v-card-text>{{ school.language }}</v-card-text>
                <v-card-text>{{ school.builtAt }}</v-card-text>
                <v-card-text>{{ school.buildingType }}</v-card-text>
                <v-card-text>{{ school.buildingArea }}</v-card-text>
                <v-card-text>{{ school.gardenArea }}</v-card-text>
                <v-card-text>{{ school.shifts }}</v-card-text>
                <v-card-text>{{ school.heating }}</v-card-text>
                <v-card-text>{{ school.nrClasses }}</v-card-text>
                <v-card-text>{{ school.nrStudents }}</v-card-text>
                <v-card-text>{{ school.nrTeachers }}</v-card-text>
                <v-card-text>{{ school.canteen }}</v-card-text>
                <v-card-text>{{ school.library }}</v-card-text>
                <v-card-text>{{ school.labs }}</v-card-text>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { schools } from "./../data/schools_v2";

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      schools: schools,

      model: "compare",
    };
  },
  computed: {
    ...mapState({
      compareIds: (state) => state.compareIds,
    }),
    filteredSchools() {
      return this.schools.filter((s) => this.compareIds.includes(s.id));
    },
  },
  methods: {
    ...mapActions(["clearCompare"]),
    deleteCompare() {
      this.clearCompare();
    },
  },
};
</script>