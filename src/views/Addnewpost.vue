<template>
  <div>
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
          required
          min="1"
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
          required
          min="1"
        />
        <span class="helper-text" data-error="Введите название"> </span>
      </div>
      <span style="float: right; font-size: 12px">{{ discription.length }}/2048</span>
      <label for="discription" class="label_field">Text</label>
      <div>
        <textarea
          placeholder="Enter post text..."
          v-model="discription"
          id="discription"
          class="textarea_field"
        ></textarea>
      </div>

      <div style="text-align: center; margin-bottom: 10px">
        <label for="files" class="label_field label_block" type="file">
          Add post image</label
        >
        <input id="files" hidden name="imagefile" type="file" @change="onFileChange" />
      </div>

      <img class="image_field" v-if="src" :src="src" />

      <div class="btn_block">
        <button class="btn_publish" type="submit">Publish</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { http } from "../http";
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      discription: "",
      src: null,
      id: uuidv4(),
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.src = reader.result;
      };
    },
    async submitHandler() {
      const task = {
        title: this.title,
        subtitle: this.subtitle,
        discription: this.discription,
        src: this.src,
        id: this.id,
      };
      await this.$store.dispatch("addPoster", task);
      this.$router.push("/");
    },
  },
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
