<template>
  <nav class="nav">
    <div class="title">
      <span class="title_text font_ny">Nordic rose</span>
    </div>

    <div class="links">
      <div v-if="screenSize > 645 && screenSize < 1980" class="links_block">
        <a
          class="link font_ny"
          v-for="link of links"
          :href="link === `Blog` ? `#/` : `#/${link}/`"
          v-bind:class="{ active: $route.name.toLowerCase() === link.toLowerCase() }"
          v-bind:key="link"
          >{{ link == "Addnewpost" ? "Add new post" : link }}</a
        >
      </div>

      <img
        v-else-if="screenSize < 645 && !sideMenu"
        src="../assets/icons/Menu_icon_2_icon-icons.com_71856 (1).svg"
        class="menu_button"
        v-on:click="sideMenu = !sideMenu"
      />

      <img
        v-else-if="screenSize < 645 && sideMenu"
        src="../assets/icons/cancel.svg"
        class="menu_button"
        v-on:click="sideMenu = !sideMenu"
      />
    </div>
    <div v-if="sideMenu" class="menu_toggle">
      <p v-for="link of links" v-bind:key="link">
        <strong
          ><a :href="link === `Blog` ? `#/` : `#/${link}/`">{{ link }}</a></strong
        >
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ["Blog", "Addnewpost", "Widgets"],
      screenSize: null,
      sideMenu: false,
    };
  },
  methods: {
    onResize() {
      this.screenSize = document.documentElement.clientWidth;
      if (this.screenSize > 645) this.sideMenu = false;
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
  height: 133px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
}
.title {
  display: flex;
  float: left;
  width: 50%;
  height: 100%;
  margin: 0;
}
.title_text {
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
  margin-left: 30%;
  margin-top: 50px;
  width: 100%;
  text-align: right;
}

.link {
  padding-bottom: 62px;
  margin-right: 10%;
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
  position: absolute;
  top: 65px;
  right: 0px;
  height: 200px;
  min-width: 375px;
  background: rgb(192, 192, 192, 0.5);
  text-align: center;
  width: 100%;
  z-index:1;
}
.active {
  border-bottom: 2px solid black;
}

@media screen and (max-width: 1070px) {
  .links_block {
    margin-left: 0%;
  }
}
@media screen and (max-width: 760px) {
  .link {
    margin-right: 5px;
  }
}
@media screen and (max-width: 660px) {
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
