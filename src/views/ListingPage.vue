<template>
  <div class="container">
    <div class="posts_block">
      <div class="post" v-for="post of posts" v-bind:key="post.id">
        <img class="post_image" v-if="post.url" :src="post.url" />
        <div class="post_title font_ny_s">{{ post.title }}</div>
        <div class="post_title font_ny_s">{{ post.subtitle }}</div>
        <div class="post_disc">{{ post.discription }}</div>

        <div class="post_button_block">
          <router-link :to="`/poster/` + post.id">
            <button class="btn_update">Update</button>
          </router-link>
          <router-link :to="'/blog/'">
            <button class="btn_update" v-on:click="deletePost(post.id)">Delete</button>
          </router-link>
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
      posts: [],
      postUpdate: null,
    };
  },
  methods: {
    async deletePost(id) {
     let res =  this.posts.filter((item) => item.id !== id);
      let response = await fetch("/poster/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      this.posts = res;
    },

  },
  async mounted() {
    let response = await fetch("/poster", { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        this.posts = result.todos;
      });
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
.posts_block {
  display: flex;
  flex-wrap: wrap;
}
.post {
  float: left;
  display: block;
  margin: 10px;
  width: 20%;
  min-width: 255px;
  height: 400px;
  border: 1px solid grey;
}

.post_image {
  width: 100%;
  height: 200px;
}

.post_title {
  height: 30px;
  font-size: 20px;
  font-weight: 100;
  line-height: 30px;
  color : black;
}
.post_disc {
  height: 95px;

  overflow: hidden;
  padding: 0 10px;
  line-height : 25px;
  color : black;
}
.btn_update {
  float: left;
  width: 50%;
  height: 40px;
  outline: none;
  border: none;
  background: white;
  color: black;
  cursor: pointer;

  transition: all 0.5s ease-in;
}
.btn_update:hover {
  color: white;
  background: black;
}
</style>
