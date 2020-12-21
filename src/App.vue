<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <GMaps />
  <WeatherWidget />
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget";
import GMaps from "@/components/GMaps";
export default {
  name: "App",
  components: {
    WeatherWidget,
    GMaps
  }
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
