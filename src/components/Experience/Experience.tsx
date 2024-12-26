import AOS from "aos";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { ExperienceData } from "../../data/expereince";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";
import Wrapper from "../Wrapper/wrapper";

function Experience() {
  const isDarkMode = useRecoilValue(darkModeAtom);
  const [activeTabId, setActiveTabId] = useState(0);
  const navigateToUrl = (url: string) => {
    return window.open(url, "_blank");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-section className="pt-32 mt-36" id="experience">
      <div
        className="flex flex-col items-center justify-center px-8 header"
        data-aos="fade-in"
      >
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
          Where I've Worked
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-12 ">
        <Wrapper>
          <div className="flex flex-col md:flex-row" data-aos="zoom-in-up">
            {/* Tabs */}
            <div className="flex mt-4 mb-6 md:flex-col md:mb-0 md:mr-8">
              {ExperienceData.map((experience, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-left font-mono text-sm cursor-pointer border-l-4 transition-all ${
                    activeTabId === i
                      ? "border-[color:var(--color-primary)] font-bold text-[color:var(--color-primary)] duration-300"
                      : "border-[color:var(--gray-color)] text-gray-400 font-bold hover:text-[color:var(--color-primary)] hover:bg-[color:var(--gray-hover-color)] duration-300"
                  }`}
                  onClick={() => setActiveTabId(i)}
                >
                  {experience.company}
                </button>
              ))}
            </div>
            {/* Tab Panels */}
            <div className="flex-1 ">
              {ExperienceData.map(
                (experience, i) =>
                  activeTabId === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-[color:var(--secondary-background-color)] shadow-lg shadow-[color:var(--secondary-shadow-color)] rounded-xl group"
                    >
                      <h3 className="text-xl font-semibold text-[color:var(--tertiary-text-color)] flex flex-wrap mb-2 sm:mb-0">
                        {experience.title}{" "}
                        <span className="text-[color:var(--color-primary)] text-xl">
                          &nbsp; @ {experience.company}
                        </span>
                        {experience.url && (
                          <span onClick={() => navigateToUrl(experience.url)}>
                            <BsArrowUpShort className="text-xl font-bold cursor-pointer duration-300 rotate-45 -translate-x-2 translate-y-2 ms-1 group-hover:translate-y-0 group-hover:-translate-x-0 group-hover:text-[color:var(--color-primary)]" />
                          </span>
                        )}
                      </h3>
                      <p className="mb-1 text-sm text-[color:var(--secondary-text-color)]">
                        {experience.location}
                      </p>
                      <p className="mb-2 text-sm text-[color:var(--secondary-text-color)]">
                        {experience.duration}
                      </p>
                      <div>
                        {experience.description.map((desc, i) => (
                          <div
                            className="text-[color:var(--quaternary-text-color)] flex leading-7 tracking-wide mb-2"
                            key={i}
                          >
                            <span className="w-4 mt-1 -translate-x-1.5">
                              <MdKeyboardArrowRight className="text-[color:var(--color-primary)] text-xl" />
                            </span>

                            {desc}
                          </div>
                        ))}
                      </div>
                      {experience.certificate && (
                        <div>
                          <div className="text-[color:var(--quaternary-text-color)] flex leading-7 tracking-wide mb-2">
                            <span className="w-4 mt-1 -translate-x-1.5">
                              <MdKeyboardArrowRight className="text-[color:var(--color-primary)] text-xl" />
                            </span>
                            Completion &nbsp;
                            <button
                              className="underline text-[color:var(--color-primary)] cursor-pointer "
                              onClick={() =>
                                navigateToUrl(experience.certificate)
                              }
                            >
                              certificate
                            </button>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-3 mt-4">
                        {experience.techStack.map((technology, i) => (
                          <div
                            className={`text-[color:var(--color-primary)] text-sm px-3 py-1 ${
                              isDarkMode ? "bg-slate-800" : "bg-gray-100"
                            } rounded-full`}
                            key={i}
                          >
                            {technology}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default Experience;
