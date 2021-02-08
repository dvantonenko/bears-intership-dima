<template>
  <nav class="nav" ref="nav">
    <div class="title">
      <span class="title_text font_ny">Nordic rose</span>
    </div>
    <div class="links">
      <div v-if="screenSize > 645 && screenSize < 1980" class="links_block">
        <a
          class="link font_ny"
          v-for="link of links"
          :name="link"
          :href="link === `Blog` ? `#/` : `#/${link.replace(/\s+/g, '')}/`"
          v-bind:class="{
            active:
              link &&
              $route.name &&
              $route.name.toString().toLowerCase() ===
                link.toString().toLowerCase().replace(/\s+/g, ''),
          }"
          v-bind:key="link"
          v-on:click="clickHandler"
        >
          {{ link }}
        </a>
      </div>

      <img
        v-else-if="screenSize < 645"
        :src="sideMenu ? cancelImage : burger"
        class="menu_button"
        v-on:click="sideMenu = !sideMenu"
      />
    </div>
    <transition name="slide_fade">
      <div v-if="sideMenu" class="menu_toggle" ref="menuToggle">
        <router-link
          v-for="link of links"
          v-bind:key="link"
          :to="link === `Blog` ? `/` : `/${link.replace(/\s+/g, '')}/`"
          class="menu_router font_ny_s"
          ><p>
            <a class="menu_link" :name="link" v-on:click="clickHandler" id="menu">
              {{ link }}
            </a>
          </p>
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import cancelImage from "../assets/icons/cancel.svg";
import burger from "../assets/icons/Menu_icon_2_icon-icons.com_71856 (1).svg";
export default {
  name: "Navigation",
  data() {
    return {
      links: ["Sign In", "Sign Up"],
      screenSize: null,
      sideMenu: false,
      scrolledTop: 0,
      cancelImage,
      burger,
    };
  },
  created: function () {
    this.onResize();
  },
  methods: {
    scrollTop() {
      let ref = this.$refs.menuToggle;
      this.scrolledTop = window.pageYOffset;
      if (ref && this.scrolledTop >= 65) {
        ref.classList.add("close");
      } else if (ref && this.scrolledTop < 65) {
        ref.classList.remove("close");
      }
    },
    onResize() {
      this.screenSize = document.documentElement.clientWidth;
      if (this.screenSize > 645) this.sideMenu = false;
    },
    clickHandler(e) {
      if (e.target.name == "Logout") {
        e.preventDefault();
        this.setAuth(false);
        this.setUsername("");
        this.$store.dispatch("logoutHandler");
        this.$router.push("/SignIn");
      }
      if (e.target.name == "Sign In" || "Sign Up") {
        this.clearMessages("");
      }
      if (e.target.id) {
        this.sideMenu = !this.sideMenu;
      }
    },
    ...mapMutations(["setAuth", "setUsername", "clearMessages"]),
  },
  mounted() {
    const token = JSON.parse(localStorage.getItem("awsAccessToken"));
    const username = JSON.parse(localStorage.getItem("awsUsername"));
    if (token && username) {
      this.setAuth(token);
      this.setUsername(username);
      this.links = ["Blog", "Add new post", "Widgets", "Tasks", "Logout"];
    } else {
      this.links = ["Sign In", "Sign Up"];
    }

    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.scrollTop);
  },
  computed: mapGetters(["getAuth"]),
  watch: {
    getAuth() {
      if (!!this.getAuth) {
        this.links = ["Blog", "Add new post", "Widgets", "Tasks", "Logout"];
      } else {
        this.links = ["Sign In", "Sign Up"];
      }
    },
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
  transition: 1s;
}
.nav.hide {
  transform: translateY(-50px);
}
.title {
  display: flex;
  float: left;
  width: 50%;
  height: 100%;
  margin: 0;
}
.title_text {
  font-size: 30px;
  letter-spacing: 10px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 40px;
}

.links {
  display: flex;
  float: left;
  width: 100%;
}

.links_block {
  margin-right: 30px;
  margin-top: 50px;
  width: 100%;
  text-align: right;
}

.link {
  padding-bottom: 62px;
  margin-right: 5%;
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
  position: fixed;
  top: 66px;
  bottom: 0px;
  min-width: 375px;
  padding-top: 120px;
  background: rgb(255, 255, 255);
  text-align: center;
  width: 100%;
  z-index: 10;
}
.menu_toggle.close {
  top: 0;
}
.active {
  border-bottom: 2px solid black;
}
.menu_router {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  color: black;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.menu_link:hover {
  text-decoration: underline;
}

.slide_fade-enter-active {
  transition: all 0.8s ease;
}
.slide_fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide_fade-enter,
.slide_fade-leave-to {
  transform: translateY(-1000px);
  opacity: 0;
}
@media screen and (max-width: 1070px) {
  .links_block {
    margin-left: 0%;
  }
}
@media screen and (max-width: 830px) {
  .link {
    margin-right: 0;
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
