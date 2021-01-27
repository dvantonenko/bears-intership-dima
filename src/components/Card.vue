<template>
  <div class="card">
    <router-link :to="`/article/` + image.id" class="link">
      <div>
        <img
          @mouseover="visible = !visible"
          @mouseleave="visible = !visible"
          :src="`https://s3.us-east-2.amazonaws.com/posters.images/${image.key}`"
          class="image"
        />
        <div class="animation_block">
          <transition name="slide-fade">
            <div v-if="visible" class="description_text font_sf">
              {{ image.description }}
            </div>
          </transition>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script scoped>
export default {
  props: ["image"],
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style>
.card {
  padding: 5px;
  height: 250px;
  float: left;
  margin: 0 9px;
}
.image {
  height: 176px;
  width: 304px;
  transition: all 0.2s ease-in;
}
.description_text {
  transform: translateY(-44px);
  width: 100%;
  font-size: 22px;
  line-height: 50px;
  height: 52px;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: auto;
  transition: 0.5s;
}
.link {
  text-decoration: none;
}
.image:hover {
  transform: scale(1.1);
}
.image:hover + .animation_block {
  transform: scale(1.1);
}
.animation_block {
  height: 50px;
  width: 304px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
