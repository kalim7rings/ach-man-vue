import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import Home from '@/js/components/Home';
//import About from '@/js/components/About';

//import AdminLayout from './../pages/Layouts/AdminLayout.vue';

//import Home from './../../Admin/components/Home.vue';
//const Home = resolve => require(['./components/Home'], resolve);



/*
import About from './../../Admin/components/About.vue';
import Service from './../../Admin/components/Service.vue';
import Contact from './../../Admin/components/Contact.vue';
import Editor from './../../Admin/components/Editor.vue';
import CkEditor from './../../Admin/components/CkEditor.vue';
*/


//import Articles from './../../Admin/pages/Articles/index.vue';
//import CreateArticle from './../../Admin/pages/Articles/CreateArticle.vue';

//import NotFound from './../pages/Error/404.vue';

import Home from './../components/pages/home/Index.vue';
import StepOne from './../components/pages/home/StepOne.vue';
import StepTwo from './../components/pages/home/StepTwo.vue';

const router = new VueRouter({
    mode : 'history',
    base : '/ach-mandatev/',
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home,
        },
        {
            path : '/step-one',
            name : 'Ach mandate step one',
            component: StepOne,
        },
        {
            path : '/step-two',
            name : 'Ach mandate step two',
            component: StepTwo,
        },

        // Artilces
        /*{
            path : '/articles',
            name : 'Articles',
            component: Articles,
        },
        {
            path : '/add-article',
            name : 'Add Article',
            component: CreateArticle,
        },*/
        /*{
            path: '/404',
            name: 'Not Found',
            //props: { page: 5 },
            component: NotFound
        },
        {
            path: '*',
           // props: { page: 5 },
            redirect: '/404'
        }*/
        //{ path: '_=_', redirect: '/' }
    ]
});

/*
const router = new VueRouter({
    routes : [
        {
            path: "/",
            component: AdminLayout,
            //redirect: "/home",
            children: [
                {
                    path: "home",
                    name: "Home",
                    component: Home
                },
                {
                    path : '/about',
                    name : 'About us',
                    component: About,
                },
                {
                    path : '/service',
                    name : 'Services',
                    component : Service,
                },
                {
                    path : '/contact',
                    name : 'Contact us',
                    component : Contact,
                },
            ]
        }
    ]
});
*/

export default router;