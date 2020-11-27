<template>
  <div class="footer">
    <div class="labels">
      <span class="label font_sf"
        v-for="(brand,index) of brands"
        v-bind:key="index"
        v-bind:class="{'label_weight' : index % 2 ==0}">{{brand}}
      </span>
      </div>
    
    <div class="footer_title1">
      <h1 class="footer_title2 font_ny">Nordic rose</h1>
      <blockquote class="footer_title3 font_ny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.</blockquote>
      <div class="contacts_group">
        <a class="contact_link font_sf" v-for="link of links"  v-bind:key="link">{{link}}</a>
      </div>
      <div class="inc font_sf">© 2012–2020 Nordic Rose Co. All rights reserved.</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brands: ["Digital products design", "Remote work", "UI design", 
      "Distribured teams", "Creativity", "Strategy", "suspense", "growth"],
      links :['Twitter',"LinkedIn","Rss"]
    };
  },
};
</script>
<style>
.footer {
  height: 464px;
  background: #000000;
  display: block;
}
.labels {
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.label {
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1em;
  padding: 17px;
  text-transform: uppercase;
  color: #ffffff;
}

.label_weight {
  font-weight: 800;
}
.footer_title1 {
  max-width: 488px;
  margin: 0 auto;
  padding-top: 60px;
  background-color: black;
}
.footer_title1 h1 {
  color: white;
}
.footer_title2 {
  letter-spacing: 10px;
  text-transform: uppercase;
}
.footer_title3 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: white;
}
.contacts_group {
  justify-content: space-around;
  color: white;
}
.contact_link {
  text-decoration: underline;
  padding: 10px;
}
.inc {
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  width: 159px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
