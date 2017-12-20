//import styles
import '../style.css';
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../template.html';
import '../about.html';
import '../contact.html';

//
import Vue from 'vue';
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import Vuex from 'vuex';
import store from './store';
import {hamburgerMenu, hamburgerMenuButton} from '@profesia/vue-hamburger-menu-component';



Vue.use(Vuex);
export default new Vuex.Store({});

import newComponent from './components/hello.vue';
Vue.component('hello-component', newComponent);


const app = new Vue({
    el: '#app',

    store,

    components: {
        hamburgerMenuButton,
        hamburgerMenu,
    }
});