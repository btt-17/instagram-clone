import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'
import Status from '../components/Status.vue'
import Setting from '../components/Setting.vue'


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
            component: HomePage,
            children: [
                {
                    path: '',
                    component: Status,
                },
                {
                    path: 'setting',
                    component: Setting,
                },
            ]
        },
    ]
})

export default router