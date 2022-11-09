import React from "react";
import { useLoaderData } from "react-router-dom";

const SeeReviews = () => {
  const users = useLoaderData();
  return (
    <>
      <div class="container mx-auto w-[80vh] block bg-white  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Review
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((u) => {
              return (
                <li class="pt-3 pb-0 sm:pt-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={u.img}
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                       Name: {u.fullName}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                       email: {u.email}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
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
