<script>
import AppMain from "./components/AppMain.vue"
import AppFooterVue from "./components/AppFooter.vue";

export default {
  components: {
    AppMain, AppFooterVue
  }
}

</script>

<template>

  <AppMain />

  <AppFooterVue />

</template>

<style lang="scss">
@use "../src/style/general.scss" as *;

body {
  height: 100vh;
}
</style>
