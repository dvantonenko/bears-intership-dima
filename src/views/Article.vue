<template>
  <div class="container">
    <Navigation />

    <div class="block_topic center">
      <span class="text_topic font_ny_el font_bold">A few words about this blog platform, Ghost, and how this site was made</span>
    </div>

    <div class="block_question center">
      <span class="text_question font_sf_mono font_normal">Why Ghost (& Figma) instead of Medium, WordPress or other options? </span>
    </div>

    <div class="block_banner center">
      <img class="image_banner" src="../assets/image2.png" />
    </div>

    <div class="article_block center">
      <hr style="border: none; background-color: black; height: 2px; color: black; margin-bottom: 35px" />
      <span class="article_text font_normal font_ny_m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
        <p></p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
      </span>

      <p class="font_bold" style="font-size: 32px; line-height: 160%; color: #000000; margin: 57px 0 24px 0">Next on the pipeline</p>

      <span class="article_text font_normal font_ny_m">
        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        <p></p>
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.</span>
    </div>

    <div class="article_image center">
      <figure>
        <img class="image_banner" style="width: 854px" src="../assets/gargoyle.png" />
        <figcaption class="caption_text font_sf_text" style="width: 480px; margin: 0 auto">Image caption centered this way and I’ll make this a bit longer  to indicate the amount of line-height.</figcaption>
      </figure>
    </div>

    <div class="article_block center">
      <div style="margin-top: 52px">
        <span class="article_text font_normal font_ny_m">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
          <br />
          <br />
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
        </span>
      </div>

      <div style="margin-top: 52px">
        <p class="article_text font_normal font_ny_m">A list looks like this:</p>
        <ul class="article_list">
          <li class="article_text font_normal font_ny_m"><p>First item in the list</p></li>
          <li class="article_text font_normal font_ny_m"><p>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit ametd</p></li>
          <li class="article_text font_normal font_ny_m"><p>Third item in the list</p></li>
        </ul>
      </div>

      <div class="article_block" style="margin-top: 52px">
        <span class="article_text font_normal font_ny_m">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</span>
      </div>

      <div class="article_block" style="margin-top: 52px">
        <span class="article_text font_normal font_ny_m">
          Thanks for reading, <br />
          Mika</span
        >
      </div>

      <hr style="height: 12px; background-color: black; margin-top: 77px" />
    </div>

    <InputForm />

    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputForm from "../components/InputForm";
export default {
  components: {
    Navigation,
    Footer,
    InputForm,
  },
};
</script>

<style>
.block_topic {
  width: 854px;
  margin-top: 53px;
}
.text_topic {
  font-size: 54px;
  line-height: 100%;
  text-align: center;
  color: black;
}
.block_question {
  margin-top: 32px;
  width: 626px;
}

.text_question {
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  color: #000000;
}

.block_banner {
  margin-top: 52px;
  width: 100%;
  margin-bottom: 32px;
}

.image_banner {
  width: 100%;
}

.article_block {
  width: 640px;
  text-align: left;
}

.article_text {
  font-size: 20px;
  line-height: 170%;
  color: #000000;
}

.article_image {
  margin-top: 52px;
}

.caption_text {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #000000;
}
.article_list {
  width: 588px;
}

li {
  list-style-type: square;
}

.font_bold {
  font-style: normal;
  font-weight: bold;
}

.font_normal {
  font-style: normal;
  font-weight: normal;
}
</style>
