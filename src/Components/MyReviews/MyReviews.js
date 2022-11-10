import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../UseContext/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const MyReviews = () => {
  const { user, singOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:7000/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
         return singOut();
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, [user?.email, singOut]);
  const notify = () => toast.success("Successfully Delete");
  const handleDelete = (id) => {
    fetch(`http://localhost:7000/my-reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingUser = users.filter((user) => user._id !== id);
        setUsers(remainingUser);
        notify();
      });
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>My service - chopwell</title>
      </Helmet>
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
              console.log(u?.email);
              return u?.email ? (
                <li className="pt-3 pb-0 sm:pt-4" key={u._id}>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center  space-x-4">
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
                    <div className="flex">
                      <Link to={`/update-review/${u._id}`} className="mr-2">
                        <img
                          src="https://img.icons8.com/color-glass/30/pencil.png"
                          alt=""
                        />
                      </Link>
                      <button onClick={() => handleDelete(u._id)}>
                        <img
                          src="https://img.icons8.com/color/30/trash.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <li>
                  <p>No reviews were added</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
