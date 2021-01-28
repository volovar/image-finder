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
      try {
        const url = new URL("https://api.si.edu/openaccess/api/v1.0/search");

        url.searchParams.append("q", this.searchTerm);
        url.searchParams.append(
          "api_key",
          import.meta.env.VITE_API_KEY as string
        );

        await fetch(url.toString())
          .then((response) => response.json())
          .then((data) => {
            console.log(data.response.rows);
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
