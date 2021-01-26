<template>
  <div class="container back_auth">
    <div class="head_auth">
      <span class="font_koho_r">Sign In</span>
    </div>
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
      method="POST"
    >
      <div class="input_block_auth">
        <div class="valid_message" v-if="getErrorMessage">
          {{ getErrorMessage }}
        </div>
        <input
          type="text"
          placeholder="email"
          class="input_field_auth font_lato_r"
          v-model.trim="email"
        />

        <input
          type="Password"
          placeholder="password"
          class="input_field_auth font_lato_r"
          v-model.trim="password"
        />
      </div>

      <button type="submit" class="btn_check_auth font_lato_r">Sign in</button>

      <div class="helper_text_auth">
        <span class="font_lato_r">Don't have an account yet?</span><br />
        <span class="font_lato_r"
          >Sign up now
          <span v-on:click="clearMessages">
            <router-link to="/signup" style="color: #ffb4bb">Register</router-link></span
          >
        </span>
      </div>
    </form>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    checkResponse(response) {
      if (!response.data.message) {
        this.clearMessages("");
        this.setSuccessAlert("You are loged in success");
        this.$router.push("/");
      } else {
        throw new Error(response.data.message);
      }
    },
    async submitHandler() {
      const response = await this.$store.dispatch("loginHandler", {
        email: this.email,
        password: this.password,
      });
      this.checkResponse(response);
    },
    ...mapMutations(["setAuth", "setErrorAlert", "setSuccessAlert", "clearMessages"]),
  },
  computed: mapGetters(["getAuth"]),
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapGetters(["getErrorMessage"]),
  watch: {
    getErrorMessage() {},
  },
};
</script>
