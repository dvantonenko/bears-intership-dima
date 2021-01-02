<template>
  <div class="container back_auth">
    <div class="head_auth">
      <span class="font_koho_r" style="background-color: #54b44b"> Sign Up</span>
    </div>
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form_auth"
      method="POST"
    >
      <div class="input_block_auth">
        <input
          type="text"
          placeholder="First name"
          class="input_field_auth"
          v-model="name"
        />
        <input
          type="text"
          placeholder="Last name"
          class="input_field_auth"
          v-model="surename"
        />
        <input
          type="email"
          placeholder="Email"
          class="input_field_auth"
          v-model="email"
        />
        <input
          type="password"
          placeholder="Password"
          class="input_field_auth"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn_check_auth font_lato_r">Sign up</button>
      <div class="helper_text_auth">
        <span
          >Already have account?
          <router-link tag="a" to="/signin" style="color: #bedfbd"
            >Sign in</router-link
          ></span
        >
      </div>
    </form>

    <Alert v-if="getSuccessMessage || getErrorMessage" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { Auth } from "aws-amplify";
import Alert from "../components/Alert";
export default {
  components: { Alert },
  methods: {
    async submitHandler() {
      try {
        const response = await this.$store.dispatch("registerHandler", {
          username: this.email,
          password: this.password,
          surename: this.surename,
          email: this.email,
        });

        this.username = this.password = this.surename = this.email = "";
        this.setSuccessAlert("User was created successfully");
      } catch (e) {
        console.log(e);
      }
    },

    ...mapMutations(["setSuccessAlert", "setErrorAlert"]),
  },
  data() {
    return {
      name: "",
      surename: "",
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
