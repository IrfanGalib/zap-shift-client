import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/Home/Home/HomePage";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/ServiceCenter.json").then((res) => res.json()),
      },
    ],
  },
]);
