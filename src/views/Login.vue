<template>
  <div class="container back_auth">
    <div class="head_auth"><span class="font_koho_r">Sign In</span></div>
    <form
      @submit.prevent="submitHandler"
      enctype="multipart/form-data"
      class="input_form"
      method="POST"
    >
      <div class="input_block_auth">
        <input
          type="Email"
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
    </form>
    <div class="helper_text_auth">
      <span class="font_lato_r">Don't have an account yet?</span><br />
      <span class="font_lato_r"
        >Sign up now <a href="#" style="color: #ffb4bb">Register</a></span
      >
    </div>
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    async submitHandler() {
      try {
        const user = await Auth.signIn(this.email, this.password);
        console.log(user);
        if (user.username) {
          this.setAuth(true);
        }
        console.log(this.getAuth);
      } catch (e) {
        console.log(e);
      }
    },
    ...mapMutations(["setAuth"]),
  },
  computed: mapGetters(["getAuth"]),
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
