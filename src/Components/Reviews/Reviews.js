import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
    return <Loader />
  }
  return (
    <>
      {user?.uid ? (
        <Breadcrumb />
      ) : (
        <div className="container mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold mb-5">
            Please Sign in first then add Review
          </h1>
          <Link
            to="/sign-in"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go to Sign in
          </Link>
        </div>
      )}
    </>
  );
};

export default Reviews;
