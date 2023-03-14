import React from 'react';
import team from '../../../../Carosel/Asset/People/AcademicTeam.jpg';
import leadership from '../../../../Carosel/Asset/People/leader.png';
import administrative from '../../../../Carosel/Asset/People/adminstrative.jpg';
import scholar from '../../../../Carosel/Asset/People/scholar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const People = () => {
  return (
    <>
      <div className="container mx-auto   ">
        <div className="lg:mx-[170px] shadow ">
          <div className=" lg:w-full    ">
            <div className=" bg-base-100 lg:px-6 px-3 py-3 pb-10  ">
              {/* breadcrumb start here */}
              <div className="text-md breadcrumbs md:px-6   ">
                <ul className="text-sky-700 border-b-4 border-sky-700 ">
                  <li>
                    <a href="/" className='font-semibold'>
                      Home
                    </a>
                  </li>
                  <li>
                    <p className='font-semibold'>About Us</p>
                  </li>
                  <li>
                    <p className="text-black"> People</p>
                  </li>
                </ul>
              </div>
              {/* breadcrumb end here */}

              {/* Our people summary start  */}
              <div className=" lg:mx-6 ">
                <h1 className="text-sky-700 text-xl font-bold  ">Our People</h1>

                <p className="  text-justify mt-3 ">
                  Sydney Islamic Business School (Sydney IBS) is the first
                  Islamic higher education institution in Australia. We aim to
                  be a leading teaching and research focused business school by
                  providing excellent Islamic business higher education. We
                  offer degree programs across a range of academic disciplines
                  from doctoral, masters, and graduate diploma levels in the
                  fields of Islamic Banking and Finance, Islamic Business Law,
                  Islamic Economics, Islamic Insurance, Management and
                  International Business.
                </p>
              </div>

              {/* Main content start */}
              <div className="lg:mx-6 py-8">
                {/* Leadership team  */}

                <div className="lg:flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
                  <div className="flex justify-center items-center ">
                    <a href="/leadershipTeam">
                      <img
                        src={leadership}
                        alt=""
                        className="lg:h-28 lg:w-[200px] w-full"
                      />
                    </a>
                  </div>
                  <div className="lg:w-[75%]">
                    <p className="">
                      <a
                        href="/leadershipTeam"
                        className="lg:text-xl  text-white"
                      >
                        Leadership Team
                      </a>
                    </p>

                    <p className="my-3 text-white text-justify">
                      Sydney IBS is Australia's top university and ranked in the
                      top 30 globally.Islamic banking, Islamic finance, or
                      Sharia-compliant finance is banking or financing activity
                      that complies with Sharia and its .
                    </p>
                  </div>
                </div>

                {/* Academic team  */}

                <div className="lg:flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
                  <div className="flex justify-center items-center">
                    <a href="/academic">
                      <img
                        src={team}
                        alt=""
                        className="lg:h-28 lg:w-[200px] w-full mb-3"
                      />
                    </a>
                  </div>
                  <div className="lg:w-[75%]">
                    <a href="/academic" className="lg:text-xl text-white">
                      Academic Team
                    </a>

                    <p className="my-3 text-white mt-3 text-justify">
                      Sydney IBS is Australia's top university and ranked in the
                      top 30 globally.Islamic banking, Islamic finance, or
                      Sharia-compliant finance is banking or financing activity
                      that complies with Sharia and its .
                    </p>
                  </div>
                </div>

                {/* Administrative team  */}

                <div className="lg:flex bg-sky-700 shadow p-3 mb-5 gap-5">
                  <div className="flex justify-center items-center">
                    <a href="/administrative">
                      <img
                        src={administrative}
                        alt=""
                        className="lg:h-28 lg:w-[200px] w-full mb-3"
                      />
                    </a>
                  </div>
                  <div className="lg:w-[75%]">
                    <a href="/administrative">
                      <p className="lg:text-xl text-white">
                        Administrative Team
                      </p>

                      <p className="my-3 text-white text-justify">
                        Research agendas focused on issues that are highly
                        significant for organisations.It tries to promote human
                        brotherhood, socio-economic justice and the well-being
                        of all through an integrated role
                      </p>
                    </a>
                  </div>
                </div>

                {/* Scholar team s  */}

                <div className="lg:flex bg-sky-700 p-3 mb-5 gap-5">
                  <div className="flex justify-center items-center">
                    <a href="/scholar">
                      <img
                        src={scholar}
                        alt=""
                        className="lg:h-28 lg:w-[200px] md:w-[720px] w-[400px] mb-3"
                      />
                    </a>
                  </div>
                  <div className="lg:w-[75%]">
                    <a href="/scholar">
                      <p className="lg:text-xl text-white">Visiting Scholar</p>
                      <p className="my-3 text-white text-justify">
                        Our goal is to achieve real-world results for our
                        partners in in business, government.A Shariah-compliant
                        insurance that can be renewed online. DISCOVER. A
                        Shariah-compliant motor insurance plan
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Main content end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
