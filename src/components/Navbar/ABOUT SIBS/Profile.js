import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import about_1 from '../../../Carosel/Asset/About Us/About-Us.jpg';
import mission from '../../../Carosel/Asset/About Us/mission.png';
import principles from '../../../Carosel/Asset/About Us/about.jpg';
import strategy from '../../../Carosel/Asset/strategy.jpg';

const Profile = () => {
  return (
    <>
      <div className="container mx-auto  lg:mb-16 lg:mt-7 ">
        <div className="lg:mx-[110px]  ">
          <div className="shadow">
            <div className=" lg:w-full    ">
              <div className=" bg-gray-100 lg:px-8  py-3   ">
                {/* breadcrumb added here */}

                <div className="text-md breadcrumbs md:px-6  mx-6 ">
                  <ul className="text-sky-700  border-b-4 border-sky-700">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="h-6 w-4 px-1  "
                        ></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <p className="">About Us</p>
                    </li>
                    <li>
                      <p className="text-black "> Profile | Vision & Mission</p>
                    </li>
                  </ul>

                  {/* breadcrumb ended  */}
                </div>

                {/* About Us summary */}

                <div className="lg:w-full  mt-5   mx-12">
                  <span className=" text-xl font-bold text-primary  ">
                    About Us
                  </span>
                </div>

                <div>
                  <div className=" w-full container lg:flex lg:flex-row sm:flex sm:flex-col-reverse px-12  ">
                    <div className="lg:w-full  border-gray-400 lg:mr-10  ">
                      <div className="sm:mt-3">
                        <p className=" text-justify ">
                          Sydney Islamic Business School (Sydney IBS) is the
                          first Islamic higher education institution in
                          Australia, committed to providing excellent education
                          in Islamic business and becoming a leading teaching
                          and research-focused business school. Our vision is to
                          equip our graduates with the necessary knowledge and
                          skills to contribute towards building an inclusive and
                          sustainable global economy. We offer degree programs
                          at various academic levels including doctoral,
                          masters, and graduate diploma programs in the fields
                          of Islamic Accounting, Islamic Banking and Finance,
                          Islamic Business Information Systems, Islamic Business
                          Law, Islamic Economics, Islamic Innovation and
                          Entrepreneurship, Islamic Insurance, Islamic
                          Management, and Islamic Marketing.
                        </p>
                        <div className="lg:w-full  mt-5  mb-3 ">
                          <p className="font-bold text-xl text-primary">
                            <span className=" text-primary ">Our Mission</span>
                          </p>
                        </div>
                        <p className=" text-justify ">
                          At Sydney IBS, our mission is to provide exceptional
                          Islamic business education to our students, preparing
                          them to become leaders in their respective fields. We
                          are guided by Islamic principles in all our academic
                          activities, curricula, and organisational practices,
                          ensuring compliance with the high standards of the
                          Australian Higher Education Legal Framework while
                          incorporating Islamic values and ethics into all
                          aspects of our operations.
                        </p>
                        <p className=" text-justify mt-1">
                          We are committed to interdisciplinary research in
                          Islamic business and finance that draws on insights
                          from various fields such as acounting, economics, law,
                          management, and finance. We support research that
                          contributes to the development of Islamic finance and
                          business practices in the wider economic and social
                          context.
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-4/6  flex justify-center    ">
                      <img
                        src={about_1}
                        className=" md:h-[400px]  w-full md:mt-3"
                        alt=""
                        // className="h-52 w-[350px]  "
                      />
                    </div>
                  </div>
                </div>

                {/* sibs Principles */}
                <div className="w-full">
                  {/* <div className="lg:w-full text-justify mt-5 mb-3 mx-12">
                    <p className="font-bold text-xl text-primary ">
                      Our  Principles
                    </p>
                    <p className="text-justify my-3 ">
                      Sydney Islamic Business School principals guide all
                      aspects of our academic and organizational practices. Our
                      principles include.
                    </p>
                  </div> */}

                  {/* <div className="w-full  px-12 lg:flex">
                    <div className="lg:w-3/6 mr-12 md:w-full flex justify-center    ">
                      <img
                        src={principles}
                        className=" md:h-[400px] sm:h-[200px]  w-full md:mt-3"
                        alt=""
                        
                      />
                    </div>
                    <div className=" w-full ">
                      <p className="text-justify ">
                        Sydney Islamic Business School principals guide all
                        aspects of our academic and organizational practices.
                        Our principles include.
                      </p>
                      <p className="text-justify ">
                        {' '}
                        <span className="font-bold ">
                          Islamic values and ethics:
                        </span>{' '}
                        We are committed to upholding Islamic values and ethics
                        in all our academic activities and operations. This
                        includes ensuring compliance with the high standards of
                        the Australian Higher Education Legal Framework while
                        incorporating Islamic values and ethics into all aspects
                        of its operations. The school's syllabus is curated with
                        inputs from renowned Islamic business academia and
                        industry experts from around the world.
                      </p>
                      <p className="text-justify mt-1 ">
                        {' '}
                        <span className="font-bold ">
                          Academic excellence:{' '}
                        </span>
                        We strive for academic excellence in all our programs
                        and curricula, ensuring that our graduates are equipped
                        with the necessary knowledge and skills to excel in
                        their respective fields. Our curricula are on par with
                        top Islamic business schools worldwide. Our faculty
                        fosters innovation and collaboration continually
                        improving our programs and curricula to meet the needs
                        of our students and the industry.
                      </p>
                      <p className="text-justify ">
                        <span className="font-bold ">
                          Research and scholarship:
                        </span>{' '}
                        We support interdisciplinary research in Islamic
                        business and finance, contributing to the development of
                        Islamic finance and business practices in the wider
                        economic and social context. We encourage our faculty
                        and students to engage in research that addresses
                        real-world problems and has practical implications for
                        the industry and society.
                      </p>
                      <p className="text-justify my-2 ">
                        <span className="font-bold ">
                          Diversity and inclusivity:
                        </span>{' '}
                        We welcome students from all backgrounds and cultures to
                        our diverse and inclusive community, where everyone is
                        valued and respected. We are committed to creating a
                        safe and supportive learning and working environment
                        that promotes mutual respect, understanding, and
                        inclusivity.
                      </p>
                      <p className="text-justify ">
                        <span className="font-bold ">
                          Social responsibility:
                        </span>{' '}
                        Social responsibility: We are committed to promoting
                        ethical business practices, social responsibility, and
                        sustainability in all our academic and organisational
                        activities. We emphasise the importance of these values
                        to our students and faculty and encourage them to be
                        agents of positive change in their communities and
                        workplaces.
                      </p>
                    </div>
                  </div>
                  <div className=""></div> */}
                  <div className="lg:mx-auto lg:mt-5  pb-2">
                    <div className="w-50 text-xl  font-bold cursor-pointer   text-center">
                      <button className="bg-sky-700  px-10 pb-5 pt-5 ">
                        <p className=" text-white  "> Our 6 Principles</p>
                      </button>
                    </div>

                    {/* Overview main content start */}
                    <div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 px-7 mb-8">
                      <div class=" hover:bg-sky-300  bg-sky-700 p-5">
                        {/* Research areas */}
                        <div className="">
                          <div className="items-center w-full text-center ">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#ethics">
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Islamic values and ethics
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Program structure */}
                      <div class=" hover:bg-sky-300 bg-sky-700 p-5">
                        <div className="">
                          <div className="items-center w-full text-center ">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#structure">
                              {' '}
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Academic excellence
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Admission requirements */}
                      <div class=" hover:bg-sky-300 bg-sky-700 p-5">
                        <div className="">
                          <div className="items-center w-full text-center ">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="
								text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#Admission">
                              {' '}
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Research and scholarship
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Course outcomes */}
                      <div class=" hover:bg-sky-300 bg-sky-700 p-5">
                        <div className="">
                          <div className="items-center w-full text-center">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#outcome">
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Diversity and inclusivity
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Fees | Scholarship */}
                      <div class=" hover:bg-sky-300 bg-sky-700 p-5">
                        <div className="">
                          <div className="items-center w-full text-center ">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#Fees">
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Social responsibility
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Application Process */}
                      <div class=" hover:bg-sky-300 bg-sky-700 p-5">
                        <div className="">
                          <div className="items-center w-full text-center ">
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className="text-white"
                            ></FontAwesomeIcon>
                          </div>
                          <div className="">
                            <a href="#Application">
                              <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                                Entrepreneurship and Innovation
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Application Process end*/}
                    </div>
                    <div className="px-12  ">
                      <div id="ethics">
                        <p className="text-justify">
                          {' '}
                          <span className="font-bold text-md ">
                            Islamic values and ethics:
                          </span>{' '}
                          We are committed to upholding Islamic values and
                          ethics in all our academic activities and operations.
                          This includes ensuring compliance with the high
                          standards of the Australian Higher Education Legal
                          Framework while incorporating Islamic values and
                          ethics into all aspects of its operations. The
                          school's syllabus is curated with inputs from renowned
                          Islamic business academia and industry experts from
                          around the world.
                        </p>
                      </div>
                      <p className="text-justify mt-1 ">
                        {' '}
                        <span className="font-bold ">
                          Academic excellence:{' '}
                        </span>
                        We strive for academic excellence in all our programs
                        and curricula, ensuring that our graduates are equipped
                        with the necessary knowledge and skills to excel in
                        their respective fields. Our curricula are on par with
                        top Islamic business schools worldwide. Our faculty
                        fosters innovation and collaboration continually
                        improving our programs and curricula to meet the needs
                        of our students and the industry.
                      </p>
                      <p className="text-justify ">
                        <span className="font-bold ">
                          Research and scholarship:
                        </span>{' '}
                        We support interdisciplinary research in Islamic
                        business and finance, contributing to the development of
                        Islamic finance and business practices in the wider
                        economic and social context. We encourage our faculty
                        and students to engage in research that addresses
                        real-world problems and has practical implications for
                        the industry and society.
                      </p>
                      <p className="text-justify my-2 ">
                        <span className="font-bold ">
                          Diversity and inclusivity:
                        </span>{' '}
                        We welcome students from all backgrounds and cultures to
                        our diverse and inclusive community, where everyone is
                        valued and respected. We are committed to creating a
                        safe and supportive learning and working environment
                        that promotes mutual respect, understanding, and
                        inclusivity.
                      </p>
                      <p className="text-justify ">
                        <span className="font-bold ">
                          Social responsibility:
                        </span>{' '}
                        We are committed to promoting ethical business
                        practices, social responsibility, and sustainability in
                        all our academic and organisational activities. We
                        emphasise the importance of these values to our students
                        and faculty and encourage them to be agents of positive
                        change in their communities and workplaces.
                      </p>
                      <p className="text-justify ">
                        <span className="font-bold ">
                          Entrepreneurship and Innovation:
                        </span>{' '}
                        We will encourage entrepreneurship and innovation in
                        Islamic business and finance. Our Islamic Business
                        Incubator will provide support for students and alumni
                        who wish to start their own businesses that promote
                        sustainable development. We will work with startups,
                        social enterprises, and other organisations to drive
                        innovation and support sustainable growth in the Islamic
                        economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:mx-10 pb-10 px-10">
                <div className="lg:w-full  mb-2   ">
                  <p className="font-bold text-xl text-primary">
                    <span className=" text-primary ">Our Strategy</span>
                  </p>
                </div>
                <p className=" text-justify mb-5 ">
                  At Sydney Islamic Business School, we are committed to
                  unlocking the potential of business by developing powerful
                  ideas, purpose-driven leaders, and a community dedicated to
                  making a positive impact. Our strategy is focused on the
                  following key areas:
                </p>
                {/* Innovative Solutions */}
                <div className="flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
                  <div className="flex items-center">
                    <a href="/AcademicStructure">
                      <img
                        src={about_1}
                        alt=""
                        className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                      />
                    </a>
                  </div>
                  <div className="w-[75%]">
                    <a href="/AcademicStructure" className="text-xl text-white">
                      Innovative Solutions
                    </a>

                    <p className="mb-3 text-white mt-3 text-justify">
                      We will be thought leaders who put our ideas into action
                      to tackle some of the world's most important challenges.
                      We will conduct rigorous research that informs the most
                      important conversations in Islamic business and finance,
                      such as the future of Islamic banking, halal industry, and
                      entrepreneurship in the world. We will work with leading
                      companies to apply our ideas and create positive change in
                      society.
                    </p>
                  </div>
                </div>

                {/* Ethical Leadership*/}
                <div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
                  <div className="flex items-center">
                    <a href="/LeadershipGovernence">
                      <img
                        src={about_1}
                        alt=""
                        className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                      />
                    </a>
                  </div>
                  <div className="w-[75%]">
                    <a href="/LeadershipGovernence">
                      <p className="text-xl mb-3 text-white">
                        Ethical Leadership
                      </p>

                      <p className="mb-3 text-white text-justify">
                        We will develop ethical leaders who make a positive
                        difference. Our action-based learning curricula connect
                        students to real-world business experiences with Islamic
                        values and ethics at the core. Our centres of excellence
                        in leadership and positive organisations allow students
                        to discover a deep sense of purpose. Our Islamic
                        Business Incubator will help students launch successful
                        startups that promote sustainable development.
                      </p>
                    </a>
                  </div>
                </div>

                {/* Entrepreneurship and Innovation */}

                <div className="flex bg-sky-700 p-3 mb-5 gap-5">
                  <div className="flex items-center">
                    <a href="#">
                      <img
                        src={about_1}
                        alt=""
                        className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                      />
                    </a>
                  </div>
                  <div className="w-[75%]">
                    <a href="#">
                      <p className="text-xl text-white mb-3">
                        Entrepreneurship and Innovation
                      </p>
                      <p className="mb-3 text-white text-justify">
                        We will encourage entrepreneurship and innovation in
                        Islamic business and finance. Our Islamic Business
                        Incubator will provide support for students and alumni
                        who wish to start their own businesses that promote
                        sustainable development. We will work with startups,
                        social enterprises, and other organisations to drive
                        innovation and support sustainable growth in the Islamic
                        economy.
                      </p>
                    </a>
                  </div>
                </div>

                {/*   Positive Impact */}

                <div className="flex bg-sky-700 p-3 mb-5 gap-5">
                  <div className="flex items-center">
                    <a href="#">
                      <img
                        src={about_1}
                        alt=""
                        className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                      />
                    </a>
                  </div>
                  <div className="w-[75%]">
                    <a href="/people">
                      <p className="text-xl text-white  mb-3">
                        Positive Impact
                      </p>
                      <p className="mb-3 text-white text-justify">
                        We are making important contributions to the global
                        impact economy. Our community partners with
                        organisations to solve real-world challenges, generate
                        prosperity, and create a positive impact. We provide
                        consulting support to small businesses and non-profits
                        through initiatives that promote ethical business
                        practices, social responsibility, and sustainability.
                        Faculty and students have also played a critical role in
                        developing Islamic finance and business practices that
                        contribute to the wider economic and social context.
                      </p>
                    </a>
                  </div>
                </div>

                {/*     Expanding partnerships and collaborations */}

                <div className="flex bg-sky-700 p-3 mb-5 gap-5">
                  <div className="flex items-center">
                    <a href="#">
                      <img
                        src={about_1}
                        alt=""
                        className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                      />
                    </a>
                  </div>
                  <div className="w-[75%]">
                    <a href="#">
                      <p className="text-xl mb-3 text-white">
                        Expanding partnerships and collaborations
                      </p>
                      <p className="mb-3 text-white text-justify">
                        We seek to establish partnerships and collaborations
                        with industry, government, and academic institutions
                        locally and internationally, to enhance our research and
                        academic programs, and create opportunities for our
                        students and faculty to engage in global academic and
                        industry networks.
                      </p>
                    </a>
                  </div>
                </div>
                <p>
                  By focusing on these key areas, we will continue to fulfill
                  our mission of providing exceptional Islamic business
                  education to our students, preparing them to become leaders in
                  their respective fields and promoting positive change in
                  society.
                </p>
              </div>

              {/* Sibs strategy */}
              {/* <div className="full mt-5 mb-3 mx-20">
                <p className="font-bold text-xl text-primary ">Our Strategy</p>
              </div>

              <div className=" lg:flex px-20">
                <div className=" w-full  lg:mr-10">
                  <p className="text-justify  ">
                    {' '}
                    At Sydney Islamic Business School, we are committed to
                    unlocking the potential of business by developing powerful
                    ideas, purpose-driven leaders, and a community dedicated to
                    making a positive impact. Our strategy is focused on the
                    following key areas:
                  </p>
                  <p className="text-justify mt-1 ">
                    {' '}
                    <span className="font-bold ">Innovative Solutions</span>: We
                    will be thought leaders who put our ideas into action to
                    tackle some of the world's most important challenges. We
                    will conduct rigorous research that informs the most
                    important conversations in Islamic business and finance,
                    such as the future of Islamic banking, halal industry, and
                    entrepreneurship in the world. We will work with leading
                    companies to apply our ideas and create positive change in
                    society.
                  </p>
                  <p className="text-justify my-2 ">
                    {' '}
                    <span className="font-bold ">Ethical Leadership:</span>
                    We will develop ethical leaders who make a positive
                    difference. Our action-based learning curricula connect
                    students to real-world business experiences with Islamic
                    values and ethics at the core. Our centres of excellence in
                    leadership and positive organisations allow students to
                    discover a deep sense of purpose. Our Islamic Business
                    Incubator will help students launch successful startups that
                    promote sustainable development.
                  </p>
                  <p className="text-justify ">
                    <span className="font-bold ">
                      Entrepreneurship and Innovation:
                    </span>{' '}
                    We will encourage entrepreneurship and innovation in Islamic
                    business and finance. Our Islamic Business Incubator will
                    provide support for students and alumni who wish to start
                    their own businesses that promote sustainable development.
                    We will work with startups, social enterprises, and other
                    organisations to drive innovation and support sustainable
                    growth in the Islamic economy.
                  </p>
                  <p className="text-justify my-2 ">
                    <span className="font-bold ">Positive Impact:</span> We are
                    making important contributions to the global impact economy.
                    Our community partners with organisations to solve
                    real-world challenges, generate prosperity, and create a
                    positive impact. We provide consulting support to small
                    businesses and non-profits through initiatives that promote
                    ethical business practices, social responsibility, and
                    sustainability. Faculty and students have also played a
                    critical role in developing Islamic finance and business
                    practices that contribute to the wider economic and social
                    context.
                  </p>
                  <p className="text-justify ">
                    <span className="font-bold ">
                      Expanding partnerships and collaborations:
                    </span>{' '}
                    We seek to establish partnerships and collaborations with
                    industry, government, and academic institutions locally and
                    internationally, to enhance our research and academic
                    programs, and create opportunities for our students and
                    faculty to engage in global academic and industry networks.
                  </p>
                  <p className="text-justify mt-2 ">
                    By focusing on these key areas, we will continue to fulfill
                    our mission of providing exceptional Islamic business
                    education to our students, preparing them to become leaders
                    in their respective fields and promoting positive change in
                    society.
                  </p>
                </div>
                <div className="lg:w-3/6 flex justify-center     ">
                  <img
                    src={strategy}
                    className=" md:h-[400px]   w-full md:mt-3"
                    alt=""
                   
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
