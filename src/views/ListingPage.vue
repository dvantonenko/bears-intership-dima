<template>
  <div class="container">
    <div class="block_banner center media_mobile">
      <img class="image_banner" src="../assets/image2.png" />
    </div>

    <div class="block_topic center media_mobile">
      <span class="text_topic font_ny_el font_bold"
        >A few words about this blog platform, Ghost, and how this site was made</span
      >
    </div>

    <div class="block_question center media_mobile">
      <span class="text_question font_sf_mono"
        >Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </span>
      <hr />
    </div>

    <p class="articles font_ny font_style_bold center">All articles</p>

    <div v-if="currentPosters.length">
      <button type="button" class="btn_pages" v-on:click="postersPerPage += 1">+</button>
      <input type="text" class="numberOfPages" v-model="postersPerPage" />
      <button
        type="button"
        class="btn_pages"
        v-on:click="postersPerPage > 1 ? (postersPerPage -= 1) : (postersPerPage = 1)"
      >
        -
      </button>
    </div>
    <div v-if="getLoading" class="loader">
      <Loader />
    </div>

    <CardsList v-else-if="getLength" v-bind:images="currentPosters" />

    <div v-else>
      <h2 class="font_ny">No posts yet</h2>
      <router-link tag="button" :to="'/Addnewpost'" class="btn_create">
        Create
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right icon_create"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </router-link>
    </div>
    <Pagination
      v-if="currentPosters.length"
      v-bind:postersPerPage="postersPerPage"
      v-bind:currentPage="currentPage"
      v-on:paginate="changePage"
    />
    <Alert />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import CardsList from "@/components/CardsList";
import Footer from "@/components/Footer";
import Post from "@/views/Poster";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import axios from "axios";
import Alert from "@/components/Alert";
import { mapGetters } from "vuex";
export default {
  components: {
    Navigation,
    CardsList,
    Footer,
    Pagination,
    Loader,
    Alert,
  },
  data() {
    return {
      postUpdate: null,
      postersPerPage: 1,
      currentPage: 1,
    };
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    async refresh() {
      this.$store.dispatch("setLoading", true);
      const res = await this.$store.dispatch("getCurrentPosters", {
        currentPage:
          // this.currentPage,
          this.getLength !== 0 && this.getLength / this.postersPerPage < this.currentPage
            ? Math.ceil(this.getLength / this.postersPerPage)
            : this.currentPage,
        postersPerPage: this.postersPerPage,
      });
      this.$store.dispatch("setLoading", false);
    },
  },
  async mounted() {
    this.refresh();
  },
  computed: mapGetters(["currentPosters", "getLength", "getLoading", "getListId"]),
  watch: {
    currentPage() {
      this.refresh();
    },
    postersPerPage() {
      this.refresh();
    },
  },
};
</script>

<style scoped>
.articles {
  width: 225px;
  height: 53px;
  padding-top: 50px;
  font-size: 44px;
  line-height: 53px;
  text-align: center;
  color: #000000;
}
.font_bold {
  font-style: normal;
  font-weight: bold;
}
.image_banner {
  width: 100%;
  min-width: 330px;
}

.block_banner {
  margin-top: 70px;
  width: 854px;
}

.block_topic {
  width: 854px;
  padding-top: 44px;
}
.text_topic {
  font-size: 54px;
  line-height: 100%;
  text-align: center;
  color: #000000;
}

.block_question {
  width: 592px;
  padding-top: 22px;
  color: #000000;
}
.text_question {
  font-size: 30px;
  line-height: 170%;
  text-align: center;
  color: #000000;
}

.btn_create {
  width: 262px;
  height: 48px;
  background: white;
  border-radius: 3px;
  color: black;
  transition: 0.5s ease-in;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.02em;
  position: relative;
  border: 2px solid black;
  letter-spacing: 3px;
  cursor: pointer;
}
.btn_create:hover {
  background-color: black;
  color: white;
}
.btn_create:hover .icon_create {
  stroke: white;
}

.icon_create {
  position: absolute;
  top: 3px;
  right: 20px;
  stroke: black;
  transition: 0.5s ease-in;
}
.numberOfPages {
  width: 100px;
  height: 40px;
  text-align: center;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid grey;
}
.btn_pages {
  background: none;
  height: 40px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid grey;
  outline: none;
  margin: 0 5px;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  background-color: black;
}
.loader {
  height: 300px;
  margin: 0 auto;
}
</style>
