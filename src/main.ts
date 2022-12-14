import Vue from 'vue';

import App from './App.vue';
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'mini' });

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import BoxUI from "@lauxinyi/box-ui";
import "@lauxinyi/box-ui/dist/style.css"
Vue.use(BoxUI, { option: true });

import BoxEditor, { projectStore,componentStore } from "@lauxinyi/box-editor"
import "@lauxinyi/box-editor/dist/style.css"
Vue.use(BoxEditor, { option: true });

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import BoxVant from "./components/main";
Vue.use(BoxVant, { option: true });

import pinia from "./store/pinia"
Vue.prototype.$project = projectStore(pinia);

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');