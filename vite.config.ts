import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ CLAVE para cPanel / hosting compartido:
  // hace que los assets queden con rutas relativas (./assets/...)
  // y evita pantalla en blanco hasta recargar.
  base: "./",

  build: {
    outDir: "dist",
    assetsDir: "assets",

    // ✅ Evita comportamientos raros de preload en algunos hostings
    modulePreload: {
      polyfill: false,
    },

    // ✅ Nombres consistentes (opcional pero recomendado)
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
