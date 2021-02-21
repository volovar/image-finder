import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      "/images": "http://localhost:9010/images",
      "/api": "http://localhost:9010",
    },
    watch: {
      usePolling: true,
    },
  },
});
