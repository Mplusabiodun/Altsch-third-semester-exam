<template>
  <div class="cover">
    <div id="bg"></div>

    <form @submit.prevent="loginUser()">
      <div class="form-field">
        <input
          type="email"
          placeholder="Email / Username"
          required
          v-model.trim="email"
        />
      </div>

      <div class="form-field">
        <input
          type="password"
          placeholder="Password"
          required
          v-model.trim="password"
        />
      </div>

      <div class="form-field">
        <button class="btn" type="submit">Sign Up</button>
      </div>
      <div>
        <p>Already have an Account? <router-link to="/login">Click here to login</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      const user = {
        userId: "dweidwefiejwf",
        userEmail: this.email,
      };
      await this.$store.dispatch("loginUser", user);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.cover {
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
#bg {
  background-image: url("./../assets/background.jpg");
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(5px);
}

form {
  width: 350px;
  position: relative;
}
form .form-field::before {
  font-size: 20px;
  position: absolute;
  left: 15px;
  top: 17px;
  color: #888888;
  content: " ";
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}
form .form-field:nth-child(1)::before {
  background-image: url("./../assets/user-icon.png");
  width: 20px;
  height: 20px;
  top: 15px;
}
form .form-field:nth-child(2)::before {
  background-image: url("./../assets/lock-icon.png");
  width: 16px;
  height: 16px;
}
form .form-field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
}
form input {
  font-family: inherit;
  width: 100%;
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  display: block;
  padding: 0.9rem 0.7rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
  color: #4a4a4a;
  text-indent: 40px;
}
form .btn {
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  background-color: #47ab11;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
}
</style>