import { Link } from "react-router-dom";
import CODING_PROFILES from "../../constant/codingProfiles";
import Tooltip from "../UI/Tooltip";
import Wrapper from "../Wrapper/wrapper";

import college from "../../assets/Education/jmi.webp";
import school from "../../assets/Education/oxford.png";
import { MdSchool } from "react-icons/md";
import { FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="pt-24">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
          ABOUT ME
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="w-full py-12 bg-[color:var(--color-primary)] mt-24 relative pb-24 md:pb-16">
        <Wrapper className="flex flex-col items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 tracking-wide text-white text-md sm:w-[60%] ">
              <p className="text-[1.1rem]">
                Hi, I'm Vicky Gupta. I'm a self-taught, passionate full-stack
                web developer from Delhi, 🇮🇳India. I'm currently a B.Tech
                student in Computer Engineering at Jamia Millia Islamia.
              </p>
              <p className="text-[1.1rem]">
                I enjoy the challenges of competitive programming, which has
                sharpened my critical thinking and coding skills. These
                experiences have enabled me to tackle complex tasks with
                confidence.
              </p>
            </div>
            <div className="  absolute md:static -bottom-[12rem] md:mt-8 text-[color:var(--primary-text-color)]  flex gap-2 flex-col w-3/5 min-w-[22rem]">
              <div className="flex flex-col items-center justify-center px-8 mb-4 header">
                <h1 className="flex gap-2 mb-2 text-3xl font-bold text-center text-white">
                  CODING PROFILES <FaCode className="text-4xl"/>
                </h1>
                <div className="h-[0.30rem] w-10 bg-white rounded-full"></div>
              </div>
              <div className="flex items-center justify-around w-full gap-12 px-6 py-6 bg-white rounded-lg shadow-lg shadow-gray-300 md:shadow-cyan-500">
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
            <div className="flex flex-col items-center justify-center px-8 mt-8 mb-4 header">
              <h1 className="flex gap-2 mb-2 text-3xl font-bold text-center text-white">
                EDUCATION <MdSchool className="text-4xl"/>
              </h1>
              <div className="h-[0.30rem] w-10 bg-white rounded-full"></div>
            </div>
            <div className="left-0 flex flex-col items-center justify-around w-full gap-8 mb-4 md:items-start md:flex-row md:absolute -bottom-52">
              <div className="p-6 px-7 text-[color:var(--primary-text-color)] bg-white rounded-lg shadow-lg shadow-cyan-500 md:shadow-gray-300 hover:-translate-y-3 duration-1000 hover:duration-500 ">
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
              <div className="p-6 text-[color:var(--secondary-text-color)] bg-white rounded-lg shadow-lg shadow-cyan-500 md:shadow-gray-300 flex  gap-4 md:mt-6 hover:-translate-y-3 duration-1000 hover:duration-500 ">
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
          </div>
        </Wrapper>
        <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
        <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default About;
