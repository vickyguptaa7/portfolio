import { Link } from "react-router-dom";
import CONTACTS from "../../constant/contact";
import Wrapper from "../Wrapper/wrapper";

const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-24 ">
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
            GET IN TOUCH
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="w-full py-8 lg:py-16 bg-[color:var(--color-primary)] mt-24 relative ">
          <Wrapper className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row-reverse">
            <div className="flex flex-col items-center justify-center w-2/3 gap-2">
              <p className=" text-[1.2rem] tracking-wide text-center text-white w-full">
                I'm currently looking for any new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className="flex mt-6 gap-7">
                {CONTACTS.map((contact) => {
                  return (
                    <Link
                      key={contact.id}
                      to={contact.link}
                      className="p-1.5 bg-white rounded-full  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 shadow-cyan-500 shadow-sm"
                    >
                      <img src={contact.icon} className="w-7" alt="" />
                    </Link>
                  );
                })}
              </div>
              <button
                className="px-8 py-3 mt-2 bg-white text-[color:var(--primary-text-color)] font-semibold shadow-md shadow-cyan-500 hover:scale-110 duration-1000 hover:duration-300 active:scale-95 tracking-wide"
                onClick={() => window.open("mailto:vickyguptaa7@gmail.com")}
              >
                SEE MY RESUME
              </button>
            </div>
            <div className="w-full sm:w-4/5 lg:w-full mt-8 border-8 border-white shadow-lg shadow-cyan-500 h-[300px] lg:mt-0 lg:h-[400px] flex items-center justify-center bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.02670427057078!2d77.28255034027204!3d28.556929835391184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d2a5c32827%3A0x399703d8db4a8713!2sMariyam%20Residency!5e0!3m2!1sen!2sin!4v1688108537681!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </Wrapper>
          <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
          {/* <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div> */}
        </div>
      </section>
        <div className="h-[2rem] w-full  bg-white rounded-full"></div>
      <footer className="flex items-center flex-col gap-4 justify-center w-full py-4 bg-[color:var(--color-primary)] text-white font-semibold text-lg tracking-wider">
        <Wrapper className="flex flex-col items-center justify-center gap-4">
        <p className="text-center">
        Copyright © Vicky Gupta 2023 All Right Reserved.
        </p>
        </Wrapper>
      </footer>
    </>
  );
};

export default Contact;
