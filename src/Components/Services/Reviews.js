import React, { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";


const Reviews = () => {
  const { user } = useContext(AuthContext);
  const { _id, food_type } = useLoaderData();
  const reviewData = (event) => {
    event.preventDefault();
    const Swal = require("sweetalert2");
    const imageKey = "8b6bad17ccb6b5cdfff9af4bad6b37b6";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const field = event.target;
    const first_name = field.firstName.value;
    const last_name = field.lastName.value;
    const fullName = `${first_name} ${last_name}`;
    const photo = field.photo.files[0];
    const date = field.date.value;
    const email = field.email.value;
    const review = field.review.value;
    const formData = new FormData();
    formData.append("image", photo);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const img = data.data.url;
          const userReview = {
            food: _id,
            food_type,
            fullName,
            img,
            date,
            email,
            review,
          };
          fetch("https://services-server-2ip03zcd9-maruff.vercel.app/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userReview),
          })
            .then((res) => res.json())
            .then((data) => {
              field.reset();
              Swal.fire("Good job!", "Successfully add review!", "success");
            });
        }
      });
  };

  return (
    <>
      {user?.uid ? (
        <>
          <nav
            className="flex justify-center px-5 py-3 text-gray-700 rounded-lg container mx-auto text-center mt-5"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3 text-center">
              <li>
                <div className="flex items-center">
                  <NavLink
                    to={`/service/${_id}`}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Services
                  </NavLink>
                </div>
              </li>
               <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <NavLink to={`/user-reviews/${_id}`}> See Reviews</NavLink>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <NavLink to={`/reviews/${_id}`}>Reviews</NavLink>
                </div>
              </li>
             
            </ol>
          </nav>

          <form
            onSubmit={reviewData}
            className="container mx-auto px-2 md:px-4 my-10"
          >
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Maruf"
                  name="firstName"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Rahman"
                  name="lastName"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="food_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Food Type
                </label>
                <input
                  type="text"
                  id="food_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  defaultValue={food_type}
                  readOnly={true}
                  name="foodType"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Upload Photo
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  name="photo"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="date"
                >
                  Choose Current date
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="date"
                  type="date"
                  name="date"
                  required
                />
              </div>
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
                defaultValue={user?.email}
                readOnly={true}
                name="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="review"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Write Review
              </label>
              <textarea
                type="text"
                id="review"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write review...."
                name="review"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="container mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold mb-5">
            Please Sign in first then add Review
          </h1>
          <Link
            to="/sign-in"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go to Sign in
          </Link>
        </div>
      )}
    </>
  );
};

export default Reviews;
