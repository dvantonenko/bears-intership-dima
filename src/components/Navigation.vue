<template>
  <nav class="nav">
    <div class="title">
      <span class="title_text font_ny">Nordic rose</span>
    </div>
    <div class="links">
      <tr class="links_block">
        <td class="link font_ny">Blog</td>
        <td class="link font_ny">About</td>
        <td class="link font_ny">Links</td>
        <td class="link font_ny">Projects</td>
      </tr>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  margin: 0;
  border-bottom: 1px solid grey;
  display: flex;
  width: 100%;
  height: 133px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
}
.title {
  float: left;
  width: 50%;
}
.title_text {
  float: left;
  margin: 40px;
  font-size: 30px;
  letter-spacing: 10px;
  color: black;
  text-transform: uppercase;
}

.links {
  display: flex;
  float: left;
  width: 50%;
}

.links_block {
  padding-left: 30%;
  padding-top: 50px;
}
.link {
  padding: 0 30px 0 30px;
  height: 82px;
  text-transform: uppercase;
  color: black;
}
.link:hover {
  border-bottom: 2px solid black;
}
</style>
