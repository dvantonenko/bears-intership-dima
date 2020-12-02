import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/blog',
            name: 'listingpage',
            component: ()=> import('@/views/ListingPage')
        }, 
        {
            path: '/about',
            name: 'about',
            component: ()=> import('@/views/About')
        },        
        {
            path: '/links',
            name: 'links',
            component: ()=> import('@/views/Links')
        },
        {
            path: '/widgets',
            name: 'widgets',
            component: ()=> import('@/views/Widgets')
        },
        ,
        {   path : "/article",
            name : 'article',
            component: ()=> import('@/views/Article')
        }


    ]
})

export default router;