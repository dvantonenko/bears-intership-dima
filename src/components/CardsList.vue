<template>
  <div class="cards_container">
    <Card v-for="(image, index) of images" v-bind:image="image" v-bind:key="index" />
  </div>
</template>
<script scoped>
import Card from "./Card";
import Footer from "./Footer";
export default {
  props: ["images"],
  components: {
    Card,
  },
};
</script>

<style>
.cards_container {
  width: 52%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
