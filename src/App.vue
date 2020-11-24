<template>
  <div id="app">
  <div id="nav">
      <router-link to='/home'>Home</router-link>&emsp;
      <router-link  to='/posts'>Posts</router-link>
      </div>
  <hr/>
    <router-view>
  </router-view>

   <!-- <Posts/> -->
  </div>

</template>

<script>

import Posts from './components/Posts.vue'
import Home from './components/Home'
export default {
  name: 'App',
  components: {
   Posts,
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
  margin-top: 60px;
}

</style>
