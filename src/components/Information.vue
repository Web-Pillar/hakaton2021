<template>
  <nav style="border-bottom: 6px solid #1678ca">
    <v-toolbar style="background-color: #343a40 !important; box-shadow: none">
      <v-toolbar-title style="color: white">
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-img max-width="160px" src="@/assets/Logo/Metaschools-logos_white.png"></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!authUser" class="" style="padding-top: 18px">
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
      <v-toolbar-items>
        <v-select v-model="$i18n.locale" class="mt-3 ml-2" :items="languages" item-value="val" outlined dense style="width: 90px;">
          <template v-slot:selection="{ item }">
            <div class="d-flex align-center pa-2">
              <img width="18px" height="12px" :src="item.image" >
            </div>
          </template>
          <template v-slot:item="{ item }">
            <div class="d-flex align-center pa-2">
              <img width="18px" height="12px" :src="item.image">
            </div>
          </template>
        </v-select>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import en from '@/assets/lang_icons/uk-xs.png';
import mk from '@/assets/lang_icons/macedonia-xs.png';
import al from '@/assets/lang_icons/albania-xs.png';

export default {
  data() {
    // <== changed this line
    return {
      clicked: true,
      appTitle: "MetaSchools",
      user: {
        name: 'Sandra Adams',
        email: 'sandra_a88@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
      },
      languages: [
        { val: 'en', image: en },
        { val: 'mk', image: mk },
        { val: 'sq', image: al },
      ],
    };
  },
  computed: {
    ...mapGetters(['authUser']),
    menuItems() {
      return [
      { id: 1, title: this.$t('home'), path: "/", icon: "home", test: true },
      { id: 2, title: this.$t('about'), path: "/about", icon: "home", test: true },
    ]},
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
    },
  }
};
</script>
<style>
.s:hover {
  background-color: rgb(65, 63, 63);
  box-shadow: n;
}
</style>