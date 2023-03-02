import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CurrentStudentsMain from "./CurrentStudentsMain";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const CurrentStudents = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added */}

								<div className="text-md breadcrumbs md:px-6   lg:mx-[55px] ">
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
											<p>Graduate Research</p>
										</li>
										<li>
											<p className="text-black"> Current students</p>
										</li>
									</ul>

									{/* breadcrumb ended */}
								</div>

								{/* Current Students info */}

								<div className="  ">
								<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
										Current Students
									</h1>
									<p className="lg:px-20 px-3 text-justify ">
										Sydney Islamic Business School (Sydney IBS) offers courses
										programs across all disciplines within Islamic Business. The
										PhD program consists of two components– coursework and
										research. Before completing their research, Sydney IBS PhD
										candidates are required to complete 36 units of credit worth
										of coursework units, usually during their first 18 months of
										study, to assist them in completing their dissertation.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* current student main content added */}
					<div className="lg:mt-20 lg:pb-5 px-3">
						<CurrentStudentsMain></CurrentStudentsMain>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentStudents;
