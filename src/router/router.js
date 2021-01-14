import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'blog',
            component: () => import('@/views/ListingPage')
        },
        {
            path: '/addnewpost',
            name: 'Addnewpost',
            component: () => import('@/views/Addnewpost')
        },
        {
            path: '/links',
            name: 'links',
            component: () => import('@/views/Links')
        },
        {
            path: '/widgets',
            name: 'widgets',
            component: () => import('@/views/Widgets')
        },
        ,
        {
            path: "/article/:id",
            name: 'article',
            component: () => import('@/views/Article')
        },
        {
            path: `/update/:id`,
            name: 'poster',
            component: () => import('@/views/Poster')
        },
        {
            path: `/signin`,
            name: 'login',
            component: () => import('@/views/Login')
        },
        {
            path: `/signup`,
            name: 'register',
            component: () => import('@/views/Register')
        }


    ]
})

export default router;