import HomeContainer from './containers/home/HomeContainer.vue';
import ProductContainer from './containers/products/ProductContainer.vue';
import WomenProducts from './components/products/WomenProducts.vue';
import StaticContainer from './containers/static/StaticContainer.vue';
import Login from './components/login/Login.vue';

export const routes = [
    { path: '', component: HomeContainer},
    { path: '/login', component: Login},
    { path: '/products', component: ProductContainer},
    { path: '/women', component: WomenProducts},
    { path: '/static', component: StaticContainer}
];