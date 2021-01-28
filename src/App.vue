<template>
  <div>
    <h1>Image Finder</h1>
    <Search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./components/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    Search,
  },
});
</script>

<style>
#app {
  font-family: "SF Pro", "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
