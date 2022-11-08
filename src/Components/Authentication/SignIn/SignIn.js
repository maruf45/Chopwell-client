import React from "react";
import { Link } from "react-router-dom";
const Swal = require("sweetalert2");

const SignIn = () => {
    const FormSubmit = (event) => {
        event.preventDefault();
        const field = event.target;
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
          .then(data => {
            Swal.fire(
                'Good job!',
                'Successfully Sing up !',
                'success'
              )
          })
          .catch(error => {
            if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                error.message = 'Email is Already use. Try another email'
            }
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error",
                confirmButtonText: "Ok",
              });
        })
        }
      };
  return (
    <>
    <div className="form-container sm:px-4 py-2.5 px-2">
      <form className="container mx-auto ">
      <h1 className="text-center text-2xl pt-2.5 pb-1.5">Sign In</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            <Link
              to="/sign-up"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Don't have an account | Create Account
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </form>
    </div>
    </>
  );
};

export default SignIn;
