import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import SignIn from "../Components/Authentication/SignIn/SignIn";
import SignUp from "../Components/Authentication/SIgnUp/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import MainLayouts from "../Components/MainLayouts/MainLayouts";
import MyReviews from "../Components/MyReviews/MyReviews";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";
import ServicesDetail from "../Components/Services/ServicesDetail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:7000/services"),
      },
      { path: "/services", element: <Services /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/reviews", element: <Reviews /> },
      {
        path: "/service/:id",
        element: <ServicesDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/service/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("http://localhost:7000/blogs"),
      },
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
