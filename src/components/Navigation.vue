<template>
  <nav class="nav">
    <div class="title">
      <span class="title_text font_ny">Nordic rose</span>
    </div>
    <div class="links">
      <div v-if="screenSize > 500" class="links_block">
      <div>
       <a 
       :href="`#/listingpage/${link}/`"
       class="link font_ny" 
       v-for="link of links" 
       v-bind:key="link">{{ link }}</a>
</div>
      </div>

      <img v-else-if="screenSize < 500" src="../assets/icons/Menu_icon_2_icon-icons.com_71856 (1).svg" class="menu_button" v-on:click="sideMenu = !sideMenu" />
      <div v-if="sideMenu" class="menu_toggle">
        <p>
          <strong><router-link to="/about">About</router-link></strong>
        </p>
        <p>
          <strong><router-link to="/blog">Blog</router-link></strong>
        </p>
        <p>
          <strong><router-link to="/links">Links</router-link></strong>
        </p>
        <p>
          <strong><router-link to="/projects">Projects</router-link></strong>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ["blog", "about", "links", "projects"],
      screenSize: null,
      sideMenu: false,
    };
  },
  methods: {
    onResize() {
      this.screenSize = document.documentElement.clientWidth;
      // console.log(this.screenSize);
      // console.log(this.sideMenu)
      if (this.screenSize > 375) this.sideMenu = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
};
</script>
<style scoped>
.nav {

  border-bottom: 1px solid grey;
  display: flex;
  width: 100%;
  height: 133px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
}
.title {
  float: left;
  width: 50%;
}
.title_text {
  float: left;
  margin: 40px;
  font-size: 30px;
  letter-spacing: 10px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
}

.links {
  display: flex;
  float: left;
  width: 50%;
}

.links_block {
  padding-left: 30%;
  padding-top: 50px;
  width: 100px;
}
.link {
  padding: 0 30px 62px 30px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
}
.link:hover {
  border-bottom: 2px solid black;
}
.menu_button {
  height: 40px;
  width: 40px;

  margin-top: 10px;
}
.menu_toggle {
  text-align: center;
  position: absolute;
  top: 65px;
  right: 0px;
  height: 200px;
 width: 100%;

  background: rgb(192, 192, 192, 0.5);
}

@media screen and (max-width: 500px) {
  .nav {
    height: 65px;
  }
  .title {
    width: 80%;
  }
  .links {
    width: 20%;
  }
  .title_text {
    margin: 21px 50px 20px 28px;
    font-size: 20px;
    letter-spacing: 5px;
  }
}
</style>
