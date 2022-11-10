import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/services?size=100")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="services-container container mt-20 mb-40 mx-auto flex-wrap px-2">
        <h1 className="text-4xl text-center  mb-10 ">All Food services</h1>
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
                      src={service.food_img}
                      className="p-8 rounded-t-lg w-screen p-20"
                      alt=""
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
                      view Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
