import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  test: {
    environnement: "jsdom",
    //setupFiles: ".tests/setup.js",
  },
  preview: {
    port: 7070,
    strictPort: true,
  },
  server: {
    port: 7070,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:7070",
  },
});
