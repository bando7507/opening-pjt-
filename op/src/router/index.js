import {
    createRouter,
    createWebHistory
} from 'vue-router'
//import HomeContent from '../view/HomeContent.vue'

const routes = [{
        path: "/",
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/HomeContent.vue")
    },
    {
        path: "/anime/:name/:image/:im",
        name: 'AnimeContent',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/AnimeContent")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router