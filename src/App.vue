<template>
  <router-view />
</template>

<script>
export default {
  created() {
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
