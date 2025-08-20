// vite.config.ts
import { defineConfig } from "vite";
import react from "vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ command, mode }) => ({
  // GitHub Pages needs your repo subpath; dev stays "/"
  base: command === "build" ? "/spark-campus-events/" : "/",
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
