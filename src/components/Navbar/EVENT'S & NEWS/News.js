import React from 'react';
import news_3 from '../../../Carosel/Asset/News/news_3.jpg';
import news_4 from '../../../Carosel/Asset/News/news_4.jpg';
import news_5 from '../../../Carosel/Asset/News/news_5.jpg';
import news_1 from '../../../Carosel/Asset/News/news_1.jpg';
import news_2 from '../../../Carosel/Asset/News/news_2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className="container mx-auto  ">
      <div className="  w-full  ">
        <div
          className="flex flex-col  lg:flex-row  
                    shadow-md bg-base-100 lg:mx-[170px]   "
        >
          <div className="flex flex-col px-2">
            <div className=" lg:w-full    ">
              <div className="  px-3  lg:pb-7 pb-3  ">
                {/* Breadcrumb added */}

                <div className="text-md breadcrumbs lg:mx-6    ">
                  <ul className="text-sky-700 border-b-4 border-sky-700 ">
                    <li>
                      <Link to="/" className="font-semibold text-sky-700">
                        Home
                      </Link>
                    </li>
                    <li>
                      <p>Events & News</p>
                    </li>
                    <li>
                      <p className="text-black"> News</p>
                    </li>
                  </ul>

                  {/* Breadcrumb ended */}

                  <div>
                    <h1 className="text-sky-700 text-xl font-bold mt-5  ">
                      News
                    </h1>
                  </div>

                  {/* News details  */}

                  <div className="  ">
                    <p className="  text-justify mt-3 ">
                      Sydney Islamic Business School (Sydney IBS) offers PhD
                      programs across all disciplines within Islamic Business.
                      The PhD program consists of two components– coursework and
                      research.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* All new's content added here */}

            <div className="lg:mx-6">
              {/* First news   */}

              <div className=" mb-3  p-2  border-b-2    ">
                <div className="lg:flex md:flex gap-5 justify-center items-center ">
                  <img
                    src={news_1}
                    className="max-w-sm lg:w-1/5 md:w-2/5 w-full  px-2 md:h-24"
                  />
                  <div className="p-2">
                    <h1 className="text-xl font-bold ">
                      Lee Sarandopoulos headshot the caravans
                    </h1>
                    <p className="py-3 text-justify">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                </div>
                <p className="text-right  cursor-pointer">
                  <a href="#" className=" text-sky-700 hover:underline">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>

              {/* Second news   */}

              <div className=" mb-3 p-2 border-b-2  ">
                <div className="lg:flex md:flex gap-5 justify-center items-center">
                  <img
                    src={news_2}
                    className="max-w-sm lg:w-1/5 md:w-[43%] w-full  px-2 md:h-24"
                  />
                  <div className="p-2">
                    <h1 className="text-xl font-bold">
                      Safety and financial security for women
                    </h1>
                    <p className="py-3 text-justify">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                </div>
                <p className="text-right  cursor-pointer">
                  <a href="#" className=" text-sky-700 hover:underline">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>

              {/* Third news   */}

              <div className="mb-3 p-2 border-b-2   ">
                <div className="lg:flex md:flex gap-5 justify-center items-center">
                  <img
                    src={news_3}
                    className="max-w-sm lg:w-1/5 md:w-[43%] w-full px-2 md:h-24"
                  />
                  <div className="p-2">
                    <h1 className="text-xl font-bold text-justify">
                      Journal of Mathematical Economics gains ANU expert
                    </h1>
                    <p className="py-3 text-justify">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                </div>
                <p className="text-right  cursor-pointer">
                  <a href="#" className=" text-sky-700 hover:underline">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>

              {/* Fourth news   */}

              <div className=" mb-3 p-2 border-b-2  ">
                <div className="lg:flex md:flex gap-5 justify-center items-center">
                  <img
                    src={news_4}
                    className="max-w-sm lg:w-1/5 md:w-[43%] w-full px-2 md:h-24"
                  />
                  <div className="p-2 ">
                    <h1 className="text-xl font-bold text-justify">
                      2022 Australasian Actuarial Education and Research
                      Symposium
                    </h1>
                    <p className="py-3 text-justify">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                </div>
                <p className="text-right  cursor-pointer">
                  <a href="#" className=" text-sky-700 hover:underline">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>

              {/* Fifth news   */}

              <div className="mb-3 p-2 border-b-2  ">
                <div className="lg:flex md:flex gap-5 justify-center items-center">
                  <img
                    src={news_5}
                    className="max-w-sm lg:w-1/5 md:w-[43%] w-full px-2 md:h-24"
                  />
                  <div className="p-2">
                    <h1 className="text-xl font-bold">
                      CBE Alumni Networking Event{' '}
                    </h1>
                    <p className="py-3 last:text-justify">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                </div>
                <p className="text-right  cursor-pointer">
                  <a href="#" className=" text-sky-700 hover:underline">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
