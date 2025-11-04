import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: (id) => {
          // Preserve lucide-react icons to prevent tree-shaking
          if (id.includes('lucide-react')) {
            return true;
          }
          return false;
        },
      },
    },
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/],
      transformMixedEsModules: true,
    },
    // Ensure all modules are properly included
    target: 'es2020',
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ["lucide-react"],
    esbuildOptions: {
      target: 'es2020',
    },
    force: true,
  },
  assetsInclude: ["**/*.svg"],
  // Ensure SVG imports work correctly
  esbuild: {
    target: 'es2020',
  },
}));
