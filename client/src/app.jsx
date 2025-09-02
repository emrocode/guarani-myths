import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <MDXProvider>
      <RouterProvider router={router} />
    </MDXProvider>
  </React.StrictMode>,
);
