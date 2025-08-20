import { defineConfig } from "vite";
import react from "vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ command, mode }) => ({
  // Use the repo subpath only for the production build (GitHub Pages)
  base: command === "build" ? "/spark-campus-events/" : "/",

  // Let the dev server pick its own host/port (Lovable expects defaults)
  server: {},

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
