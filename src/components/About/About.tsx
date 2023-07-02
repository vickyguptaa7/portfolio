import Wrapper from "../Wrapper/wrapper";

import { motion } from "framer-motion";
import image from "../../assets/myimg.png";
import { ABOUT_ME } from "../../data/about";
import Education from "../Education/Education";

function About() {
  return (
    <section data-section id="about" className="pt-24">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
          ABOUT ME
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="w-full py-12 bg-[color:var(--color-primary)] mt-24 relative pb-24 md:pb-16">
        <Wrapper className="flex flex-col items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-4">
            {/* About Me */}
            <motion.div
              className="bg-[color:var(--secondary-background-color)] border-4 border-[color:var(--secondary-background-color)] rounded-full w-36 aspect-square"
              initial={{
                translateY: 8,
              }}
              animate={{
                translateY: -8,
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                },
              }}
            >
              <img
                src={image}
                alt=""
                className="flex items-center justify-center object-cover w-full h-full rounded-full"
              />
            </motion.div>
            <div className="flex flex-col items-center justify-center gap-4 tracking-wide text-white text-md sm:w-[60%] ">
              <p className="text-[1.18rem] text-center">{ABOUT_ME.description}</p>
            </div>
            <Education />
          </div>
        </Wrapper>
        <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
        <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default About;
