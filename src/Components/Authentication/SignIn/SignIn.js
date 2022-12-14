import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UseContext/UseContext";

const SignIn = () => {
  const Swal = require("sweetalert2");
  const { user, SignIn, github } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(user);
  const signInWithGitHub = () => {
    github().then((data) => {
      Swal.fire("Good job!", "Successfully Sign in !", "success");
      navigate(from, { replace: true });
    });
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    const email = field.email.value;
    const password = field.password.value;
    SignIn(email, password)
      .then((data) => {
        const user = data.user;
        const userAddress = {
          email: user?.email,
        };
        fetch("https://services-server-2ip03zcd9-maruff.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userAddress),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
        console.log(userAddress);
        Swal.fire("Good job!", "Successfully Sign in !", "success");
        navigate(from, { replace: true });
        event.target.reset();
      })

      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          error.message = "Your entered password is wrong";
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          error.message = "Please Provide a valid email";
        }

        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>SignIn - chopwell</title>
      </Helmet>
      <div className="container w-full mx-auto  grid justify-center mt-20 sm:px-4 py-2.5 px-2">
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={FormSubmit} className="space-y-6">
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Sign in
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="????????????????????????"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </form>
          <button
            onClick={signInWithGitHub}
            className="flex items-center w-full  justify-center  text-white bg-blue-700 hover:bg-blue-800 mt-5 mb-4 py-1 rounded-lg  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GitHub Login
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/sign-up"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
