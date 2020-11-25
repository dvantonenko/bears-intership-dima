<template>
  <nav id="nav">
    <div id="nordic">
      <span id="nordicText">NORDIC ROSE</span>
    </div>
    <div id="links">
      <tr id="links-block">
        <td id="link">Blog</td>
        <td id="link">About</td>
        <td id="link">Links</td>
        <td id="link">Projects</td>
      </tr>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  margin: 0;
  border-bottom: 1px solid grey;
  position: relative;
  display: flex;
  width: 100%;
  height: 133px;
  left: 0;
  top: 0;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
}
#nordic {
  width: 50%;
  height: 100%;
}
#nordicText {
  position: absolute;
  top: 40%;
  left: 5%;
  font-size: 30px;
  bottom: 32%;
}

#links {
  display: flex;
  width: 50%;
  justify-content: right;
  height: 133px;
}
#links-block {
  position: absolute;
  right: 5%;
  top: 40%;
  height: 60%;
}
#link {
  padding: 10px 15px 10px 15px;
  height: 60px;
}
#link:hover {
  border-bottom: 2px solid black;
}
</style>
