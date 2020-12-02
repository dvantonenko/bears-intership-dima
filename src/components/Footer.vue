<template>
  <div class="footer">
    <div class="labels">
      <div class="labels_transform">
        <span class="label font_sf" v-for="(brand, index) of brands" v-bind:key="index" v-bind:class="{ label_weight: index % 2 == 0 }">{{ brand }} </span>
      </div>
    </div>
    
    <div class="footer_title1">
      <h1 class="font_ny" >Nordic rose</h1>
      <blockquote class="footer_title2 font_ny_s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst.Fusce a nunc eget ligula..</blockquote>
      <div class="contacts_group">
        <a class="contact_link font_sf" v-for="link of links" v-bind:key="link">{{ link }}</a>
      </div>
      <div class="inc font_sf">© 2012–2020 Nordic Rose Co. All rights reserved.</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brands: ["Digital products design", "Remote work", "UI design", "Distribured teams", "Creativity", "Strategy", "suspense", "growth"],
      links: ["Twitter", "LinkedIn", "Rss"],
    };
  },
};
</script>
<style >
.footer {
  height: 464px;
  background: #000000;
  display: block;
  margin-top : 113px;
  width : 100%;
      min-width : 330px;
}
.labels {
  white-space: nowrap;
  overflow: hidden;
  padding-top: 18px;
}

.label {
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1em;
  padding: 18px;
  text-transform: uppercase;
  color: #ffffff;
}
.label:first-child {
  margin-left: -20px;
}
.label:last-child {
  padding-right: 0px;

}

.label_weight {
  font-weight: 800;
}
.footer_title1 {
  max-width: 488px;
  margin: 0 auto;
  padding-top: 121px;
  max-height: 324px;
  background-color: black;
  text-align:center;
}
.footer_title1 h1 {
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
  white-space: nowrap;
}
.footer_title2 {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  text-align: center;
  color: white;
 
}
.contacts_group {
  color: white;
  padding-top: 22px;
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
  padding-top: 64px;
}

@media screen and (max-width: 575px) {
  .labels_transform {
    transform: translateX(-400px);
  }
}

@media screen and (max-width: 475px) {
  .footer_title1 {
    max-width: 287px;
  }
  .footer_title2 {
    min-width: 287px;
    max-height: 71px;
    margin: 0 auto;
  }
}
</style>
