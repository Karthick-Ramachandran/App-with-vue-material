<template>
  <div class="navbar">
    <div @click="$router.push('/home')" class="icons">
      <md-icon :class="active === 'home' ? 'active' : ''">home</md-icon>
    </div>
    <div @click="$router.push('/saved')" class="icons">
      <md-icon :class="active === 'saved' ? 'active' : ''">save</md-icon>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      active: ""
    };
  },
  mounted() {
    const data = this.$router.history.current.path;

    if (data === "/home") {
      this.active = "home";
    } else {
      this.active = "saved";
    }
  }
};
</script>
<style scoped>
.navbar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  margin-top: 3rem;
  width: 100vw;
  overflow: hidden;
  background-color: #04ffa0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 65px;
}
.md-icon-font {
  font-size: 29px !important;
}
i {
  cursor: pointer !important;
}
.active {
  color: darkred !important;
}
</style>
