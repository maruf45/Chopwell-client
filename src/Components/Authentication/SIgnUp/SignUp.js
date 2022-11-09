import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UseContext/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const SignUp = () => {
  const { CreateUser, UpdateUserProfile, emailVerification } =
    useContext(AuthContext);
  // useing toast and modal
  const Swal = require("sweetalert2");
  const notify = () =>
    toast.success("A verification link has been sent to your email account");

  const FormSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    const name = field.name.value;
    const last_name = field.last_name.value;
    const fullName = `${name} ${last_name}`;
    const email = field.email.value;
    const password = field.password.value;
    const confirm_password = field.confirm_password.value;

    if (password !== confirm_password) {
      Swal.fire({
        title: "Error!",
        text: "Password not match try again",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      CreateUser(email, password)
        .then((data) => {
          userProfile(fullName);
          Swal.fire("Good job!", "Successfully Sign up !", "success");
          emailVerify();
          event.target.reset();
        })

        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            error.message = "Email is Already use. Try another email";
          }

          Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }

    const emailVerify = () => {
      emailVerification().then((data) => {
        notify();
      });
    };

    // Updating user profile
    const userProfile = (fullName) => {
      const profile = {
        displayName: fullName,
      };

      UpdateUserProfile(profile)
        .then((data) => {})
        .catch((error) => {});
    };
  };
  return (
    <>
      <Helmet>
        <title>SignUp - chopwell</title>
      </Helmet>
      <ToastContainer />
      <div className="container w-full mx-auto  grid justify-center mt-20 sm:px-4 py-2.5 px-2">
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={FormSubmit} className="space-y-6">
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Sign Up 
            </h5>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                name="name"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Last name"
                
              />
            </div>
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
                placeholder="example@name.com"
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
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Confirm Password 
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="••••••••"
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
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-blue-700 hover:underline dark:text-gray-300"
                >
                   Terms And Condition
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
              Create your account
            </button>
          </form>
          <div className="text-sm font-medium mt-2 text-gray-500 dark:text-gray-300">
            Already Have an account?{" "}
            <Link
              to="/sign-in"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
