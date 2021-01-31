<template>
  <form id="search" @submit.prevent="handleFormSubmit">
    <label>
      <span class="label"></span>
      <input v-model="searchTerm" type="text" />
    </label>

    <p>{{ searchTerm }}</p>
    <pre class="response">{{ response }}</pre>

    <button type="submit">Search</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Search",
  el: "#search",

  setup: () => {
    const count = ref(0);
    return { count };
  },

  data: () => {
    const searchTerm = "";
    const response = "";

    return { response, searchTerm };
  },

  methods: {
    handleFormSubmit: async function () {
      console.log(import.meta.env);
      try {
        const url = new URL(
          `${import.meta.env.VITE_SERVICE_URL as string}/images`
        );

        url.searchParams.append("q", this.searchTerm);

        await fetch(url.toString(), { mode: "cors" })
          .then((response) => response.json())
          .then((data) => {
            this.response = data.response.rows;
          });
      } catch (err) {
        console.error(err);
      }
    },
  },
});
</script>

<style scoped>
.label {
  display: block;
}

.response {
  text-align: initial;
}
</style>
