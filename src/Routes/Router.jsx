import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Account/Register";
import SignIn from "../pages/Account/SignIn";
import JobDetail from "../pages/JobDetails/JobDetail";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>, 
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