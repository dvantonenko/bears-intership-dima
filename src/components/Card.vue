<template>
  <div class="card">
    <div class="description_text font_sf">
      {{ image.description }}
    </div>
    <router-link :to="`/article/` + image.id" class="link">
      <img
        :src="`https://s3.us-east-2.amazonaws.com/posters.images/${image.key}`"
        class="image"
      />
    </router-link>
  </div>
</template>

<script scoped>
export default {
  props: ["image"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.card {
  position: relative;
  overflow: hidden;
  opacity: 0;
  height: 175px;
  float: left;
  margin: 40px 14px;
  min-width: 304px;
  z-index: 1;
  transition: all 0.5s ease-in;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.description_text {
  position: absolute;
  opacity: 0;
  width: 100%;
  font-size: 22px;
  line-height: 50px;
  height: 52px;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 0.5s;
  z-index: 3;
}
.image {
  height: 176px;
  width: 304px;
  transition: all 0.2s ease-in;
  z-index: 2;
}
.link {
  text-decoration: none;
}
.card:hover .description_text {
  opacity: 1;
  transform: translateY(124px);
}
.card:hover {
  transform: scale(1.1);
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
