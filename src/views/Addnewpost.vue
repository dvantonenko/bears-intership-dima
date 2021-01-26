<template>
  <div style="padding-bottom: 113px">
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
      method="POST"
    >
      <label for="title" class="label_field">Title</label>
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
      <label for="subtitle" class="label_field">Subtitle</label>
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
      <label for="description" class="label_field">Text</label>
      <div>
        <textarea
          placeholder="Enter post text..."
          v-model="description"
          id="description"
          class="textarea_field"
        ></textarea>
      </div>

      <div style="text-align: center; margin-bottom: 10px">
        <label for="files" class="label_field label_block" type="file">
          Add post image</label
        >
        <image-uploader
          id="files"
          :debug="1"
          :maxWidth="400"
          :quality="0.9"
          :autoRotate="true"
          outputFormat="blob"
          :preview="true"
          :capture="false"
          accept="video/*,image/*"
          doNotResize="['gif', 'svg']"
          @input="setImage"
          hidden
        ></image-uploader>
      </div>

      <img :src="src" id="preview_image_field" />

      <div class="btn_block">
        <button class="btn_publish" type="submit">Publish</button>
      </div>
    </form>
    <Alert v-if="getErrorMessage" />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Alert from "../components/Alert.vue";
import imageCompressor from "vue-image-compressor";
export default {
  components: {
    Alert,
    imageCompressor,
  },
  data() {
    return {
      title: "",
      subtitle: "",
      description: "",
      key: "",
      id: Date.now(),
      file: null,
      src: null,
      compressedData: null,
    };
  },
  methods: {
    setImage(output) {
      this.key = (Math.floor(Math.random() * 100) + 1).toString() + ".jpg";
      let reader = new FileReader();
      reader.readAsArrayBuffer(output);
      reader.onloadend = (e) => {
        const uint8Array = new Uint8Array(reader.result);
        this.file = [...uint8Array];
      };

      let createSrc = new FileReader();
      createSrc.readAsDataURL(output);
      createSrc.onloadend = () => {
        this.src = createSrc.result;
      };
    },
    submitNewPost() {
      const task = {
        title: this.title,
        subtitle: this.subtitle,
        description: this.description,
        key: this.key,
        id: this.id,
        owner: this.getUsername,
        Posts: "posts",
      };
      let file = this.file;
      return { task, file };
    },
    async submitHandler() {
      this.clearPosters();
      await this.$store.dispatch("addPoster", this.submitNewPost());
      if (!this.getErrorMessage) {
        await this.$router.push("/");
      }
    },
    ...mapMutations(["clearPosters"]),
  },
  computed: mapGetters(["getErrorMessage", "getUsername"]),
};
</script>
<style scoped>
.input_form {
  width: 367px;
  margin: 185px 0 0 50%;
  transform: translateX(-50%);
  height: 100%;
}
.input_field {
  width: 100%;
  height: 48px;
  background-color: #dddedf;
  border: none;
  outline: none;
  padding: 0 0 0 16px;
  font-family: font_inter_n;
  font-style: normal;
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
  line-height: 30px;

  letter-spacing: -0.02em;
  color: #000000;
}

.label_block {
  width: 100%;
  text-align: center;
  padding: 13px 50px 8px 50px;
  border: none;
  outline: none;
}

.label_block:hover {
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 3px;
}
.textarea_field {
  width: 100%;
  max-width: 367px;
  min-height: 222px;
  background-color: #dddedf;
  border-radius: 3px;
  margin: 12px 0 28px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #000000;
  padding: 10px 16px 10px 16px;
  box-sizing: border-box;
  font-family: font_inter_n;
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
</style>
