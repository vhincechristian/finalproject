import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import aboutvuetifyView from '../views/aboutvuetifyView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import quizapp from "../components/quizapp.vue"
import modal from "../components/modal.vue"
import RegisterView from "../views/RegisterView.vue"
import SignInView from "../views/SignInView.vue"
import MatchHistory from "../views/MatchHistory.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: HomeView
        },

        {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView
        },

        {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView
        },

        {
            path: '/aboutMe',
            name: 'AboutMeView',
            component: AboutMeView,

        },

        {
            path: '/aboutvuetify',
            name: 'aboutvuetify',
            component: aboutvuetifyView,

        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView,

        },

        {
            path: '/quizapp',
            name: 'quizapp',
            component: quizapp,

        },

        {
            path: '/modal',
            name: 'modal',
            component: modal,

        },

        {
            path: '/RegisterView',
            name: 'register',
            component: RegisterView,

        },

        {
            path: '/SignInView',
            name: 'signin',
            component: SignInView,

        },

        {
            path: '/MatchHistory',
            name: 'history',
            component: MatchHistory,

        },

    ]
})

export default router