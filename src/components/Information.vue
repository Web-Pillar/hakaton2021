<template>
  <nav style="border-bottom: 6px solid #1678ca">
    <v-toolbar style="background-color: #343a40 !important; box-shadow: none">
      <v-toolbar-title style="color: white">
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!authUser" class="hidden-xs-only" style="padding-top: 18px">
        <div
          text
          v-for="item in menuItems"
          :key="item.title"
          :style="'margin: 0 20px 0 0'"
          style="box-shadow: none"
        >
          <v-btn
            v-if="item.test"
            :to="item.path"
            style="
              height: 100%;
              border-radius: 0;
              box-shadow: none;
              color: white;
              background-color: rgb(22, 120, 202);
            "
          >{{ item.title }}</v-btn>
          <v-btn
            v-if="!item.test"
            :to="item.path"
            @click="click(item)"
            style="
              height: 100%;
              border-radius: 0;
              box-shadow: none;
              color: white;
              background-color: transparent;
            "
          >{{ item.title }}</v-btn>
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
        </div>
      </v-toolbar-items>
      <!-- <v-spacer></v-spacer> -->
      <v-menu v-if="authUser" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar>
              <img :src="user.avatar" alt="User Avatar" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-items v-else class="hidden-xs-only">
        <v-btn
          style="
            background-color: #1678ca;
            box-shadow: none;
            margin: 0 2px 0 0;
            color: white;
          "
          @click="click(item)"
          text
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
import { mapGetters, mapActions } from "vuex"

export default {
  data() {
    // <== changed this line
    return {
      clicked: true,
      appTitle: "MetaSchools",

      menuItems: [
        { id: 1, title: "Home", path: "/", icon: "home", test: true },
        { id: 2, title: "Sign Up", path: "/signup", icon: "face", test: false },
        {
          id: 3,
          title: "Sign In",
          path: "/signin",
          icon: "lock_open",
          test: false,
        },
      ],
      menuItems2: [{ title: "Login", path: "/login", icon: "home" }],
      user: {
        name: 'Sandra Adams',
        email: 'sandra_a88@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
      }
    };
  },
  computed: {
      ...mapGetters(['authUser']),
  },
  methods:
  {
    ...mapActions(['logOut']),
    logout() {
      this.logOut();
      this.$router.push("/");
    },
    click(item) {
      item.test = !item.test
      this.menuItems.forEach(items => {
        if (items.id != item.id) {
          items.test = false;
        }
      });

    }
  }
};
</script>
<style>
.s:hover {
  background-color: rgb(65, 63, 63);
  box-shadow: n;
}
</style>