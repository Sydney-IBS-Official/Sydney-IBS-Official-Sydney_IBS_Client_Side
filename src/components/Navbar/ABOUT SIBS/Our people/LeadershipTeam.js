import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import female1 from '../../../../Carosel/Asset/Academic staffs/female-1.jpg';
import male1 from '../../../../Carosel/Asset/Academic staffs/male-1.png';
const LeadershipTeam = () => {
  return (
    <div className="container mx-auto ">
      <div class=" w-full  ">
        <div
          className="  
                shadow-lg lg:mx-[170px] bg-base-100  "
        >
          <div className="flex flex-col px-2">
            <div className=" lg:w-full    ">
              <div className="   px-3 py-3   ">
                {/* Breadcrumb added start here */}
                <div className="text-md breadcrumbs md:px-6  ">
                  <ul className="text-sky-700 border-b-4 border-sky-700 ">
                    <li>
                      <a href="/" className="font-semibold">
                        Home
                      </a>
                    </li>
                    <li>
                      <p className="font-semibold">About Us</p>
                    </li>
                    <li>
                      <a href="/profile" className="font-semibold">
                        {' '}
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="/people" className="font-semibold">
                        {' '}
                        Our people
                      </a>
                    </li>
                    <li>
                      <p className="text-black"> Leadership team</p>
                    </li>
                  </ul>
                  {/* Breadcrumb ended*/}
                </div>

                {/* Leadership team list start here */}
              </div>

              <div className="lg:mx-6 ">
                <div className=" my-3 mx-3">
                  <h1 className="text-xl font-bold text-sky-700">
                    Leadership Team
                  </h1>
                </div>

                {/* profile-1 */}

                <div className=" mb-3 py-2 border-b-2 border-gray  lg:mx-2  ">
                  <div className="grid grid-cols-1 md:grid-cols-9  lg:grid-cols-12 gap-5  ">
                    <div className="lg:col-span-3 md:col-span-3 ">
                      <img src={male1} className="max-w-sm w-52 px-2 h-44" />
                    </div>
                    <div className=" lg:col-span-9 md:col-span-6 ">
                      <h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
                        <a href="#">Ganesh G.Thanasegaran, Mr.</a>
                      </h1>

                      <p>Graduate Coordinator</p>
                      <p className="flex">
                        <span className="font-bold">Expertise:</span> Finance
                        expert
                      </p>

                      <p className="flex">
                        <span className="font-bold">Phone:</span>
                        +603-97694930/4907
                      </p>
                      <p className="flex">
                        <span className="font-bold">Email:</span>{' '}
                        <span className="text-sky-700 font-bold">
                          doud@sydneyibs.edu.au
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile-2 */}

                <div className=" mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img src={male1} className="max-w-sm w-52 px-2 h-44" />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Sridar Ramachandran, PhD
                      </h1>
                      <p> Head Of Accreditation Unit</p>
                      <p>
                        <span className="font-bold">Expertise:</span>{' '}
                        Responsible Tourism and Marketing
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4909
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        <span className="text-sky-700 font-bold">
                          Hanis@sydneyibs.edu.au
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile-3 */}

                <div className="mb-3 p-2 border-b-2 border-gray  ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44"
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Saifuzzaman Ibrahim
                      </h1>
                      <p>Professor/Head Of Programme</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Financial
                        Economics
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+608-3769 4909
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        <span className="text-sky-700 font-bold">
                          Buda@sydneyibs.edu.au
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile-4 */}

                <div className=" mb-3 p-2 border-b-2 border-gray ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>

                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Anuar Shah Bali Mahomed, PhD
                      </h1>
                      <p>Graduate Coordinator</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Technology
                        Adoption, Cultural Studies
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+605-3269 4909
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        <span className="text-sky-700 font-bold">
                          Mahmud@sydneyibs.edu.au
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile-5 */}

                <div className="mb-3 p-2  border-b-2 border-gray  ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Ahmad Fahmi Sheikh Hassan
                      </h1>
                      <p>Graduate Coordinator</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Corporate
                        Governance, Financial Accounting
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4911
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        Marzuki@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-6 */}

                <div className=" mb-3 p-2 border-b-2 border-gray  ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className=" lg:col-span-3 md:col-span-3">
                      <img
                        src={female1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className="font-bold text-sky-700">
                        Nor Yasmin Mhd Bani, PhD
                      </h1>
                      <p> Graduate Coordinator</p>

                      <p>
                        <span className="font-bold">Expertise:</span>{' '}
                        Development Economics Applied Econometrics
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4906
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        Fadzil@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile-7 */}
                <div className=" mb-3 p-2 border-b-2 border-gray    ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={female1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className="font-bold text-sky-700">
                        Khadijah Bt. Mohd. Isa
                      </h1>
                      <p>Associate Professor / Graduate Coordinator</p>
                      <p>
                        <span className="font-bold">Expertise:</span>{' '}
                        International Business Management
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4937
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        Shamsudin@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-8 */}

                <div className=" mb-3 p-2 border-b-2 border-gray    ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className="font-bold text-sky-700">
                        Ridzwana Mohd Said
                      </h1>
                      <p> Head Of Programme</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Corporate
                        Social and Environmental Reporting
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4937
                      </p>
                    </div>
                  </div>
                </div>
                {/* profile-9 */}
                <div className=" mb-3 p-2 border-b-2 border-gray    ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={female1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className="font-bold text-sky-700">
                        Haslinda Hashim
                      </h1>

                      <p>
                        <span className="font-bold">Expertise:</span> Marketing,
                        Consumer Behaviour
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4937
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        Shamsudin@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-10 */}

                <div className="mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5 ">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className=" lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Ashurov Sharofiddin
                      </h1>
                      <p>Academic coordinator</p>
                      <p>
                        <span className="font-bold">Expertise:</span>
                        Marketing
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        sahbani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-11 */}

                <div className="mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        anisuzzaman Ibrahim
                      </h1>
                      <p>Senior Lecturer</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Business
                        and Economics
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        sahbani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-12 */}

                <div className="mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        sany Amin Noordin
                      </h1>
                      <p>Senior Lecturer</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Managerial
                        Finance, Corporate Finance
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        sani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-13 */}

                <div className="mb-3 p-2 border-b-2 border-gray">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Sahbani Saimin
                      </h1>
                      <p>Academic advisor</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Staff
                        management
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        sahbani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-14 */}

                <div className="mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={female1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Salina Bt. Kassim
                      </h1>
                      <p>Coordinator</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Financial
                        and Monetary Economics
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        sahbani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>

                {/* profile-15 */}

                <div className="mb-3 p-2 border-b-2 border-gray   ">
                  <div className="grid grid-cols-1 md:grid-cols-9   lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-3 md:col-span-3">
                      <img
                        src={male1}
                        className="max-w-sm w-48 lg:w-52 px-2 h-44 "
                      />
                    </div>
                    <div className="lg:col-span-9 md:col-span-6">
                      <h1 className=" font-bold text-sky-700">
                        Hznan Bin kamal
                      </h1>
                      <p>Senior staff</p>
                      <p>
                        <span className="font-bold">Expertise:</span> Business
                        And Management ~ Islamic Insurance
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span>+603-9769 4910
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{' '}
                        bani@sydneyibs.edu.au
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership team list end here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
