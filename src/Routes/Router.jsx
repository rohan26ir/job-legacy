import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Account/Register";
import SignIn from "../pages/Account/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:  "/signIn",
        element: <SignIn></SignIn>
      }
    ]
  },
]);


export default router;