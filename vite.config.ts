import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// Base path:
//  - dev always serves from "/"
//  - build defaults to "/site/" (GitHub Pages project URL: user.github.io/site/)
//  - override with BASE_PATH=/ for a custom domain or root hosting
export default defineConfig(({ command }) => ({
  base: command === "build" ? (process.env["BASE_PATH"] ?? "/site/") : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
