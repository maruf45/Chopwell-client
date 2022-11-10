import React from "react";
import { Helmet } from "react-helmet";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const Swal = require("sweetalert2");
    const field = event.target;
    const photo = field.photo.files[0];
    const serviceName= field.serviceName.value;
    const price = field.serviceName.value;
    const serviceDescription = field.serviceDescription.value;
    const imageKey = "8b6bad17ccb6b5cdfff9af4bad6b37b6";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
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
          const service = {
            food_type: serviceName,
            food_img: img,
            food_price: price,
            food_recipe: serviceDescription,
          };
          fetch("https://server-side-maruf45-1cwj1xzji-server-site-885.vercel.app/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              field.reset();
              Swal.fire("Good job!", "Successfully add service!", "success");
            });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Service - chopwell</title>
      </Helmet>
      <form
        onSubmit={handleAddService}
        className="pt-3 pb-0 sm:pt-4 container mx-auto w-[50vw] block "
      >
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Service Name
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Service Name"
            name="serviceName"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            name="price"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="file_input"
          >
            Service Picture
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            name="photo"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Service Description
          </label>
          <textarea
            placeholder="write des..."
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="serviceDescription"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add service
        </button>
      </form>
    </div>
  );
};

export default AddService;
