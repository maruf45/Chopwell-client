import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import SignIn from "../Components/Authentication/SignIn/SignIn";
import SignUp from "../Components/Authentication/SIgnUp/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import MainLayouts from "../Components/MainLayouts/MainLayouts";
import MyReviews from "../Components/MyReviews/MyReviews";
import UpdataReviews from "../Components/MyReviews/UpdataReviews";
import Reviews from "../Components/Services/Reviews";
import SeeReviews from "../Components/Services/SeeReviews";
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
        loader: () => fetch("https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/services"),
      },
      { path: "/services", element: <Services /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      {
        path: "/update-review/:id",
        element: <UpdataReviews />,
        loader: ({ params }) =>
          fetch(`https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/user/update-review/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: <Reviews />,
        loader: ({ params }) =>
          fetch(`https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/service/${params.id}`),
      },
      {
        path: "/user-reviews/:id",
        element: <SeeReviews />,
        loader: ({ params }) =>
          fetch(`https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/user/reviews/${params.id}`),
      },
      {
        path: "/service/:id",
        element: <ServicesDetail />,
        loader: ({ params }) =>
          fetch(`https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/service/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/blogs"),
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
