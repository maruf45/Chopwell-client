import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({id}) => {
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
                to={`/service/${id}`}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Services
              </NavLink>
            </div>
          </li>
          <li aria-current="page">
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
              <NavLink to={"/reviews"}>Reviews</NavLink>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
