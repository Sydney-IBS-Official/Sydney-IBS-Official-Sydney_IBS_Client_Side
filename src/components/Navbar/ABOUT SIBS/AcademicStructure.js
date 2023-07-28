import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import academicStructure from '../../../Carosel/Asset/Academic Structure.jpg';
import Governance from '../../../Carosel/Asset/Presentation8.jpg';
const AcademicStructure = () => {
  return (
    <div className="">
      <div className="container mx-auto   ">
        <div className="lg:mx-[170px] shadow-sm">
          <div className="">
            <div className=" lg:w-full    ">
              <div className=" bg-base-100  px-3 py-3 pb-10  ">
                {/* Breadcrumb added here */}
                <div className="text-md breadcrumbs lg:mx-6 ">
                  <ul className="text-sky-700 mb-3 border-b-4 border-sky-700  mx-3 ">
                    <li>
                      <a href="/" className="font-semibold">
                        Home
                      </a>
                    </li>
                    <li>
                      <p className="font-semibold">About Us</p>
                    </li>
                    <li>
                      <p className="text-black"> Academic structure</p>
                    </li>
                  </ul>
                </div>

                {/* AcademicStructure content start here */}

                <div className="  ">
                  {/* AcademicStructure Image */}
                  <img
                    src={academicStructure}
                    alt=""
                    className="lg:px-14 lg:ml-5 "
                  />

                  {/* AcademicStructure details  */}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3  font-bold    mt-5 ">
                      <p className="border-b-2 border-gray-400 text-primary">
                        {' '}
                        Dean
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam maiores expedita nulla officia qui, cumque
                      voluptatibus soluta in, voluptatem, quasi labore.
                    </p>
                  </div>

                  {/* Deputy Dean details start here */}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold   mt-5 ">
                      <p className="border-b-2 border-gray-400 text-primary">
                        Deputy Dean
                      </p>
                    </h1>
                    <p className=" px-3 text-justify ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse magnam molestiae quam id mollitia? A dicta incidunt
                      quasi laborum? Assumenda, quia. Ipsam numquam iure
                      obcaecati dolor quos itaque veniam enim.
                    </p>
                  </div>

                  {/* Associate Dean, Accreditation Unit details start here */}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold mt-5">
                      <p className="border-b-2   border-gray-400 text-primary">
                        Associate Dean, Accreditation Unit
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
                  </div>

                  {/* Associate Dean, Learning and Teaching details start here */}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold 2  mt-5  ">
                      <p className="border-b-2 border-gray-400 text-primary">
                        Associate Dean, Learning and Teaching
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
                  </div>

                  {/* Associate Dean, Graduate Research Studies details start here*/}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold  mt-5  ">
                      <p
                        className="border-b-2 border-gray-400 text-primary"
                        href="#"
                      >
                        Associate Dean, Graduate Research Studies
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
                  </div>

                  {/* Associate Dean, Funding, Industry & Community Engagement details start here*/}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold  mt-5  ">
                      <p
                        href="#"
                        className="border-b-2 border-gray-400 text-primary"
                      >
                        Associate Dean, Funding, Industry & Community Engagement
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
                  </div>

                  {/* Registrar details start here*/}

                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold  mt-5">
                      <p
                        href="#"
                        className="border-b-2 border-gray-400 text-primary"
                      >
                        Registrar
                      </p>
                    </h1>
                    <p className=" px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
                  </div>

                  {/* School Manager start here*/}
                  <div className="lg:mx-6">
                    <h1 className="lg:text-xl px-3 font-bold   mt-5">
                      <p className="border-b-2 border-gray-400 text-primary">
                        School Manager
                      </p>
                    </h1>
                    <p className="px-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure neque cupiditate eos ipsum perferendis odit
                      temporibus totam quis eum consectetur repellendus labore,
                      cumque itaque eveniet quia commodi animi similique
                      aperiam!
                    </p>
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

export default AcademicStructure;
