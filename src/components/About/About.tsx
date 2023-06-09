import { motion } from "framer-motion";
import image from "../../assets/myimg.png";
import Wrapper from "../Wrapper/wrapper";

function About() {
  return (
    <section className="mt-24 ">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
          ABOUT ME
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="w-full py-4 bg-[color:var(--color-primary)] mt-20 relative">
        <Wrapper>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12">
            <motion.div
              className="w-48 bg-white border-8 border-white rounded-full sm:w-64 aspect-square"
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
            <div className="flex flex-col items-center justify-center gap-4 tracking-wide text-white text-md w-[60%]">
              <p>
                Hi, I'm Vicky Gupta. I'm a self-taught, passionate full-stack
                web developer from Delhi, India. I'm currently a B.Tech student
                in Computer Engineering at Jamia Millia Islamia.
              </p>
              <p>
                I enjoy the challenges of competitive programming, which has
                sharpened my critical thinking and coding skills. I have a max
                rating of 1600 on Codeforces and 2217 on Leetcode. These
                experiences have enabled me to tackle complex tasks with
                confidence.
              </p>
              <p>
                In 2022, my team and I were fortunate to be finalists in the
                Smart India Hackathon (SIH). We collaborated with talented
                individuals from diverse backgrounds to develop innovative
                solutions that showcased our creativity and technical abilities.
              </p>
            </div>
          </div>
        </Wrapper>
        <div className="absolute -top-16 w-[110%] -z-10 -translate-x-5 h-24 bg-[--color-primary] rotate-3 mt-6"></div>
        <div className="absolute -bottom-12 w-[110%] -z-10 -translate-x-5 h-24 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default About;
