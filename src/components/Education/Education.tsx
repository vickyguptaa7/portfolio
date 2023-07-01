import { FaCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import CODING_PROFILES from "../../constant/codingProfiles";
import Tooltip from "../UI/Tooltip";

import college from "../../assets/Education/jmi.webp";
import school from "../../assets/Education/oxford.png";

const Education = () => {
  return (
    <>
      {/* Coding Profiles */}
      <div className="absolute md:static -bottom-[12rem] md:mt-8 text-[color:var(--primary-text-color)]  flex gap-2 flex-col w-2/5 min-w-[22rem]">
        <div className="flex flex-col items-center justify-center px-8 mb-4 header">
          <h1 className="flex gap-2 mb-2 text-3xl font-bold tracking-wide text-center text-white whitespace-nowrap">
            CODING PROFILES <FaCode className="text-4xl" />
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--secondary-background-color)] rounded-full"></div>
        </div>
        <div className="flex items-center w-full gap-12 px-4 py-4 bg-[color:var(--secondary-background-color)] rounded-sm shadow-lg justify-evenly shadow-[color:var(--secondary-shadow-color)] md:shadow-[color:var(--primary-shadow-color)]">
          {CODING_PROFILES.map((profile) => {
            return (
              <div
                key={profile.id}
                className="group flex items-center text-sm text-[color:var(--secondary-text-color)] relative"
              >
                <Link to={profile.link} target="_blank">
                  <img
                    src={profile.icon}
                    className="min-w-[30px] max-w-[30px] md:min-w-[36px] md:max-w-[36px] duration-1000 aspect-square hover:scale-125 hover:duration-300 "
                  />
                </Link>
                <Tooltip
                  className="-translate-x-1/2 -bottom-20 left-1/2"
                  title={profile.description}
                />
                {/* <p className="">{profile.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col items-center justify-center px-8 mt-8 mb-4 header">
        <h1 className="flex gap-2 mb-2 text-3xl font-bold tracking-wide text-center text-white">
          EDUCATION <MdSchool className="text-4xl" />
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--secondary-background-color)] rounded-full"></div>
      </div>
      <div className="left-0 flex flex-col items-center justify-around w-full gap-8 mb-4 md:items-start md:flex-row md:absolute -bottom-52">
        <div className="p-6 px-7 text-[color:var(--primary-text-color)] bg-[color:var(--secondary-background-color)] rounded-lg shadow-lg shadow-[color:var(--primary-shadow-color)] md:shadow-[color:var(--secondary-shadow-color)] hover:-translate-y-3 duration-1000 hover:duration-500 ">
          <div className="flex gap-4">
            <img src={college} className="w-20 h-20" alt="" />
            <div className="flex flex-col">
              <h2 className="text-[color:var(--secondary-text-color)] font-[550] text-xl  ">
                Jamia Millia Islamia, New Delhi
              </h2>
              <p className="text-[color:var(--secondary-text-color)]">
                B.Tech, Computer Engineering
              </p>
              <p className="text-right text-[color:var(--secondary-text-color)] text-sm mt-2">
                2020 - Present
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 text-[color:var(--secondary-text-color)] bg-[color:var(--secondary-background-color)] rounded-lg shadow-lg shadow-[color:var(--primary-shadow-color)] md:shadow-[color:var(--secondary-shadow-color)] flex  gap-4 md:mt-6 hover:-translate-y-3 duration-1000 hover:duration-500 ">
          <img src={school} className="w-20 h-20 " alt="" />
          <div className="flex flex-col">
            <h2 className="text-[color:var(--secondary-text-color)] font-[550] text-xl ">
              Oxford Public School, New Delhi
            </h2>
            <p className="text-[color:var(--secondary-text-color)]">
              Intermediate, Science Stream
            </p>
            <p className="text-right text-[color:var(--secondary-text-color)] text-sm mt-2">
              2018 - 2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
