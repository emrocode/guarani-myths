import { createBrowserRouter } from "react-router";
import { Layout } from "@/components";
import { Home, NotFound } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
