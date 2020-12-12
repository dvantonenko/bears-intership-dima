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

    <CardsList v-bind:images="images" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import CardsList from "@/components/CardsList";
import Footer from "@/components/Footer";
import Post from "@/views/Poster";
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
    async deletePost(id, title) {
      await this.$store.dispatch("deletePoster", { id, title });
      await this.$store.dispatch("getAllPosters");
      const index = this.images.findIndex((item) => item.id == id);
      this.images.splice(index, 1);
    },
  },
  async mounted() {
    const res = await this.$store.dispatch("getAllPosters");
    for (let item of this.allPosters) {
      this.images.unshift(item);
    }
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
</style>
