import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // relative path for static hosting (Vercel, GitHub Pages)
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // optional SCSS settings
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
  build: {
    outDir: "dist", // default build folder
  },
});
