import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import './Home.css'

const Home = () => {
  const services = useLoaderData();

  return (
    <>
      <div className="home-container"> 
          <div className="text-content w-full grid content-center justify-center h-[80vh] text-white text-center">
            <h1 className="text-4xl pb-5 tracking-widest">"CHOPWELL"</h1>
            <h1 className="text-6xl">FOOD DELIVERY & SERVICE</h1>
          </div>
      </div>

      <div className="services-container mt-12 container px-2">
        <div className="cards">
          <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <PhotoProvider>
              <PhotoView src="">
                <img
                  class="p-8 rounded-t-lg"
                  src=""
                  alt="food image"
                />
              </PhotoView>
            </PhotoProvider>
            <div class="px-5 pb-5">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <div className="description">
                <p></p>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <Link
                  href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Show Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-round bg-slate-700" to={"/services"}>
          See All
        </Link>
      </div>
    </>
  );
};

export default Home;
