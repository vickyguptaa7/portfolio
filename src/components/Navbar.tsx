import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-between shadow  px-8 sm:px-12 lg:px-16 xl:px-20 text-[--tertiary-text-color]">
      <section className="flex items-center justify-between w-full">
        <Link
          to="/"
          className="flex gap-2 py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
        >
          {/* <img src="" alt="logo" /> */}
          <h1 className="font-[650] tracking-wider text-lg md:text-xl">
            VICKY GUPTA
          </h1>
        </Link>
        {/* For Screens greater than 640px */}
        <div className="hidden sm:flex">
          <ul className="list-none flex items-center gap-8 font-[650] tracking-wider text-md ">
            <Link
              to="/"
              className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
            >
              HOME
            </Link>
            <Link
              to="/"
              className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
            >
              PROJECTS
            </Link>
            <Link
              to="/"
              className="py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
            >
              CONTACT
            </Link>
          </ul>
        </div>
        {/* For Screens less than 640px */}
        <div className="sm:hidden">
          <button
            className="py-5 px-2 md:px-4 md:py-6"
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
              to="/"
              className="py-6 w-full flex justify-end px-2 hover:text-[color:var(--primary-text-color)] duration-300 border-t"
              onClick={() => setToggle(!toggle)}
            >
              HOME
            </Link>
            <Link
              to="/"
              className="py-6 w-full flex justify-end px-2  hover:text-[color:var(--primary-text-color)] duration-300 border-t"
              onClick={() => setToggle(!toggle)}
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
    </nav>
  );
}

export default Navbar;
