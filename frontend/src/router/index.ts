import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'
import Status from '../components/Status.vue'
import EditProfile from '../components/EditProfile.vue'
import PageNotFound from '../views/PageNotFound.vue'
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
                    path: 'profile',
                    component: EditProfile,
                },
            ]
        },
    ]
})

export default router