import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginMdx } from "@rsbuild/plugin-mdx";

export default defineConfig({
  environments: {
    web: {
      source: {
        entry: {
          index: "./src/app.jsx",
        },
      },
      output: {
        target: "web",
      },
      plugins: [pluginReact(), pluginMdx()],
    },
  },
  html: {
    template: "./index.html",
  },
});
