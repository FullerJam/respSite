//import dependencies
import Vue from 'vue';
import VueParticles from 'vue-particles'
import VeeValidate from 'vee-validate'
import Vuex from 'vuex';
import store from './store';
import {hamburgerMenu, hamburgerMenuButton} from '@profesia/vue-hamburger-menu-component';


import newComponent from './components/hello.vue';


//import styles
import '../style.css';
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../blog.html';
import '../about.html';
import '../contact.html';
import '../landing.html';
import '../profile.html';
import '../particles.html'

Vue.use(VueParticles);
Vue.use(Vuex);
Vue.use(VeeValidate);
export default new Vuex.Store({});
Vue.component('hello-component', newComponent);


const app = new Vue({
    el: '#app',

    store,

    components: {
        hamburgerMenuButton,
        hamburgerMenu,
    }
});

// Form Validation

new Vue({
    el: '#formApp',
    data: function() {
        return {
            title: 'Vue Vee Validation',
            // model.name bound to
            // a form text control
            model: {
                name: '',
                bio: '',
                email: '',
            }
        }
    },
            methods: {
            //form handler
            onSubmit: function() {
                //log entire model to console
                console.log(this.model)
            }
        }
    },
)

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});