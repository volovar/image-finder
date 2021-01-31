import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      "/images": "http://localhost:9010/images"
    },
    watch: {
      usePolling: true
    }
  }
});
