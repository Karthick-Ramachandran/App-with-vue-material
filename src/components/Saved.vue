<template>
  <div>
    <div>
      <h1 class="center-text">Saved Files</h1>

      <div class="md-layout md-gutter md-alignment-center-center">
        <div
          class="md-layout-item md-large-size-80 md-medium-size-70 md-small-size-45"
        >
          <md-card md-with-hover>
            <md-card-header>
              <div class="md-title">Your file</div>
            </md-card-header>
            <md-card-content>
              Description
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-large-size-80 md-medium-size-70 md-small-size-45"
        >
          <md-card md-with-hover>
            <md-card-header>
              <div class="md-title">Your file</div>
            </md-card-header>
            <md-card-content>
              Description
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style scoped>
.center-text {
  text-align: center !important;
}
</style>
