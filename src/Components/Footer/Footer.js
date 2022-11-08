import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            Chopwell
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/licensing" className="mr-4 hover:underline md:mr-6">
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
