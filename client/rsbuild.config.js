import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginMdx } from "@rsbuild/plugin-mdx";
import rehypeSlug from "rehype-slug";

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
      plugins: [
        pluginReact(),
        pluginMdx({
          mdxLoaderOptions: {
            rehypePlugins: [rehypeSlug],
          },
        }),
      ],
    },
  },
  html: {
    template: "./index.html",
  },
});
