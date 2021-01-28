import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: mode === "development" ? "0.0.0.0:9010" : "",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
}));
