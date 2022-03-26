import {
    createRouter,
    createWebHistory
} from 'vue-router'
//import HomeContent from '../view/HomeContent.vue'

const routes = [{
    path: "/",
    component: () =>
        import ( /*webpackChunkName: "homecontent"*/ "../view/HomeContent.vue")
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router