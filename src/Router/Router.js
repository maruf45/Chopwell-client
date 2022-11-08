import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import SignIn from "../Components/Authentication/SignIn/SignIn";
import SignUp from "../Components/Authentication/SIgnUp/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import MainLayouts from "../Components/MainLayouts/MainLayouts";
import MyReviews from "../Components/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: "" },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/blogs", element: <Blogs /> , loader: () => fetch('http://localhost:7000/blogs')},
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
