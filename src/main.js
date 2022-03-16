import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import vuetify from './plugins/vuetify';
import store from './store';
import "vuetify/dist/vuetify.min.css";
import i18n from './i18n'
import VResponsiveMenu from 'vuetify-responsive-menu';


// The lines below fix the problem with marker icon
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  i18n,
  VResponsiveMenu,
  render: h => h(App)
}).$mount('#app')
