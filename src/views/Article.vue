<template>
  <div class="container">
    <div v-if="getLoading">
      <Loader />
    </div>
    <div v-else>
      <div class="block_topic center media_mobile">
        <span class="text_topic font_ny_el font_bold">{{ currentPoster.title }}</span>
      </div>
      <Poster v-if="visible" v-bind:visible="visible" v-on:closeModal="closeModal" />
      <div class="block_question center media_mobile">
        <span class="text_question font_ny_el font_normal"
          >{{ currentPoster.subtitle }}
        </span>
      </div>

      <div class="article_image center">
        <img class="image_banner media_mobile" :src="currentPoster.src" />
        <figcaption class="caption_text font_sf_text">
          Image caption centered this way and I’ll make this a bit longer to indicate the
          amount of line-height.
        </figcaption>
      </div>

      <div class="article_block center media_mobile">
        <hr
          style="
            border: none;
            background-color: black;
            height: 2px;
            color: black;
            margin-bottom: 35px;
          "
        />
        <span class="article_text font_normal font_ny_m">
          <p>{{ currentPoster.description }}</p>
        </span>
      </div>
      <hr
        style="
          height: 12px;
          background-color: black;
          margin-top: 77px;
          min-width: 330px;
          max-width: 640px;
        "
      />

      <div class="btn_group">
        <div>
          <button
            type="button"
            class="btn_action"
            style="margin-top: 25px"
            v-on:click="visible = true"
          >
            Update
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn_action"
            style="margin-top: 25px"
            v-on:click="deletePosterHandler"
          >
            Delete
          </button>
        </div>
      </div>

      <Alert v-if="getErrorMessage" />
      <InputForm v-bind:screenSize="screenSize" />
    </div>
  </div>
</template>

<script>
import InputForm from "@/components/InputForm";
import Poster from "./Poster";
import { mapGetters, mapMutations } from "vuex";
import Alert from "../components/Alert";
import Loader from "@/components/Loader";

export default {
  components: {
    InputForm,
    Poster,
    Alert,
    Loader,
  },
  data() {
    return {
      screenSize: null,
      id: "",
      visible: false,
    };
  },
  methods: {
    onResize() {
      this.screenSize = document.documentElement.clientWidth;
      if (this.screenSize > 645) this.sideMenu = false;
    },
    async deletePoster() {
      this.clearPosters();
      await this.$store.dispatch("deletePoster", {
        id: this.id,
      });
      await this.$router.push("/");
    },
    async deletePosterHandler() {
      if (this.getUsername && this.currentPoster.owner !== this.getUsername) {
        this.setErrorAlert("You don't have permissions to delete post");
      } else {
        this.deletePoster();
      }
    },
    closeModal() {
      this.visible = false;
    },
    ...mapMutations(["setLastKey", "clearPosters", "setErrorAlert", "setLoading"]),
  },
  async mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
    this.id = this.$route.params.id;
    this.setLoading(true);
    await this.$store.dispatch("getPosterById", this.id);
    this.setLoading(false);
  },
  computed: mapGetters(["currentPoster", "getUsername", "getErrorMessage", "getLoading"]),
};
</script>

<style>
.block_topic {
  width: 854px;
  margin-top: 53px;
}
.text_topic {
  font-size: 54px;
  line-height: 100%;
  text-align: center;
  color: black;
}
.block_question {
  margin-top: 32px;
  width: 626px;
}

.text_question {
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  color: #000000;
}

.image_banner {
  width: 100%;
  min-width: 330px;
  max-height: 570px;
}

.article_block {
  width: 640px;
  text-align: left;
}

.article_text {
  font-size: 20px;
  line-height: 170%;
  color: #000000;
  text-align: center;
}
.article_image {
  margin-top: 52px;
  width: 100%;
  max-width: 854px;
}

.caption_text {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  width: 480px;
  margin: 0 auto;
}
.font_bold {
  font-style: normal;
  font-weight: bold;
}

.font_normal {
  font-style: normal;
  font-weight: normal;
}
.btn_group {
  display: flex;
  width: 50%;
  margin: 0 auto;
  height: 100px;
  justify-content: space-around;
}

@media screen and (max-width: 600px) {
  .text_topic {
    font-size: 36px;
    line-height: 43px;
  }
}

@media screen and (max-width: 575px) {
  .caption_text {
    width: 100%;
    font-size: 13px;
  }
  .article_block {
    width: 335px;
    margin: 0 auto;
  }
  .block_topic,
  .block_question {
    width: 335px;
  }
}
</style>
