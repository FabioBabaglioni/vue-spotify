<script>
import AppMain from "./components/AppMain.vue"

export default {
  components: {
    AppMain
  }
}

</script>

<template>

  <AppMain />

</template>

<style lang="scss">
@use "../src/style/general.scss" as *;

body {
  height: 100vh;
}
</style>
