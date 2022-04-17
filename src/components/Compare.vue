<template>
  <div>
    <v-tabs-items v-model="model">
      <v-tab-item :value="model">
        <v-card text>
          <v-simple-table class="mx-14 my-8">
            <template>
              <tbody>
                <tr v-for="item in tableItems" :key="`tableItem_${item.label}`">
                  <th>{{ $t(item.label) }}</th>
                  <td v-for="school in schools" :key="`${item.label}_${school.id}`">{{ school[item.key] }}</td>
                </tr>
                <tr>
                  <th>{{ $t("finances") }}</th>
                  <td v-for="school in schools" :key="`finances_${school.id}`">
                    <v-data-table v-if="school.finances" :headers="headers" :items="school.finances.data"></v-data-table>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SchoolService from '../services/SchoolService';
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      schools: [],
      headers: [
        {
          text: "Year",
          align: "start",
          sortable: false,
          value: "year",
        },
        { text: "Budget", value: "budget" },
        { text: "Planed", value: "planed" },
        { text: "Realised", value: "realised" },
      ],
      model: "compare",
      tableItems: [
        { label: 'nameofschool', key: 'name' },
        { label: 'adresse', key: 'address' },
        { label: 'phonenumber', key: 'phoneNumber' },
        { label: 'faksnumber', key: 'fax' },
        { label: 'email', key: 'email' },
        { label: 'foundedby', key: 'foundedBy' },
        { label: 'teachinglanguage', key: 'language' },
        { label: 'yearofconstruction', key: 'builtAt' },
        { label: 'typeofconstruction', key: 'buildingType' },
        { label: 'areaofobject', key: 'buildingArea' },
        { label: 'areaofschoolpark', key: 'gardenArea' },
        { label: 'shcoolworkswithshifts', key: 'shifts' },
        { label: 'heatingsystem', key: 'heating' },
        { label: 'numberofclasses', key: 'nrClasses' },
        { label: 'numberofstudents', key: 'nrStudents' },
        { label: 'numberofteachers', key: 'nrTeachers' },
        { label: 'canteene', key: 'canteen' },
        { label: 'library', key: 'library' },
        { label: 'laboratory', key: 'labs' },
      ]
    };
  },
  computed: {
    ...mapState({
      compareIds: (state) => state.compareIds,
    }),
  },
  methods: {
    ...mapActions(["clearCompare"]),
    deleteCompare() {
      this.clearCompare();
    },
    async getSchool(id) {
      const response = await SchoolService.getSchool(id);
      this.schools.push(response.data.data);
    }
  },
  mounted() {
    let promiseArr = [];
    for (const id of this.compareIds) {
      promiseArr.push(this.getSchool(id));
    }
    if (promiseArr.length > 0) {
      Promise.all(promiseArr);
    }
  }
};
</script>

<style scoped>
  
</style>