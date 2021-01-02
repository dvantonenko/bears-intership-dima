<template>
  <div class="container back_auth">
    <div class="head_auth">
      <span class="font_koho_r">Sign In</span>
    </div>
    <Alert v-if="getSuccessMessage || getErrorMessage" />
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
      method="POST"
    >
      <div class="input_block_auth">
        <input
          type="text"
          placeholder="email"
          class="input_field_auth font_lato_r"
          v-model="email"
        />
        <input
          type="Password"
          placeholder="password"
          class="input_field_auth font_lato_r"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn_check_auth font_lato_r">Sign in</button>

      <div class="helper_text_auth">
        <span class="font_lato_r">Don't have an account yet?</span><br />
        <span class="font_lato_r"
          >Sign up now
          <router-link to="/signup" style="color: #ffb4bb">Register</router-link></span
        >
      </div>
    </form>
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
import { mapMutations, mapGetters } from "vuex";
import Alert from "../components/Alert";
export default {
  components: { Alert },
  methods: {
    async submitHandler() {
      try {
        const response = await this.$store.dispatch("loginHandler", {
          email: this.email,
          password: this.password,
        });

        this.setSuccessAlert("You are loged in success");
        this.$router.push("/");
      } catch (e) {
        console.log(e.message);
      }
    },

    ...mapMutations(["setAuth", "setErrorAlert", "setSuccessAlert"]),
  },
  computed: mapGetters(["getAuth"]),
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapGetters(["getSuccessMessage", "getErrorMessage"]),
  watch: {
    getSuccessMessage() {},
    getErrorMessage() {},
  },
};
</script>
