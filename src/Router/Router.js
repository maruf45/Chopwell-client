import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Authentication/SignIn/SignIn";
import SignUp from "../Components/Authentication/SIgnUp/SignUp";
import MainLayouts from "../Components/MainLayouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: "" },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
]);
