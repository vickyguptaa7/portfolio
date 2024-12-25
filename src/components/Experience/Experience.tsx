import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../Wrapper/wrapper";

const jobsData = [
  {
    title: "Software Development Engineer",
    company: "AlgoSec",
    location: "Hybrid • Gurugram, Haryana, India",
    duration: "June 2024 - Present",
    description:
      "Developed and maintained network security applications, ensuring high performance and scalability. Worked with Java, Kubernetes, and cloud platforms like AWS and Azure.",
  },
  {
    title: "Software Engineer Intern",
    company: "AlgoZenith",
    location: "Remote • New Delhi, India",
    duration: "Aug 2023 - April 2024",
    description:
      "Contributed to educational content for competitive programming. Built tools to improve user experience.",
  },
];

function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section data-section className="pt-24 mt-36" id="projects">
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
          <div className="flex flex-col md:flex-row">
            {/* Tabs */}
            <div className="flex mt-4 mb-6 md:flex-col md:mb-0 md:mr-8">
              {jobsData.map((job, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-left font-mono text-sm cursor-pointer border-l-4 transition-all ${
                    activeTabId === i
                      ? "border-[color:var(--color-primary)] font-bold text-[color:var(--color-primary)] duration-300"
                      : "border-[color:var(--gray-color)] text-gray-400 font-bold hover:text-[color:var(--color-primary)] hover:bg-[color:var(--gray-hover-color)] duration-300"
                  }`}
                  onClick={() => setActiveTabId(i)}
                >
                  {job.company}
                </button>
              ))}
            </div>
            {/* Tab Panels */}
            <div className="flex-1 ">
              {jobsData.map(
                (job, i) =>
                  activeTabId === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-[color:var(--primary-background-color)] shadow-lg shadow-[color:var(--secondary-shadow-color)] rounded-md"
                    >
                      <h3 className="text-xl font-semibold text-[color:var(--tertiary-text-color)]">
                        {job.title}{" "}
                        <span className="text-[color:var(--color-primary)] text-xl">
                          @ {job.company}
                        </span>
                      </h3>
                      <p className="mb-1 text-sm text-gray-400">
                        {job.location}
                      </p>
                      <p className="mb-2 text-sm text-gray-400">
                        {job.duration}
                      </p>
                      <p className="text-[color:var(--tertiary-text-color)]">
                        {job.description}
                      </p>
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
