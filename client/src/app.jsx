import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <MDXProvider>
      <RouterProvider router={router} />
    </MDXProvider>
  </React.StrictMode>,
);
