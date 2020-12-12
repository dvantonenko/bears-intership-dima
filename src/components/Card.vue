<template>
  <div class="card">
    <router-link to="/article" class="link">
      <div>
        <img :src="image.src" class="image" />
        <div class="discription_block">
          <span class="discription_text font_sf">{{ image.discription }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script scoped>
export default {
  props: ["image"],
};
</script>

<style>
.card {
  padding: 5px;
  height: 300px;
  float: left;
  margin: 0 9px;
}
.image {
  height: 176px;
  width: 304px;
}
.discription_block {
  height: 124px;
  text-align: center;
  white-space: pre-wrap;
  max-width: 262px;
  margin: 0 auto;
}
.discription_text {
  font-size: 22px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  font-style: normal;
  font-weight: 500;
}
.link {
  text-decoration: none;
}
</style>
