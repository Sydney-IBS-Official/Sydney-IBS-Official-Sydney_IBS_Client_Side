import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CurrentStudentsMain from '../CurrentStudents/CurrentStudentsMain';
import FutureStudentsMain from './FutureStudentsMain';

const FutureStudents = () => {
  return (
    <div className="container mx-auto">
      <div className=" bg-base-100 lg:mx-[170px] shadow  ">
       
          <div className=" lg:w-full    ">
            <div className=" lg:px-5  py-3 pb-10  ">
              {/* breadcrumb added here */}
              <div className="text-md breadcrumbs md:px-6 px-3 ">
                <ul className="text-sky-700 border-b-4 border-sky-700">
                  <li>
                    <Link to="/" className="font-semibold text-sky-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <p>Graduate Research</p>
                  </li>
                  <li>
                    <p className="text-black"> Future students</p>
                  </li>
                </ul>
                {/* breadcrumb ended here */}
              </div>
              <div className="  px-3 md:mx-3 ">
                <h1 className=" text-xl my-3 text-sky-700 font-bold  ">
                  Future Students
                </h1>
                <p className="text-justify ">
                  Sydney Islamic Business School (Sydney IBS) offers courses
                  programs across all disciplines within Islamic Business. The
                  PhD program consists of two components– coursework and
                  research. Before completing their research, Sydney IBS PhD
                  candidates are required to complete 36 units of credit worth
                  of coursework units, usually during their first 18 months of
                  study, to assist them in completing their dissertation.
                </p>
              </div>

              {/* Future Students summary  */}
            </div>
          </div>

          {/* Future Students main components added here  */}

          <div className="  lg:mx-9 md:mx-6 lg:px-3 pb-5 lg:pb-12 mx-3">
            <FutureStudentsMain></FutureStudentsMain>
          </div>
        
      </div>
    </div>
  );
};

export default FutureStudents;
