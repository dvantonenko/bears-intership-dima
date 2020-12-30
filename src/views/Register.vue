<template>
  <div class="container back_auth">
    <div class="head_auth" style="color: #bedfbd">
      <span class="font_koho_r"> Sign Up</span>
    </div>
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
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
    </form>
    <div class="helper_text_auth">
      <span>Already have account? <a href="#" style="color: #bedfbd">Sing in</a></span>
    </div>
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
        const signUpResponse = await Auth.signUp({
          username: this.name,
          password: this.password,
          surename: this.surename,
          attributes: {
            email: this.email,
          },
        });

        console.log(signUpResponse);
        this.setSuccessAlert("User was created successfully");
        this.username = this.password = this.surename = this.email = "";
      } catch (e) {
        this.setErrorAlert(e.message.toString());
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
