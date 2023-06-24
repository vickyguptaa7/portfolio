import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/wrapper";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  };
  return (
    <nav className="flex flex-col items-center justify-between shadow text-[--tertiary-text-color] fixed top-0 w-full z-10 bg-white">
      <Wrapper>
        <section className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex gap-2 py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
          >
            <h1 className="font-[650] tracking-wider text-xl lg:text-2xl">
              <span className="text-[color:var(--primary-text-color)] text-xl lg:text-2xl">
                &lt;V/&gt;
              </span>
              &nbsp; VICKY GUPTA
            </h1>
          </Link>
          {/* For Screens greater than 640px */}
          <div className="hidden sm:flex">
            <ul className="list-none flex items-center gap-4 md:gap-0 lg:gap-8 font-[650] tracking-wider text-md ">
              <Link
                to="#home"
                className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 group "
                onClick={() => scrollToSection("home")}
              >
                <span className="invisible group-hover:visible">&lt;</span>
                HOME
                <span className="invisible group-hover:visible">&gt;</span>
              </Link>
              <Link
                to="#about"
                className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 group"
                onClick={() => scrollToSection("about")}
              >
                <span className="invisible group-hover:visible">&lt;</span>
                ABOUT
                <span className="invisible group-hover:visible">&gt;</span>
              </Link>
              <Link
                to="/"
                className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 group"
              >
                <span className="invisible group-hover:visible">&lt;</span>
                PROJECTS
                <span className="invisible group-hover:visible">&gt;</span>
              </Link>
              <Link
                to="/"
                className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 group"
              >
                <span className="invisible group-hover:visible">&lt;</span>
                CONTACT
                <span className="invisible group-hover:visible">&gt;</span>
              </Link>
            </ul>
          </div>
          {/* For Screens less than 640px */}
          <div className="sm:hidden">
            <button
              className="px-2 py-5 md:px-4 md:py-6"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <RxCross2 className="text-[24px]" />
              ) : (
                <RxHamburgerMenu className="text-[24px]" />
              )}
            </button>
          </div>
        </section>
        <section className="w-full sm:hidden">
          {toggle ? (
            <ul className="list-none flex flex-col items-end justify-center font-[650] tracking-wider text-md w-full ">
              <Link
                to="/#home"
                className="py-6 w-full flex justify-end px-2 hover:text-[color:var(--primary-text-color)] duration-300 border-t"
                onClick={() => {
                  setToggle(!toggle);
                  scrollToSection("home");
                }}
              >
                HOME
              </Link>
              <Link
                to="/"
                className="py-6 w-full flex justify-end px-2  hover:text-[color:var(--primary-text-color)] duration-300 border-t"
                onClick={() => {
                  setToggle(!toggle);
                  scrollToSection("about");
                }}
              >
                ABOUT
              </Link>
              <Link
                to="/"
                className="py-6 w-full flex justify-end px-2 hover:text-[color:var(--primary-text-color)] duration-300 border-t"
                onClick={() => setToggle(!toggle)}
              >
                PROJECTS
              </Link>
              <Link
                to="/"
                className="py-6 w-full flex justify-end px-2  hover:text-[color:var(--primary-text-color)] duration-300 border-t"
                onClick={() => setToggle(!toggle)}
              >
                CONTACT
              </Link>
            </ul>
          ) : null}
        </section>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
