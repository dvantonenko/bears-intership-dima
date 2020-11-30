import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/Posts.vue'
import About  from '../views/About.vue'
import Blog  from '../views/Blog.vue'
import Links  from '../views/Links.vue'
import Projects  from '../views/Projects.vue'

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
            component: Posts
        },
   
        {
            path: '/listingpage/about',
            name: 'about',
            component: About
        },        
        {
            path: '/listingpage/links',
            name: 'links',
            component: Links
        },
        {
            path: '/listingpage/projects',
            name: 'projects',
            component: Projects
        },
        ,
        {
            path: '/listingpage/blog',
            name: 'blog',
            component: Blog
        },
        { path : "/article",
        name : 'article',
        component: ()=> import('@/views/Article')
        }


    ]
})

export default router;