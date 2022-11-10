import React from "react";
import About from "../About/About";
import ShortService from "../Services/ShortService";
import Subscribe from "../Subscribe./Subscribe";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="text-content w-full grid content-center justify-center h-[80vh] text-white text-center">
          <h1 className="text-4xl pb-5 tracking-widest">"CHOPWELL"</h1>
          <h1 className="text-6xl">FOOD DELIVERY & SERVICE</h1>
        </div>
      </div>
      <About />
      <ShortService />
      <Subscribe />
    </>
  );
};

export default Home;
