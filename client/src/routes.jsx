import { createBrowserRouter } from "react-router";
import { Layout } from "@/components";
import { Home, Error } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Error /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
