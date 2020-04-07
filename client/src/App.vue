<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-nav></vue-nav>
      <router-view></router-view>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Nav from "./components/Nav/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    "vue-header": Header,
    "vue-nav": Nav,
    "vue-footer": Footer,
  },
};
</script>

<style>
#app {
}
</style>
