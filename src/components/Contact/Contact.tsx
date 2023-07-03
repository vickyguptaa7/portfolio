import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";
import { ABOUT_ME } from "../../data/about";
import CONTACTS from "../../data/contact";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";
import Wrapper from "../Wrapper/wrapper";

const Contact = () => {
  const isDarkMode = useRecoilValue(darkModeAtom);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        data-section
        id="contact"
        className="flex flex-col items-center justify-center pt-24"
      >
        <div
          className="flex flex-col items-center justify-center px-8 header"
          data-aos="fade-in"
        >
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
            GET IN TOUCH
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="w-full py-8 lg:py-16 bg-[color:var(--color-primary)] mt-24 relative ">
          <Wrapper className="flex flex-col items-center justify-center gap-4 lg:gap-8 ">
            <div className="flex flex-col items-center justify-center w-2/3 gap-2">
              <p
                className=" text-[1.2rem] tracking-wide text-center text-white w-full"
                data-aos="fade-up"
              >
                I'm currently looking for any new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className="flex mt-6 gap-7" data-aos="zoom-in">
                {CONTACTS.map((contact) => {
                  return (
                    <Link
                      key={contact.id}
                      to={contact.link}
                      className="p-0.5 bg-[color:var(--secondary-background-color)] rounded-sm  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 shadow-[color:var(--primary-shadow-color)] shadow-sm"
                    >
                      <img
                        src={
                          isDarkMode && contact.icon_dark
                            ? contact.icon_dark
                            : contact.icon
                        }
                        className={twMerge("w-8", contact.className)}
                        alt=""
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4" data-aos="fade-up">
                <Link
                  className="px-8 py-3 mt-2 bg-[color:var(--secondary-background-color)] text-[color:var(--primary-text-color)] font-semibold shadow-md shadow-[color:var(--primary-shadow-color)] hover:scale-110 duration-1000 hover:duration-300 active:scale-95 tracking-wide"
                  to={ABOUT_ME.resumeLink}
                  target="_blank"
                >
                  SEE MY RESUME
                </Link>
              </div>
            </div>
            <div
              className="w-full  mt-4 border-8 border-[color:var(--secondary-background-color)] shadow-lg shadow-[color:var(--primary-shadow-color)] h-[300px] lg:h-[350px] flex items-center justify-center bg-[color:var(--secondary-background-color)]"
              data-aos="zoom-in"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.02670427057078!2d77.28255034027204!3d28.556929835391184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d2a5c32827%3A0x399703d8db4a8713!2sMariyam%20Residency!5e0!3m2!1sen!2sin!4v1688108537681!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ filter: isDarkMode ? "invert(92%)" : "" }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </Wrapper>
          <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
          {/* <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div> */}
        </div>
      </section>
      {/* <div className="h-[2rem] w-full  bg-[color:var(--secondary-background-color)] rounded-full"></div> */}
    </>
  );
};

export default Contact;
