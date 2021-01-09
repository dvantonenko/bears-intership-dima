<template>
  <div class="modal_back">
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
      method="POST"
    >
      <Alert v-if="getErrorMessage" />
      <img
        src="../assets/icons/minimize-2.svg"
        v-on:click="$emit('closeModal')"
        class="close_icon"
      />
      <div style="text-align: left">
        <label for="title" class="label_field">Title</label>
      </div>

      <div>
        <input
          v-model="title"
          placeholder="Enter post Title..."
          name="title"
          id="title"
          type="text"
          class="input_field"
        />
        <span class="helper-text" data-error="Введите название"> </span>
      </div>
      <div style="text-align: left">
        <label for="subtitle" class="label_field">Subtitle</label>
      </div>

      <div>
        <input
          v-model="subtitle"
          placeholder="Enter post subtitle..."
          name="Subtitle"
          id="subtitle"
          type="text"
          class="input_field"
        />
        <span class="helper-text" data-error="Введите название"> </span>
      </div>
      <span style="float: right; font-size: 12px">{{ description.length }}/2048</span>

      <div style="text-align: left">
        <label for="description" class="label_field">Text</label>
      </div>
      <div>
        <textarea
          placeholder="Enter post text..."
          v-model="description"
          id="description"
          class="textarea_field"
        ></textarea>
      </div>

      <img class="image_field" v-if="src" :src="src" />

      <div class="btn_block">
        <button href="/" class="btn_publish" type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";
import Alert from "../components/Alert";

export default {
  watch: {
    getErrorMessage() {},
  },
  components: { Alert },
  props: ["visible"],
  data() {
    return {
      description: "",
      title: "",
      subtitle: "",
      src: null,
      id: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$store.dispatch("getPosterById", id);
    const { title, subtitle, description, src } = this.currentPoster;
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.id = id;
    this.src = src;
  },
  computed: mapGetters(["currentPoster", "getAnswer", "getErrorMessage", "getUsername"]),

  methods: {
    async submitHandler() {
      if (this.currentPoster.owner !== this.getUsername) {
        this.setErrorAlert("You don't have permissions to update post");
      } else {
        const poster = {
          title: this.title,
          subtitle: this.subtitle,
          description: this.description,
          id: this.id,
        };
        this.clearPosters();
        await this.$store.dispatch("updatePoster", poster);
        if (!this.getErrorMessage) {
          this.$router.push("/");
        }
      }
    },
    ...mapMutations(["clearAnswer", "clearPosters", "setErrorAlert"]),
  },
};
</script>

<style scoped>
.modal_back {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  z-index: 5;
}

.input_form {
  width: 367px;
  margin: 20px 0 0 50%;
  transform: translateX(-50%);
  height: 90%;
  background-color: white;
  padding: 10px;
  overflow: auto;
  border-radius: 10px;
}
.input_field {
  width: 100%;
  height: 48px;
  background-color: #dddedf;
  border: none;
  outline: none;
  padding: 0 0 0 16px;
  font-style: normal;
  font-family: font_inter_n;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  margin: 12px 0 28px 0;
  box-sizing: border-box;
}
.input_field:focus {
  background: #f9fafb;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 3px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.label_field {
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-left: 10px;
}

.textarea_field {
  width: 100%;
  min-height: 222px;
  background-color: #dddedf;
  border-radius: 3px;
  margin: 12px 0 28px 0;
  font-style: normal;
  font-weight: 600;
  font-family: font_inter_n;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  padding: 10px 16px 10px 16px;
  box-sizing: border-box;
}

.textarea_field:focus {
  background: #f9fafb;
  border: 1px solid #000000;
  box-sizing: border-box;
}
.image_field {
  width: 100%;
  height: 210px;
  margin: 34px 0 53px 0;
}

.btn_publish {
  width: 262px;
  height: 48px;
  background: #000000;
  border-radius: 3px;
  color: white;
  transition: 0.5s ease-in;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #f9f9f9;
}

.btn_publish:hover {
  background: white;
  color: black;
}
.btn_block {
  width: 262px;
  margin: 0 auto;
}
.close_icon {
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
}
</style>
