/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import Vue from 'vue';
import VueRouter from "vue-router";
import store from './vue/store/index'

import App from './vue/components/App'
import Blank from "./vue/components/Right/Blank";
import Right from "./vue/components/Right/Right";

Vue.use(VueRouter);

const routes = [
    {
        name : 'blank',
        path : '/',
        component : Blank
    },
    {
        name : 'conversation',
        path : '/conversation/:id',
        component : Right
    }
];
const router = new VueRouter({
    linkActiveClass: 'active text-white',
    mode : 'abstract',
    routes
});

store.commit("SET_USERNAME", document.querySelector('#app').dataset.username);

new Vue({
    store,
    router,
    render : h => h(App)
}).$mount('#app');

router.replace('/');
