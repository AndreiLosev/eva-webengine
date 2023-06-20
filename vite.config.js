import * as path from "path";
import { defineConfig } from "vite";

const lib_name = "webengine";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["@altertech/jsaltt"]
    },
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: lib_name,
      fileName: (format) => `${lib_name}.${format}.js`
    }
  }
});
