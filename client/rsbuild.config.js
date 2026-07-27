import { defineConfig } from "@rsbuild/core";
import { pluginMdx } from "@rsbuild/plugin-mdx";
import { pluginReact } from "@rsbuild/plugin-react";
import rehypeExternalLinks from "rehype-external-links";
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
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeExternalLinks,
                { target: "_blank", rel: "noopener noreferrer" },
              ],
            ],
          },
        }),
      ],
    },
  },
  html: {
    template: "./index.html",
    tags: [
      {
        tag: "script",
        append: false,
        children: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`
      },
    ],
  },
});
