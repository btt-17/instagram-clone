import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'

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
    ]
})

export default router