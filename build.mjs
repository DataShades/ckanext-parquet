// build.js
import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["node_modules/hyparquet/src/index.js"],
    bundle: true,
    minify: true,
    format: "iife",                     // makes a <script>-safe browser global
    globalName: "hyparquet",            // will become window.hyparquet
    outfile: "hyparquet.bundle.js"
}).catch(() => process.exit(1));
