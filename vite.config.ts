import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules } from "vite-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), patchCssModules()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@animate": path.resolve(__dirname, "./animate/"),
      "@app": path.resolve(__dirname, "./app/"),
      "@assets": path.resolve(__dirname, "./assets/"),
      "@components": path.resolve(__dirname, "./components/"),
      "@context": path.resolve(__dirname, "./context/"),
      "@events": path.resolve(__dirname, "./events/"),
      "@hooks": path.resolve(__dirname, "./hooks/"),
      "@utils": path.resolve(__dirname, "./utils/"),
    },
  },
});
