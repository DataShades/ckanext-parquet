import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ["hyperparam"],
    },
    base: "./",
    build: {
        rollupOptions: {
            input: "./src/main.tsx",
            output: {
                // this will work only if we don't have other assets
                // except js and css
                dir: "../ckanext/parquet/assets",
                entryFileNames: "js/hyparquet.min.js",
                chunkFileNames: "js/hyparquet.min.js",
                assetFileNames: "css/hyparquet.min.css",
            },
        },
    },
});
