<template>
  <div class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "Loader",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.lds-facebook {
  margin-top: 100px;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: rgb(65, 65, 65);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  background: rgb(125, 0, 156);
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  background: rgb(125, 0, 156, 0.7);
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  background: rgb(125, 0, 156, 0.4);
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
