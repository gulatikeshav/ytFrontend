import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api/search": {
  //       target: "https://suggestqueries.google.com",
  //       changeOrigin: true,
  //       rewrite: (path) =>
  //         path.replace(
  //           /^\/api\/search/,
  //           "/complete/search?client=firefox&ds=yt"
  //         ),
  //     },
  //   },
  // },
});
