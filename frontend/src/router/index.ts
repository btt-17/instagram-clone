import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'login',
            component: LoginPage
        },
        {
            path: "/signup",
            name: 'signup',
            component: SignupPage
        },
        {
            path: "/home",
            name: 'home',
            component: HomePage
        },
    ]
})

export default router