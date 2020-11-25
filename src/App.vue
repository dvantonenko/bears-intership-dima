<template>
  <div id="app">

  <div id="nav">
      <router-link to='/home'>Home</router-link>&emsp;
      <router-link  to='/posts'>Posts</router-link>&emsp;
      <router-link  to='/listingpage'>Listingpage</router-link>
    </div> 
    <router-view>
  </router-view>
<!-- <Footer/> -->
  </div>

</template>

<script>

import Posts from './components/Posts.vue'
import Home from './components/Home.vue'
import ListingPage from './components/ListingPage'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
   Posts,Home,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
height : 100vw;
}

</style>
