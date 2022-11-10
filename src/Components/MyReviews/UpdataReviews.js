import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const UpdataReviews = () => {
  const data = useLoaderData();
  const [update, setUpdate] = useState(data);
  const Swal = require("sweetalert2");
  const handleUpdateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:7000/user/profile/update/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "Successfully update!", "success");
      });
  };
  console.log(update);
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    console.log(field, value);
    const newReview = { ...update };
    newReview[field] = value;
    setUpdate(newReview);
  };
  return (
    <>
      <form
        onSubmit={handleUpdateUser}
        className="pt-3 pb-0 sm:pt-4 container mx-auto w-[50vw] block "
      >
         <div className="mb-6">
          <label
           htmlFor="default-input"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="default-input"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            defaultValue={data.fullName}
            name='fullName'
          />
        </div>
        <div className="mb-6">
          <label
           htmlFor="default-input"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date
          </label>
          <input
            type="date"
            id="default-input"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            defaultValue={data.date}
            name='date'
          />
        </div>
        <div className="mb-6">
          <label
           htmlFor="default-input"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Write Review
          </label>
          <textarea
            type="text"
            id="default-input"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            defaultValue={data.review}
            name='review'
          />
        </div>
        <button type="submit"className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
      </form>
    </>
  );
};

export default UpdataReviews;
