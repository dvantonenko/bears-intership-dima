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
    <select v-model="filter">
      <option value="old_at_first">Old at first</option>
      <option value="new_at_first">New at first</option>
    </select>
    <div v-if="currentPosters.length" ref="listofcards" id="listofcards">
      <CardsList v-bind:images="currentPosters" />
    </div>

    <div v-else>
      <h2 class="font_ny">No posts yet</h2>
      <router-link tag="button" :to="'/Addnewpost'" class="btn_create">
        Create
        <img src="../assets/icons/create.svg" alt="" class="icon_create" />
      </router-link>
    </div>
    <h3 v-if="getLastElemKey === 0">No more posts</h3>

    <div v-if="getLoading" class="loader">
      <Loader />
    </div>
    <Alert />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import CardsList from "@/components/CardsList";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Alert from "@/components/Alert";
import { mapGetters } from "vuex";
export default {
  components: {
    Navigation,
    CardsList,
    Footer,
    Loader,
    Alert,
  },
  data() {
    return {
      postUpdate: null,
      postersPerPage: 2,
      currentPage: 0,
      filter: "old_at_first",
    };
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    async refresh() {
      if (this.getLastElemKey !== 0) {
        this.$store.dispatch("setLoading", true);
        await this.$store.dispatch("getCurrentPosters", {
          currentPage: this.currentPage === 0 ? 1 : this.currentPage,
          postersPerPage: this.postersPerPage,
          lastElemKey: this.getLastElemKey ? this.getLastElemKey : undefined,
          filter: this.filter,
        });
        await this.$store.dispatch("setLoading", false);
      }
    },
    moreItems() {
      this.$nextTick(async function () {
        let list = this.$refs.listofcards;
        if (list && list.getBoundingClientRect().bottom <= 490 && !this.getLoading) {
          this.currentPage + 1;
          await this.refresh();
        }
      });
    },
  },
  async mounted() {
    await this.refresh();
    window.addEventListener("scroll", this.moreItems);
    this.moreItems();
  },
  computed: {
    ...mapGetters(["currentPosters", "getLength", "getLoading", "getLastElemKey"]),
  },

  watch: {
    currentPosters() {},
    async filter() {
      await this.$store.dispatch("clearPosters");
      await this.refresh();
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
.icon_create {
  position: absolute;
  top: 3px;
  right: 20px;
}
select {
  margin: 10px;
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../assets/icons/chevron-down-outline.svg") 96% / 15% no-repeat;
}
</style>
