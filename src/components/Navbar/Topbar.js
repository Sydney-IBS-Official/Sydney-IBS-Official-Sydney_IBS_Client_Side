import React from 'react';
import { FaBars, FaBook, FaBookOpen } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar = () => {
  return (
    <>
      <nav className=" ">
        <div className="container mx-auto">
          <div className="flex  font-medium justify-start lg:mx-[210px]">
            <div className="z-50 p-3 md:w-auto w-full flex justify-start ">
              <ul className="flex flex-row  space-x-2 text-sm font-medium  text-white">
                <li className="flex">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Library |
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-white hover:underline"
                  >
                    Blackboard |
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-white hover:underline"
                  >
                    Staff |
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-white hover:underline"
                  >
                    Student |
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-white hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
