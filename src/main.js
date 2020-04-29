import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {store} from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: App
        }
    ]
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
