<template>
  <div class="container">
    <div class="card_block">
      <div class="card" v-for="post of allPosters" v-bind:key="post.id">
        <img class="card-image" :src="post.url" />
        <div class="card-text">
          <h2>{{ post.title }}</h2>
          <span>{{ post.subtitle }}</span>
          <p>
            {{ post.discription }}
          </p>
        </div>
        <div class="card-stats">
          <router-link tag="button" class="stat" :to="`/poster/` + post.id"
            ><img src="../assets/icons/repeat.svg"
          /></router-link>
          <button v-on:click="deletePost(post.id)" class="stat" :to="`/blog/`">
            <img src="../assets/icons/trash-2.svg" />
          </button>
        </div>
      </div>
    </div>

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

    <CardsList v-bind:images="images" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import CardsList from "@/components/CardsList";
import Footer from "@/components/Footer";
import Post from "@/views/Poster";
import { http } from "../http";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: {
    Navigation,
    CardsList,
    Footer,
  },
  data() {
    return {
      images: [
        {
          src: require("../assets/Rectangle 12.png"),
          discription: "Here are some things you should know regarding how we work",
        },
        {
          src: require("../assets/Rectangle 13.png"),
          discription:
            "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        },
        {
          src: require("../assets/Rectangle 14.png"),
          discription: "Hello world, or, in other words, why this blog exists",
        },
        {
          src: require("../assets/Rectangle 15.png"),
          discription: "Here are some things you should know regarding how we work",
        },
        {
          src: require("../assets/Rectangle 16.png"),
          discription: "Connecting artificial intelligence with digital product design",
        },
        {
          src: require("../assets/Rectangle 17.png"),
          discription: "It’s all about finding the perfect balance",
        },
        {
          src: require("../assets/Rectangle 18.png"),
          discription: "I believe learning is the most important skill",
        },
        {
          src: require("../assets/Rectangle 19.png"),
          discription: "Clients are part of the team",
        },
        {
          src: require("../assets/Rectangle 20.png"),
          discription: "Clients are part of the team",
        },
        {
          src: require("../assets/Rectangle 21.png"),
          discription: "Here are some things you should know regarding how we work",
        },
        {
          src: require("../assets/Rectangle 22.png"),
          discription: "Connecting artificial intelligence with digital product design",
        },
        {
          src: require("../assets/Rectangle 23.png"),
          discription:
            "How modern remote working tools get along with Old School Cowboy's methods",
        },
      ],
      postUpdate: null,
    };
  },
  methods: {
    async deletePost(id) {
      await this.$store.dispatch("deletePoster", id);
      await this.$store.dispatch("getAllPosters");
    },
  },
  async mounted() {
    await this.$store.dispatch("getAllPosters");
  },
  computed: mapGetters(["allPosters"]),
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

.card {
  float: left;
  width: 350px;
  height: 550px;
  outline: none;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 5px 10px;
}
.card-image {
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 230px;
}

.card-text {
  padding-top: 20px;
  height: 220px;
  overflow: hidden;
}
.card-text p {
  color: grey;
  font-size: 15px;
  font-weight: 300;
  margin: 10px 20px 0 20px;
  color: grey;
  max-height: 88px;
}
.card-text span {
  font-size: 20px;
  color: black;
}
.card-text h2 {
  font-size: 28px;
  margin: 10px 0;
  color: black;
}
.card-stats {
  display: flex;
  height: 76px;
}

.stat {
  float: left;
  width: 50%;
  text-align: center;
  line-height: 4.5rem;
  background-color: rgb(0, 204, 167);
  border: none;
  outline: none;
  cursor: pointer;
}
.stat:first-child {
  border-radius: 0 0 0 20px;
}

.stat:last-child {
  border-radius: 0 0 20px 0;
}

.stat:hover {
  opacity: 50%;
}
.card_block {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>
