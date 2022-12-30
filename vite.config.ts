import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@": resolve(__dirname, "./src"),
  //     "@components": resolve(__dirname, "./src/components"),
  //     "@views": resolve(__dirname, "./src/views"),
  //     "@utils": resolve(__dirname, "./src/utils"),
  //     "@hooks": resolve(__dirname, "./src/hooks"),
  //     "@assets": resolve(__dirname, "./src/assets"),
  //     "@types": resolve(__dirname, "./src/types"),
  //     "@public": resolve(__dirname, "./public"),
  //   },
  // },
});
