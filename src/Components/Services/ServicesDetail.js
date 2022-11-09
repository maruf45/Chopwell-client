import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ServicesDetail = () => {
  const { food_type, food_img, food_recipe, food_price, food_icon, _id } =
    useLoaderData();
  return (
    <>
    <Breadcrumb id={_id}/>
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
