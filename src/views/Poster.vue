<template>
  <form
    @submit.prevent="submitHandler"
    enctype="multipart/form-data"
    class="input_form"
    method="POST"
  >
    <div>
      <label for="title" class="label_field">Title</label>
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

    <div>
      <label for="title" class="label_field">Subtitle</label>
      <input
        v-model="subtitle"
        placeholder="Enter post subtitle..."
        name="Subtitle"
        id="Subtitle"
        type="text"
        class="input_field"
        required
        min="1"
      />
      <span class="helper-text" data-error="Введите название"> </span>
    </div>
    <span style="float: right; font-size: 12px">{{ discription.length }}/2048</span>
    <div>
      <label for="discription" class="label_field">Text</label>
      <textarea
        placeholder="Enter post text..."
        v-model="discription"
        id="discription"
        class="textarea_field"
      ></textarea>
    </div>

    <!-- <div style="text-align: center">
        <label for="files" class="label_field" type="file"> Add post image</label>
        <input id="files" hidden name="imagefile" type="file"  @change="onFileChange" />
      </div> -->

    <img class="image_field" v-if="url" :src="url" />

    <div class="btn_block">
      <button class="btn_publish" type="submit">Update</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      postUpdate: {},
      discription: "",
      title: "",
      subtitle: "",
      url: null,
      id: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    let response = await fetch(`/poster/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        this.postUpdate = result.todo;
        this.title = this.postUpdate.title;
        this.discription = this.postUpdate.discription;
        this.subtitle = this.postUpdate.subtitle;
        this.url = this.postUpdate.url;
        this.id = this.postUpdate.id;
      });
  },
  methods: {
    async submitHandler() {
      const task = {
        title: this.title,
        subtitle: this.subtitle,
        discription: this.discription,
        url: this.url,
        id: this.id,
      };
      try {
        let response = await fetch("/poster/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(task),
        });
        this.$router.push("/blog");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style scoped>
.input_form {
  width: 367px;
  margin: 0 auto;
  margin-top: 185px;
}
.input_field {
  width: 100%;
  height: 48px;
  background-color: #dddedf;
  border: none;
  outline: none;
  padding: 0 0 0 16px;
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
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
}

.textarea_field {
  width: 100%;
  min-height: 222px;
  background-color: #dddedf;
  border-radius: 3px;
  margin: 12px 0 28px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #9c9898;
  padding: 10px 16px 10px 16px;
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
