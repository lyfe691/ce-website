import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/" : "/", 
  server: {
    host: true, 
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true, 
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), 
    },
  },
}));
