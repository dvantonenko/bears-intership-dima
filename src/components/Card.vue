<template>
  <div class="card">
    <router-link :to="`/article/` + image.id" class="link">
      <div>
        <!-- <img :src="image.src" class="image" /> -->
        <img
          :src="`https://s3.us-east-2.amazonaws.com/posters.images/${image.key}`"
          class="image"
        />
        <div class="description_block">
          <span class="description_text font_sf">{{ image.description }}</span>
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
.description_block {
  height: 124px;
  text-align: center;
  white-space: pre-wrap;
  max-width: 262px;
  margin: 0 auto;
  overflow: hidden;
}
.description_text {
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
