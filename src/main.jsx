import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Routes/Router.jsx";
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
