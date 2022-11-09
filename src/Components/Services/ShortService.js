import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ShortService = () => {
  const services = useLoaderData();
  return (
    <>
      <div className="services-container container mt-20 mb-40 mx-auto flex-wrap px-2">
        <h1 className="text-4xl text-center  mb-10 ">
          My Popular Food services
        </h1>
        <div className=" flex justify-evenly items-center gap-3 flex-wrap">
          {services.map((service) => {
            return (
              <div
                key={service._id}
                className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <PhotoProvider>
                  <PhotoView src={service.food_img}>
                    <img
                      className="p-8 rounded-t-lg"
                      src={service.food_img}
                      alt="food image"
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {service.food_type}
                  </h5>
                  <div className="description">
                    <p className="mt-2.5 mb-5">
                      {service.food_recipe.slice(0, 100)}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${service.food_price}
                    </span>
                    <Link
                      to={`/service/${service._id}`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Show Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center w-full  grid justify-center mt-8">
          <Link
            className="text-center mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            to={"/services"}
          >
            See All
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShortService;
