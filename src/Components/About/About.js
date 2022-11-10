import React from "react";

const About = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-2 md:px-2 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://i.ibb.co/9ZTrSjd/about.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              We speak the good <br /> food language
            </h1>
            <p class="mb-8 leading-relaxed">
              There is no better way to celebrate summer than with a nice, juicy <br />
              burger. Whether you're in the mood for something classic like the <br />
              almighty cheeseburger, a veggie burger even meat-eaters will crave <br />
              (seriously), or something more outside the box, like a shrimp or <br />
              bison burger, we've got a recipe for everyone at your cookout.
            </p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                See it
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
