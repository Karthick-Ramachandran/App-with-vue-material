<template>
  <div class="flex">
    <div class="md-layout md-gutter md-alignment-center-center">
      <div
        class="md-layout-item md-large-size-80 md-medium-size-70 md-small-size-95"
      >
        <md-card>
          <md-card-header>
            <div class="md-title">Login</div>
          </md-card-header>

          <md-card-content>
            <md-field>
              <label>Email</label>
              <md-input v-model="initial"></md-input>
            </md-field>
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
            <md-button class="md-raised md-primary">Login</md-button>
          </md-card-content>
        </md-card>
      </div>
    </div>

    <div class="social-login">
      <md-button class="md-raised md-accent">
        <i class="fa fa-google" aria-hidden="true"></i>
        Login with Google
      </md-button>
      <p>Or</p>
      <md-button
        @click="$router.push('/register')"
        class="md-raised md-primary"
      >
        <i class="fa fa-user" aria-hidden="true"></i>

        Create a account
      </md-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initial: "",
      password: ""
    };
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.social-login {
  margin-top: 1rem;
}

i {
  font-size: 1rem;
  padding: 0.5rem;
}
</style>
