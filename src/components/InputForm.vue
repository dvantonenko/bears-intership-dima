<template>
  <div class="input_block center">
    <p class="title font_bold fint_ny_el">Sign up for the newsletter</p>
    <div class="input_text font_normal">If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.</div>

    <form class="input_form">
      <input placeholder="Enter your email..." type="text" class="input font_normal" />
      <button v-if="screenSize > 660" type="button" style="" class="input_btn font_bold">SIGN UP</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["screenSize"],
};
</script>
<style>
.input_block {
  width: 640px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  margin-top: 40px;
}
.title {
  font-size: 36px;
  line-height: 28px;
  text-align: center;
  color: #090909;
  margin-bottom: 18px;
  margin-top: 62px;
}
.input_text {
  display: inline-block;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #090909;
  width: 538px;
}

.input_form {
  width: 520px;
  margin: 0 auto;
  margin-top: 36px;
  margin-bottom: 59px;
  white-space: nowrap;
  height: 54px;
}

.input {
  max-width: 351px;
  height: 20px;
  margin: 0;
  font-family: SF Pro Text;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  padding: 15px;
}

.input::placeholder {
  color: black;
  font-family: SF-Pro-Text;
}

.input_btn {
  border: none;
  outline: none;
  width: 139px;
  height: 54px;
  background-color: black;
  padding: 15px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
}
.font_normal {
  font-style: normal;
  font-weight: normal;
}
.font_bold {
  font-style: normal;
  font-weight: bold;
}

@media screen and (max-width: 660px) {
  .input_block {
    width: 380px;
  }
  .title {
    font-size: 29px;
    line-height: 100%;
  }
  .input_text {
    font-size: 16px;
    line-height: 140%;
    width: 300px;
  }
  .input_form {
    width: 280px;
  }
  input {
    width: 200px;
  }
}
</style>
