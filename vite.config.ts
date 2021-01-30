import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],

  chokidarWatchOptions: {
    usePolling: true
  }
}));
