import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'listingpage',
            component: ()=> import('@/views/ListingPage')
        },
        {
            path: '/posts',
            name: 'posts',
            component: ()=> import('@/components/Posts')
        },
   
        {
            path: '/listingpage/about',
            name: 'about',
            component: ()=> import('@/views/About')
        },        
        {
            path: '/listingpage/links',
            name: 'links',
            component: ()=> import('@/views/Links')
        },
        {
            path: '/listingpage/widgets',
            name: 'widgets',
            component: ()=> import('@/views/Widgets')
        },
        ,
        {
            path: '/listingpage/blog',
            name: 'blog',
            component: ()=> import('@/views/Blog')
        },
        {   path : "/article",
            name : 'article',
            component: ()=> import('@/views/Article')
        }


    ]
})

export default router;