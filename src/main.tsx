import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/index.tsx";
import ErrorPage from "./pages/error-page.tsx";
import CrewPage from "./pages/crew/index.tsx";
import DestinationPage from "./pages/destination/index.tsx";
import TechnologyPage from "./pages/technology/index.tsx";
import Layout from "./components/layout/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "crew",
        element: <CrewPage />,
      },
      {
        path: "destination",
        element: <DestinationPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
