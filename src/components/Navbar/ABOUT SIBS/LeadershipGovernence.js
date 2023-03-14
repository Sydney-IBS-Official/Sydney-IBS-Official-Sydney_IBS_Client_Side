import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Governance from "../../../Carosel/Asset/Presentation8.jpg";
const LeadershipGovernence = () => {
	return (
    <div className="">
      <div className="container mx-auto  ">
        <div className="lg:mx-[170px] shadow-sm ">
          <div className="">
            <div className=" lg:w-full    ">
              <div className=" bg-base-100  py-3 pb-10  ">
                {/* Breadcrumb added here */}
                <div className="text-md breadcrumbs  lg:mx-8 px-3   ">
                  <ul className="border-b-4 border-sky-700 ">
                    <li>
                      <Link to="/" className="font-semibold text-sky-700">
                        Home
                      </Link>
                    </li>
                    <li>
                      <p className="font-semibold text-sky-700">About Us</p>
                    </li>
                    <li>
                      <p className="font-semibold">Governance Structure</p>
                    </li>
                  </ul>

                  {/* Breadcrumb ended */}
                </div>

                <div className="  ">
                  {/* Governance body image  */}

                  <img src={Governance} alt="" className="lg:px-14 lg:ml-5" />

                  {/* Governance body details  */}

                  <div className="-mt-10">
                    <h1 className="text-xl px-3 font-bold  lg:mx-10 ">
                      <a href="#" className="text-primary">
                        Board of Trustees
                      </a>
                    </h1>
                    <p className="lg:mx-10 px-3 text-justify">
                      The governing authority of the University, the Board
                      manages development of broad policies and strategic plans,
                      and is informed by a number of standing committees.
                    </p>

                    {/* CEO and President  */}
                    <h1 className="text-xl px-3  font-bold  lg:mx-10  mt-5 ">
                      <p className="border-b-2 border-gray-400 text-primary">
                        {' '}
                        CEO and President
                      </p>
                    </h1>
                    <p className="lg:mx-10 px-3 mt-3 text-justify">
                      The University President and CEO, responsible for managing
                      all academic and administrative areas of the University.
                      They are informed by the University Executive consisting
                      of the Administrative and Academic Boards.
                    </p>

                    {/* Board Committees  */}
                    <div className="lg:mx-10">
                      <h1 className="text-xl px-3 font-bold   mt-5 ">
                        <p className="border-b-2 border-gray-400 text-primary">
                          Board Committees
                        </p>
                      </h1>
                      <p className=" mt-3 px-3 text-justify">
                        The Board Committees manage development of broad
                        policies and strategic plans, and are informed by a
                        number of standing committees.
                      </p>
                    </div>

                    {/* Academic Senate  */}
                    <div className="lg:mx-10">
                      <h1 className="text-xl px-3 font-bold   mt-5  ">
                        <p className="border-b-2 border-gray-400 text-primary">
                          Academic Senate
                        </p>
                      </h1>
                      <p className=" px-3 text-justify mt-3">
                        This is the peak forum in the University for academic
                        debate and discourse. The Senate is a standing committee
                        of the board, and is responsible for academic standards
                        and values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipGovernence;
