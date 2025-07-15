// import Vue from 'vue'
// import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from "vue-router";   //这里是vue3的导入使用方法
import Layout from './components/LayoutComponent.vue'
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Contact from './views/ContactView.vue'

// Vue.use(VueRouter)   //vue2旧的方法

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact
            }
        ]
    }
]


const router = createRouter({
    history: routerHistory,
    routes,
});

export default router
