import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

//Bootstrap Framework
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import WomenAllCategoriesNav from './components/products/WomenAllCategoriesNav.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('women-all-categories-nav', WomenAllCategoriesNav)

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
