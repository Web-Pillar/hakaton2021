<template>
  <v-data-table :headers="headers" :items="schools" class="elevation-1">
    <template v-slot:top>
      <v-toolbar text>
        <v-toolbar-title>Schools</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="900px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New School</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-stepper v-model="step">
              <v-stepper-header>
                <v-stepper-step :complete="step > 1" step="1">Details</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="step > 2" step="2">Location</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.id" label="ID"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
                        </v-col>-->
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field type="email" v-model="editedItem.email" label="Email"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field
                            type="number"
                            v-model="editedItem.latitude"
                            label="Latitude"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field
                            type="number"
                            v-model="editedItem.longitude"
                            label="Longitude"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="4" md="2">
                          <v-text-field v-model="editedItem.municipality" label="Municipality"></v-text-field>
                        </v-col>

                        <v-col cols="10" sm="5" md="3">
                          <v-text-field v-model="editedItem.phoneNumber" label="phoneNumber"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
                        </v-col>-->
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field v-model="editedItem.fax" label="fax"></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field
                            type="string"
                            v-model="editedItem.foundedBy"
                            label="foundedBy"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field
                            type="date"
                            v-model="editedItem.verifiedAt"
                            label="verifiedAt"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="4" md="2">
                          <v-text-field v-model="editedItem.language" label="language"></v-text-field>
                        </v-col>
                        <v-col cols="10" sm="5" md="3">
                          <v-text-field type="date" v-model="editedItem.builtAt" label="builtAt"></v-text-field>
                        </v-col>

                        <v-col cols="10" sm="4" md="2">
                          <v-text-field v-model="editedItem.buildingType" label="buildingType"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
                        </v-col>-->
                        <v-col cols="8" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.buildingArea"
                            label="buildingArea"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="8" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.gardenArea"
                            label="gardenArea"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.nrClasses"
                            label="nrClasses"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.nrStudents"
                            label="nrStudents"
                          ></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
                        </v-col>-->
                        <v-col cols="6" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.nrTeachers"
                            label="nrTeachers"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-text-field
                            type="number"
                            v-model="editedItem.nrClassrooms"
                            label="nrClassrooms"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-switch
                            inset
                            v-model="editedItem.shifts"
                            label="Shifts"
                            :items="shifts"
                            false-value="false"
                            input-value="value"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-text-field type="string" v-model="editedItem.heating" label="Heating"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-switch
                            inset
                            v-model="editedItem.canteen"
                            label="Canteen"
                            :items="canteens"
                            false-value="false"
                            input-value="value"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-switch
                            inset
                            v-model="editedItem.library"
                            label="Library"
                            :items="library"
                            false-value="false"
                            input-value="value"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                          <v-switch
                            inset
                            type="bolean"
                            v-model="editedItem.labs"
                            label="Labs"
                            :items="labs"
                            false-value="false"
                            input-value="value"
                          ></v-switch>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="step = 2">Next</v-btn>
                    <v-btn color="error darken-1" text @click="close">Cancel</v-btn>
                  </v-card-actions>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card-text>
                    <l-map
                      ref="map"
                      class="map-container-custom"
                      style="border-radius: 0;z-index: 0"
                      :zoom="zoom"
                      :center="[editedItem.latitude, editedItem.longitude]"
                    >
                      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                      <l-marker ref="marker"
                        :lat-lng="[editedItem.latitude, editedItem.longitude]"
                        :draggable="true" @dragend="onDragEnd"
                      >
                        <l-icon
                          :icon-size="[60, 90]"
                          :icon-anchor="iconAnchor"
                          :icon-url="getMarkerIcon(editedItem)"
                        ></l-icon>
                      </l-marker>
                    </l-map>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="step = 1">Back</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    <v-btn color="error darken-1" text @click="close">Cancel</v-btn>
                  </v-card-actions>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card v-if="editedIndex !== -1">
            <v-card-title class="text-h5">
              {{
                `Are you sure you want to delete ${schools[editedIndex].name} `
              }}?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <span>No schools created</span>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import red_elementary from '../../assets/school_icons/red_middleschool.svg';
import yellow_elementary from '../../assets/school_icons/yellow_middleschool.svg';
import green_elementary from '../../assets/school_icons/green_middleschool.svg';
import red_middleschool from '../../assets/school_icons/red_highschool.svg';
import yellow_middleschool from '../../assets/school_icons/yellow_highschool.svg';
import green_middleschool from '../../assets/school_icons/green_highschool.svg';
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
} from "vue2-leaflet";

export default {
  beforeRouteEnter(to, from, next) {
    store.dispatch("getSchools").then(() => {
      next();
    });
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    step: 1,
    zoom: 7,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    iconSize: [30, 50],
    iconAnchor: [16, 45],
    icons: {
      red_elementary,
      yellow_elementary,
      green_elementary,
      red_middleschool,
      yellow_middleschool,
      green_middleschool,
    },
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      // { text: 'Surname', value: 'surname' },
      { text: "ID", value: "id" },

      { text: "Email", value: "email" },
      { text: "Address", value: "address" },
      { text: "Latitude", value: "latitude" },
      { text: "Shifts", value: "shifts" },

      { text: "Created", value: "createdAt" },
      { text: "Updated", value: "updatedAt" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      _id: null,
      id: "",
      name: "",
      enable: "",
      email: "",
      address: "",
      latitude: "",
      longitude: "",
      municipality: "",
      phoneNumber: "",
      fax: "",
      foundedBy: "",
      verifiedAt: "",
      language: "",
      builtAt: "",
      buildingType: "",
      buildingArea: "",
      gardenArea: "",
      shifts: true,
      heating: "",
      nrClasses: "",
      nrStudents: "",
      nrTeachers: "",
      nrClassrooms: "",
      canteen: "",
      library: "",
      labs: "",
      rating: 0,
      type: '',
    },
    defaultItem: {
      _id: null,
      id: "",
      name: "",
      enable: "",
      email: "",
      address: "",
      latitude: "",
      longitude: "",
      municipality: "",
      phoneNumber: "",
      fax: "",
      foundedBy: "",
      verifiedAt: "",
      language: "",
      builtAt: "",
      buildingType: "",
      buildingArea: "",
      gardenArea: "",
      shifts: true,
      heating: "",
      nrClasses: "",
      nrStudents: "",
      nrTeachers: "",
      nrClassrooms: "",
      canteen: false,
      library: false,
      labs: false,
      rating: 0,
      type: '',
    },
    canteens: [{ value: true }],
    library: [{ value: true }],
    labs: [{ value: true }],
    heating: [{ value: true }],
    shifts: [{ value: true }],
  }),

  computed: {
    ...mapGetters(["schools"]),
    formTitle() {
      return this.editedIndex === -1 ? "New School" : "Edit School";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.schools.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.schools.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.schools.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        // console.log(this.editedItem._id);
        await store.dispatch("updateSchool", this.editedItem);

        Object.assign(this.schools[this.editedIndex], this.editedItem);
      } else {
        await store.dispatch("createSchool", this.editedItem);
      }
      this.close();
    },

    getMarkerIcon(school) {

      let color;
      if (school.rating < 2.5) {
        color = 'red';
      } else if (school.rating > 3.5) {
        color = 'green';
      } else {
        color = 'yellow';
      }

      if (school.type === '') {
        return this.icons.red_elementary;
      }

      return this.icons[`${color}_${school.type}`];
    },

    onDragEnd() {
      const locObj = this.$refs.marker.mapObject.getLatLng();
      this.editedItem.latitude = locObj.lat;
      this.editedItem.longitude = locObj.lng;
    }
  },
};
</script>

<style scoped>
.map-container-custom {
  min-height: 80vh;
}
@media only screen and (max-width: 600px) {
  .map-container-custom {
    min-height: 60vh;
  }
}
</style>