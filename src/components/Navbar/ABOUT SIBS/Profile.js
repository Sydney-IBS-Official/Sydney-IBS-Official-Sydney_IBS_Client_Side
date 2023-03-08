import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import about from "../../../Carosel/Asset/About-Us.jpg";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto  lg:mb-16 lg:mt-7 ">
        <div className="lg:mx-[110px] shadow ">
          <div className="">
            <div className=" lg:w-full    ">
              <div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
                {/* breadcrumb added here */}

                <div className="text-md breadcrumbs md:px-6   ">
                  <ul className="text-sky-700 ">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="h-6 w-4 px-1  "
                        ></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <p>About Us</p>
                    </li>
                    <li>
                      <p className="text-black"> Profile | Vision & Mission</p>
                    </li>
                  </ul>

                  {/* breadcrumb ended  */}
                </div>

                {/* About Us summary */}

                <div className=" w-full flex flex-wrap mb-5 justify-center items-center lg:mt-5">
                  <div className="lg:w-[25%]  lg:mr-12  ">
                    <div className="flex justify-center sm:w-full ">
                      <img
                        src={about}
                        alt=""
                        className="lg:h-[200px] lg:w-[320px] border-2   h-20  min-w-[250px] mt-4 "
                      />
                    </div>
                  </div>

                  <div className="lg:w-[70%]   border-gray-400 ">
                    <div className="     ">
                      <h1 className="text-sky-700 text-xl   font-bold  mt-2 ml-[200px] ">
                        About Us
                      </h1>
                      <p className="  font-sans text-justify  ">
                        Sydney Islamic Business School (Sydney IBS) is the first
                        Islamic higher education institution in Australia,
                        committed to providing excellent education in Islamic
                        business and becoming a leading teaching and
                        research-focused business school. Our vision is to equip
                        our graduates with the necessary knowledge and skills to
                        contribute towards building an inclusive and sustainable
                        global economy. We offer degree programs at various
                        academic levels including doctoral, masters, and
                        graduate diploma programs in the fields of Islamic
                        Accounting, Islamic Banking and Finance, Islamic
                        Business Information Systems, Islamic Business Law,
                        Islamic Economics, Islamic Innovation and
                        Entrepreneurship, Islamic Insurance, Islamic Management,
                        and Islamic Marketing
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sibs mission  */}

                <div className="  ">
                  <h1 className="text-sky-700 text-xl font-bold flex justify-center  mt-2  ">
                    Our Mission
                  </h1>

                  <p className="text-justify mt-3 ">
                    At Sydney IBS, our mission is to provide exceptional Islamic
                    business education to our students, preparing them to become
                    leaders in their respective fields. We are guided by Islamic
                    principles in all our academic activities, curricula, and
                    organisational practices, ensuring compliance with the high
                    standards of the Australian Higher Education Legal Framework
                    while incorporating Islamic values and ethics into all
                    aspects of our operations
                  </p>
                  <p className=" text-justify mt-3 ">
                    We are committed to interdisciplinary research in Islamic
                    business and finance that draws on insights from various
                    fields such as acounting, economics, law, management, and
                    finance. We support research that contributes to the
                    development of Islamic finance and business practices in the
                    wider economic and social context.
                  </p>
                  <p className="text-justify mt-3 ">
                    We encourage entrepreneurship and innovation in Islamic
                    business and finance, and our Islamic Business Incubator
                    provides support for students and alumni who wish to start
                    their own businesses that promote sustainable development.
                  </p>
                  <p className="text-justify mt-3 ">
                    We are committed to promoting ethical business practices,
                    social responsibility, and sustainability. Our curriculum
                    emphasises these values, and we encourage our students to be
                    agents of positive change in their communities and
                    workplaces.
                  </p>
                </div>

                {/* sibs Principles */}

                <div className=" w-full ">
                  <h1 className="text-sky-700 text-xl font-bold  flex justify-center  mt-3">
                    Our 5 Principles
                  </h1>

                  <p className=" text-center my-5 mt-3 ">
                    Sydney Islamic Business School principles guide all aspects
                    of our academic and organisational practices. Our principles
                    include:
                  </p>
                </div>
                <div className=" ">
                  <div className=" w-full  grid lg:grid-cols-3 grid-cols-1 gap-5">
                    <div className=" card max-w-sm lg:w-96 bg-base-100 shadow-xl ">
                      <div className="p-5">
                        <p className="font-bold flex justify-center">
                          Islamic values and ethics
                        </p>
                        <p className="text-justify">
                          We are committed to upholding Islamic values and
                          ethics in all our academic activities and operations.
                          This includes ensuring compliance with the high
                          standards of the Australian Higher Education Legal
                          Framework while incorporating Islamic values and
                          ethics into all aspects of its operations. The
                          school's syllabus is curated with inputs from renowned
                          Islamic business academia and industry experts from
                          around the world.
                        </p>
                      </div>
                    </div>
                    <div className=" card max-w-xs lg:w-96  bg-base-100 shadow-xl">
                      <div className="p-5">
                        <p className="font-bold flex justify-center">
                          Academic excellence
                        </p>
                        <p className="text-justify">
                          We strive for academic excellence in all our programs
                          and curricula, ensuring that our graduates are
                          equipped with the necessary knowledge and skills to
                          excel in their respective fields. Our curricula are on
                          par with top Islamic business schools worldwide. Our
                          faculty fosters innovation and collaboration
                          continually improving our programs and curricula to
                          meet the needs of our students and the industry.
                        </p>
                      </div>
                    </div>
                    <div className=" card  max-w-sm lg:w-96 bg-base-100 shadow-xl">
                      <div className="p-5">
                        <p className="font-bold flex justify-center">
                          Research and scholarship
                        </p>
                        <p className="text-justify">
                          We support interdisciplinary research in Islamic
                          business and finance, contributing to the development
                          of Islamic finance and business practices in the wider
                          economic and social context. We encourage our faculty
                          and students to engage in research that addresses
                          real-world problems and has practical implications for
                          the industry and society
                        </p>
                      </div>
                    </div>
                    <div className=" card  max-w-sm lg:w-96 bg-base-100 shadow-xl">
                      <div className="p-5 my-3">
                        <p className="font-bold flex justify-center">
                          Diversity and inclusivity
                        </p>
                        <p className="text-justify mt-4">
                          We welcome students from all backgrounds and cultures
                          to our diverse and inclusive community, where everyone
                          is valued and respected. We are committed to creating
                          a safe and supportive learning and working environment
                          that promotes mutual respect,
                          understanding, and inclusivity
                        </p>
                      </div>
                    </div>
                    <div className=" card max-w-sm lg:w-96 bg-base-100 shadow-xl">
                      <div className=" card-body">
                        <p className="font-bold">Social responsibility</p>
                        <p className="text-justify">
                          We are committed to promoting ethical business
                          practices, social responsibility, and sustainability
                          in all our academic and organisational activities. We
                          emphasise the importance of these values to our
                          students and faculty and encourage them to be agents
                          of positive change in their
                          communities and workplaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sibs strategy */}

                <div className=" w-full  mb-5 mt-16">
                  <h1 className="text-white rounded-md text-xl font-bold  flex justify-center  mt-3">
                    <span className="bg-[#336AA1] p-2"> Our Strategy</span>
                  </h1>

                  <p className="text-justify mt-5 mb-10  ">
                    At Sydney Islamic Business School, we are committed to
                    unlocking the potential of business by developing powerful
                    ideas, purpose-driven leaders, and a community dedicated to
                    making a positive impact. Our strategy is focused on the
                    following key areas:
                  </p>
                </div>
                <div className="lg:w-full flex ">
                  <div className="w-2/6 mr-12 my-auto ">
                    <img src={about} alt="" />
                  </div>
                  <div className="lg:w-4/6">
                    <p className="text-justify ">
                      Innovative Solutions: We will be thought leaders who put
                      our ideas into action to tackle some of the world's most
                      important challenges. We will conduct rigorous research
                      that informs the most important conversations in Islamic
                      business and finance, such as the future of Islamic
                      banking, halal industry, and entrepreneurship in the
                      world. We will work with leading companies to apply our
                      ideas and create positive change in society.
                    </p>
                    <p className="text-justify my-4">
                      Ethical Leadership: We will develop ethical leaders who
                      make a positive difference. Our action-based learning
                      curricula connect students to real-world business
                      experiences with Islamic values and ethics at the core.
                      Our centres of excellence in leadership and positive
                      organisations allow students to discover a deep sense of
                      purpose. Our Islamic Business Incubator will help students
                      launch successful startups that promote sustainable
                      development.
                    </p>
                    <p className="text-justify">
                      Entrepreneurship and Innovation:We will encourage
                      entrepreneurship and innovation in Islamic business and
                      finance. Our Islamic Business Incubator will provide
                      support for students and alumni who wish to start their
                      own businesses that promote sustainable development. We
                      will work with startups, social enterprises, and other
                      organiaations to drive innovation and support sustainable
                      growth in the Islamic economy.
                    </p>
                    <p className="text-justify my-4">
                      Positive Impact: We are making important contributions to
                      the global impact economy. Our community partners with
                      organisations to solve real-world challenges, generate
                      prosperity, and create a positive impact. We provide
                      consulting support to small businesses and non-profits
                      through initiatives that promote ethical business
                      practices, social responsibility, and sustainability.
                      Faculty and students have also played a critical role in
                      developing Islamic finance and business practices that
                      contribute to the wider economic and social context.
                    </p>
                    <p className="text-justify">
                      <span className="font-bold">
                        Expanding partnerships and collaborations:
                      </span>{' '}
                      We seek to establish partnerships and collaborations with
                      industry, government, and academic institutions locally
                      and internationally, to enhance our research and academic
                      programs, and create opportunities for our students and
                      faculty to engage in global academic and industry
                      networks.
                    </p>
                  </div>
                </div>
                <p className="  text-justify mt-3  ">
                  By focusing on these key areas, we will continue to fulfill
                  our mission of providing exceptional Islamic business
                  education to our students, preparing them to become leaders in
                  their respective fields and promoting positive change in
                  society.
                </p>
              </div>
            </div>
          </div>

          {/* MAin content Added */}

          <div className="lg:mx-[110px] pb-10">
            {/* Academic Structure */}
            {/* <div className="flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
              <div className="">
                <a href="/AcademicStructure">
                  <img
                    src={academics}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="/AcademicStructure" className="text-2xl text-white">
                  Academic Structure
                </a>

                <p className="mb-3 text-white mt-5 text-justify">
                  Sydney IBS is Australia's top university and ranked in the top
                  30 globally.Islamic banking, Islamic finance, or
                  Sharia-compliant finance is banking or financing activity that
                  complies with Sharia and its .
                </p>
              </div>
            </div> */}

            {/* Governance Structure */}
            {/* <div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
              <div className="">
                <a href="/LeadershipGovernence">
                  <img
                    src={governanceBody}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="/LeadershipGovernence">
                  <p className="text-2xl mb-5 text-white">
                    Governance Structure
                  </p>

                  <p className="mb-3 text-white text-justify">
                    Research agendas focused on issues that are highly
                    significant for organisations.It tries to promote human
                    brotherhood, socio-economic justice and the well-being of
                    all through an integrated role
                  </p>
                </a>
              </div>
            </div> */}

            {/* Our Facilities */}

            {/* <div className="flex bg-sky-700 p-3 mb-5 gap-5">
              <div className="">
                <a href="#">
                  <img
                    src={mosque}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="#">
                  <p className="text-2xl text-white mb-5">Our Facilities</p>
                  <p className="mb-3 text-white text-justify">
                    Our goal is to achieve real-world results for our partners
                    in in business, government.A Shariah-compliant insurance
                    that can be renewed online. DISCOVER. A Shariah-compliant
                    motor insurance plan
                  </p>
                </a>
              </div>
            </div> */}

            {/* Our People */}

            {/* <div className="flex bg-sky-700 p-3 mb-5 gap-5">
              <div>
                <a href="#">
                  <img
                    src={staff}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="/people">
                  <p className="text-2xl text-white  mb-5">Our People</p>
                  <p className="mb-3 text-white text-justify">
                    When it comes to producing employable graduates, Sydney IBS
                    is number 1.International business relates to any situation
                    where the production or distribution of goods or services
                  </p>
                </a>
              </div>
            </div> */}

            {/* Academic Collaborations */}

            {/* <div className="flex bg-sky-700 p-3 mb-5 gap-5">
              <div className="">
                <a href="#">
                  <img
                    src={collaborate}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="#">
                  <p className="text-2xl mb-5 text-white">
                    Academic Collaborations
                  </p>
                  <p className="mb-3 text-white text-justify">
                    Our goal is to achieve real-world results for our partners
                    in in business, government.Management is the coordination
                    and administration of tasks to achieve a goal. Such
                    administration activities
                  </p>
                </a>
              </div>
            </div> */}

            {/* Industry Engagement */}

            {/* <div className="flex bg-sky-700 p-3 mb-5 gap-5">
              <div className="">
                <a href="#">
                  <img
                    src={engagement}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="#">
                  <p className="text-2xl  mb-5 text-white">
                    Industry Engagement
                  </p>
                  <p className="mb-3 text-white text-justify">
                    Sydney IBS has been named the 16th most international
                    university in the world .Shariah restrictions on certain
                    financial and trade transactions is the raison d’être for
                    the emergence of
                  </p>
                </a>
              </div>
            </div> */}

            {/* Accreditation */}

            {/* <div className="flex bg-sky-700 p-3 mb-5 gap-5">
              <div>
                <a href="#">
                  <img
                    src={accrediation}
                    alt=""
                    className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
                  />
                </a>
              </div>
              <div className="w-[75%]">
                <a href="#">
                  <p className="text-2xl text-white  mb-5">Accreditation</p>
                  <p className="mb-3 text-white text-justify">
                    When it comes to producing employable graduates, Sydney IBS
                    is number 1.International business relates to any situation
                    where the production or distribution of goods or services
                  </p>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
