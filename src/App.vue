<template>
  <div>
    <h1>Image Finder</h1>
    <Search />
    <S3List />
    <button @click.prevent="handleClick">click for service</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./components/Search.vue";
import S3List from "./components/S3List.vue";

export default defineComponent({
  name: "App",
  components: {
    S3List,
    Search,
  },
  methods: {
    handleClick: async () => {
      try {
        const url = new URL(
          `${import.meta.env.VITE_SERVICE_URL as string}/api`
        );

        await fetch("/api", { mode: "cors" })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
          });
      } catch (err) {
        console.error(err);
      }
    },
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
