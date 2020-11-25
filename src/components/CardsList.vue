<template>
  <div id="box">
    <Card v-for="image of images" v-bind:image="image" v-bind:key="image.index" />
  </div>
</template>
<script>
import Card from "./Card";
import Footer from "./Footer";
export default {
  props: ["images"],
  components: {
    Card,
    Footer,
  },
};
</script>

<style>
#box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
