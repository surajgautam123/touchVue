import HomeContainer from './containers/home/HomeContainer.vue';
import ProductContainer from './containers/products/ProductContainer.vue';
import StaticContainer from './containers/static/StaticContainer.vue';
import Login from './components/login/Login.vue';

export const routes = [
    { path: '', component: HomeContainer},
    { path: '/login', component: Login},
    { path: '/products', component: ProductContainer},
    { path: '/static', component: StaticContainer}
];