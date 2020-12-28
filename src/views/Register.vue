<template>
  <div class="container back_auth">
    <div class="head_auth" style="color: #bedfbd">
      <span class="font_koho_r"> Sign Up</span>
    </div>
    <form>
      <div class="input_block_auth">
        <input type="email" placeholder="First name" class="input_field_auth" />
        <input type="email" placeholder="Last name" class="input_field_auth" />
        <input type="email" placeholder="Email" class="input_field_auth" />
        <input type="password" placeholder="Password" class="input_field_auth" />
      </div>

      <button type="submit" class="btn_check_auth font_lato_r">Sign up</button>
    </form>
    <div class="helper_text_auth">
      <span>Already have account? <a href="#" style="color: #bedfbd">Sing in</a></span>
    </div>
  </div>
</template>
