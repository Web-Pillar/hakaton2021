<template>
  <v-container>
    <h2
      class="
        text-center text-h2 text-sm-h2 text-md-h2 text-lg-h2
        mb-4
        primary--text
      "
    >
      {{ $t("admin_form.title") }}
    </h2>
    <v-row class="px-6 py-4">
      <v-col class="p-4" cols="12" sm="12" md="6">
        <h2
          class="
            text-center text-h4 text-sm-h4 text-md-h4 text-lg-h4
            mb-4
            secondary--text
          "
        >
          {{ $t("admin_form.header") }}
        </h2>
        <p class="secondary--text text-sm-h5">
          {{ $t("admin_form.description") }}
        </p>
        <ul class="secondary--text text-sm-h5">
          <li>{{ $t("admin_form.list.1") }}</li>
          <li>{{ $t("admin_form.list.2") }}</li>
          <li>{{ $t("admin_form.list.3") }}</li>
        </ul>
      </v-col>
      <v-col class="p-4" cols="12" sm="12" md="6">
        <v-form @submit.prevent="submit">
          <v-row no-gutters justify="space-around">
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="name"
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages.name"
                :label="$t('admin_form.full_name')"
                placeholder="John Doe"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="email"
                v-model="email"
                :rules="[() => !!email || 'This field is required', emailCheck]"
                :error-messages="errorMessages.email"
                :label="$t('admin_form.email')"
                placeholder="john.doe@example.com"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="address"
                v-model="address"
                :rules="[
                  () => !!address || 'This field is required',
                  () =>
                    (!!address && address.length <= 25) ||
                    'Address must be less than 25 characters',
                ]"
                :label="$t('admin_form.address')"
                placeholder="Snowy Rock Pl"
                counter="25"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="city"
                v-model="city"
                :rules="[() => !!city || 'This field is required']"
                :label="$t('admin_form.city')"
                placeholder="El Paso"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="state"
                v-model="state"
                :rules="[() => !!state || 'This field is required']"
                :label="$t('admin_form.state')"
                required
                outlined
                placeholder="TX"
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field
                ref="zip"
                v-model="zip"
                :rules="[() => !!zip || 'This field is required']"
                :label="$t('admin_form.zip')"
                required
                outlined
                placeholder="79938"
              ></v-text-field>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-text-field-simplemask
                ref="phoneNumber"
                v-model="phoneNumber"
                :rules="[() => !!phoneNumber || 'This field is required']"
                :label="$t('admin_form.phoneNumber')"
                v-bind:properties="{
                  prefix: '+',
                  suffix: '',
                  readonly: false,
                  disabled: false,
                  outlined: true,
                  clearable: false,
                  required: trie,
                  placeholder: '+389 7X XXX XXX',
                }"
                v-bind:options="{
                  inputMask: '### ## ### ###',
                  outputMask: '###########',
                  empty: null,
                  applyAfter: false,
                  numeric: true,
                }"
              ></v-text-field-simplemask>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value="birthday"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthday"
                    :label="$t('admin_form.birthday')"
                    :rules="[() => !!birthday || 'This field is required']"
                    prepend-icon="mdi-calendar"
                    readonly
                    required
                    outlined
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birthday"
                  no-title
                  scrollable
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="px-2" cols="12" sm="12" md="6">
              <v-select
                ref="sex"
                v-model="sex"
                :rules="[() => !!sex || 'This field is required']"
                :label="$t('admin_form.gender')"
                required
                outlined
                :items="genders"
              ></v-select>
            </v-col>
          </v-row>
          <v-divider class="mt-12"></v-divider>
          <v-btn class="float-right" color="primary" text @click="submit">{{
            $t("submit")
          }}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminRequestService from "../services/AdminRequestService";

export default {
  data: () => ({
    errorMessages: {
      name: "",
      email: "",
    },
    name: null,
    email: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    phoneNumber: null,
    birthday: null,
    sex: null,
    formHasErrors: false,
    genders: ["M", "F"],
    menu: false,
  }),
  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        phoneNumber: this.phoneNumber,
        birthday: this.birthday,
        sex: this.sex,
      };
    },
  },
  watch: {
    name() {
      this.errorMessages.name = "";
    },
    email() {
      this.errorMessages.email = "";
    },
  },
  methods: {
    emailCheck() {
      if (!this.email) {
        return true;
      }
      let valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.email
      );
      this.errorMessages.email = !valid ? `Invalid email` : "";
      return valid;
    },
    async submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
      });

      const response = await AdminRequestService.createRequest(this.form);
      console.log("Response", response);
    },
  },
};
</script>

<style>
</style>