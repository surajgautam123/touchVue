import HomeContainer from './containers/home/HomeContainer.vue';
import StaticContainer from './containers/static/StaticContainer.vue';

export const routes = [
    { path: '', component: HomeContainer},
    { path: '/static', component: StaticContainer}
];