import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { NavLink, useLoaderData } from "react-router-dom";

const ServicesDetail = () => {
  const { food_type, food_img, food_recipe, food_price, food_icon, _id } =
    useLoaderData();
  return (
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
              <NavLink to={`/user-reviews/${_id}`}>See Reviews</NavLink>
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
              <NavLink to={`/reviews/${_id}`}>Add Reviews</NavLink>
            </div>
          </li>
        </ol>
      </nav>
      <div className="container mx-auto px-2 sm:px-4 mt-5 mb-32">
        <PhotoProvider>
          <PhotoView src={food_img}>
            <img
              src={food_img}
              className="p-8 rounded-t-lg w-screen p-20"
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <img src={food_icon} className=" mx-auto my-3" alt="" />
            <span className="text-2xl font-bold">Food Type:</span> {food_type}
          </h5>
          <div className="description">
            <p className="mt-2.5 mb-5">
              <span className="font-bold text-lg">ingredients:</span>{" "}
              {food_recipe}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="bold">Price:</span> ${food_price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetail;
