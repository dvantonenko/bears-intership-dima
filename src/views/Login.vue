<template>
  <div class="container back_auth">
    <div class="head_auth"><span class="font_koho_r">Sign In</span></div>
    <form>
      <div class="input_block_auth">
        <input type="Email" placeholder="email" class="input_field_auth font_lato_r" />
        <input
          type="Password"
          placeholder="password"
          class="input_field_auth font_lato_r"
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
