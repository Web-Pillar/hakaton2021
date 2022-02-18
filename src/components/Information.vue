<template>
  <nav style="border-bottom: 6px solid #1678ca">
    <v-toolbar style="background-color: #343a40 !important; box-shadow: none">
      <v-toolbar-title style="color: white">
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" style="padding-top: 18px">
        <v-btn
          style="
            background-color: #1678ca;
            box-shadow: none;
            margin: 0 20px 0 0;
            color: white;
          "
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          style="
            background-color: #1678ca;
            box-shadow: none;
            margin: 0 2px 0 0;
            color: white;
          "
          flat
          v-for="item in menuItems2"
          :key="item.title"
          :to="item.path"
        >
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    appTitle: "MetaSchools",
    menuItems: [
      { title: "Home", path: "/", icon: "home" },
      { title: "Sign Up", path: "/signup", icon: "face" },
      { title: "Sign In", path: "/signin", icon: "lock_open" },
    ],
    menuItems2: [{ title: "Login", path: "/login", icon: "home" }],
  }),
};
</script>
<style>
.s {
  background-color: rgb(65, 63, 63);
  box-shadow: n;
}
</style>