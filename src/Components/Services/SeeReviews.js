import React from "react";
import { useLoaderData } from "react-router-dom";

const SeeReviews = () => {
  const users = useLoaderData();
  return (
    <>
      <div className="container mx-auto w-[80vh] block bg-white  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Review
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {users.map((u) => {
              return (
                <li className="pt-3 pb-0 sm:pt-4" key={u._id}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-[100px] h-[100px] object-cover m-5 rounded-full"
                        src={u.img}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Name: {u.fullName}
                      </p>
                      <p className="text-sm text-gray-500 pt-1 truncate dark:text-gray-400">
                        Email: {u.email}
                      </p>
                      <p className="text-sm text-gray-500 pt-1 truncate dark:text-gray-400">
                        Food Name: {u.food_type}
                      </p>
                      <p className="text-sm pt-1 pb-1.5 text-gray-500 truncate dark:text-gray-400">
                        Review: {u.review}
                      </p>
                      <p className="text-sm text-gray-500 pb-2 truncate dark:text-gray-400">
                        Date: {u.date}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SeeReviews;
