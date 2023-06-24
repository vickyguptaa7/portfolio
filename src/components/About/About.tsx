import { motion } from "framer-motion";
import image from "../../assets/myimg.png";
import Wrapper from "../Wrapper/wrapper";

function About() {
  return (
    <section id="about" className="pt-24">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
          ABOUT ME
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="w-full py-12 bg-[color:var(--color-primary)] mt-24 relative">
        <Wrapper className="flex flex-col items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12">
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
            <div className="flex flex-col items-center justify-center gap-4 tracking-wide text-white text-md sm:w-[60%]">
              <p className="text-[1.1rem]">
                Hi, I'm Vicky Gupta. I'm a self-taught, passionate full-stack
                web developer from Delhi, India. I'm currently a B.Tech student
                in Computer Engineering at Jamia Millia Islamia.
              </p>
              <p className="text-[1.1rem]">
                I enjoy the challenges of competitive programming, which has
                sharpened my critical thinking and coding skills. These
                experiences have enabled me to tackle complex tasks with
                confidence.
              </p>
            </div>
          <div className="left-0 flex flex-col items-center justify-between w-full gap-8 mt-6 sm:items-start sm:flex-row sm:absolute -bottom-48">
            <div className="p-4 text-[color:var(--primary-text-color)] bg-white rounded-lg shadow-lg shadow-gray-300 flex flex-col items-end gap-4 max-w-[20rem]">
              <p>“Simplicity is the baddest choice to be the best.”</p>
              <h4 className="text-sm font-light">- vicky gupta</h4>
            </div>
            <div className="p-4 mt-4 text-[color:var(--primary-text-color)] bg-white rounded-lg shadow-lg  shadow-gray-300 flex flex-col items-end gap-4 max-w-[20rem]">
              <p>
                “I know I'm not successful enough, but I’m passionate enough not
                to worry about success.”
              </p>
              <h4 className="text-sm font-light">- vicky gupta</h4>
            </div>
            <div className="absolute sm:static -bottom-40 p-4 mt-8 text-[color:var(--primary-text-color)] bg-white rounded-lg shadow-lg  shadow-gray-300 flex flex-col items-end gap-4 max-w-[20rem]">
              <p>
                “Creativity is the driver of an unstoppable train called
                Passion.”
              </p>
              <h4 className="text-sm font-light">- vicky gupta</h4>
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
