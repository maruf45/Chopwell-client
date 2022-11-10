import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/9ZTrSjd/about.png"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              For the Know latest information please <br /> subscribe and join
              with us
            </h1>
            <p className="mb-8 leading-relaxed text-center">
              Whether you're in the mood for something classic like the almighty
              cheeseburger, <br /> bison burger, we've got a recipe for <br />
              everyone at your cookout.
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="email address"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
