<template>
  <div id="app">
  <Navigation/>
    <router-view> </router-view>
<Footer/>
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import ListingPage from "@/views/ListingPage";
import Footer from "./components/Footer";
import Navigation from './components/Navigation'
export default {
  name: "App",
  components: {
    Posts,
    Footer,
    Navigation
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
margin: 0;
padding: 0;
  color: #2c3e50;
  height: 100vh;

}
</style>
