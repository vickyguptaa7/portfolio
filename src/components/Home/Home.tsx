import { BsGithub, BsLinkedin } from "react-icons/bs";
import TypewriterComponent from "typewriter-effect";
import myImg from "../../assets/myimg.png";
import "../../styles.css";
import Bubbles from "../Bubbles/Bubbles";
import Wrapper from "../Wrapper/wrapper";
import CONTACTS from "../../constant/contact";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Wrapper>
        <section
          id="home"
          className="relative flex min-h-[580px] items-center justify-between px-4 pt-16 md:pt-8 md:px-8 md:h-screen  md:min-h-[800px]"
        >
          <div className="flex flex-col items-start justify-center cursor-default ">
            <p className="text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;html&gt;
            </p>
            <p className="px-3 mt-1 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;body&gt;
            </p>
            <p className="px-6 mt-4 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;h1&gt;
            </p>
            <div className="flex flex-col mt-2 px-9">
              <h1 className="text-4xl font-semibold tracking-wider duration-1000 sm:text-5xl hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black">
                Hello
                <br />
              </h1>
              <h1 className="mt-2 text-4xl font-semibold tracking-wider duration-1000 sm:text-5xl hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black">
                I'm{" "}
                <span className="text-[color:var(--primary-text-color)] text-4xl  sm:text-5xl font-semibold">
                  {" "}
                  Vicky
                </span>
                ,
              </h1>
              <h1 className="mt-2 text-4xl font-semibold tracking-wider duration-1000 sm:text-5xl hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black whitespace-nowrap">
                a web developer.
              </h1>
            </div>
            <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/h1&gt;
            </p>
            <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/p&gt;
            </p>
            <div className="flex max-w-md pt-2 text-2xl font-semibold tracking-wider duration-1000 lg:max-w-lg px-9 hover:translate-x-8 hover:duration-300 hover:scale-105">
              I'm&nbsp;
              <TypewriterComponent
                options={{
                  strings: [
                    "full-stack web developer.",
                    "DSA enthusiast.",
                    "a student.",
                  ],
                  autoStart: true,
                  delay: 100,
                  loop: true,
                  cursorClassName:
                    " text-2xl text-[color:var(--primary-text-color)] ",
                  wrapperClassName:
                    "text-[color:var(--primary-text-color)] text-xl sm:text-2xl font-semibold drop-shadow-lg shadow-black",
                }}
              />
            </div>
            <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/p&gt;
            </p>
            <p className="px-3 mt-4 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;button&gt;
            </p>
            <button className=" border-[--primary-text-color] border-2 px-6 py-2 font-semibold mx-9 mt-2 text-[color:var(--primary-text-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black">
              SEE MY RESUME
            </button>
            <div className="flex gap-4 mt-2 mx-9">
            {CONTACTS.map((contact) => {
              return (
                <Link
                  key={contact.id}
                  to={contact.link}
                  className="p-1.5 rounded-full  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 hover:translate-x-2"
                >
                  <img src={contact.icon} className="w-7" alt="" />
                </Link>
              );
            })}
          </div>
            <p className="px-3 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/button&gt;
            </p>
            <p className="px-3 mt-4 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/body&gt;
            </p>
            <p className="mt-1 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/html&gt;
            </p>
          </div>
          <div className="absolute h-10 w-6 border-2 border-black  rounded-3xl bottom-14 translate-x-[50%] right-[50%] hidden md:flex items-start justify-center">
            <div className="w-1.5 my-1 bg-black rounded-full aspect-square mouse"></div>
          </div>
          <div className="absolute overflow-hidden change aspect-auto h-96 hidden sm:flex sm:w-[200px]  md:w-[240px] right-0 lg:w-[400px]  items-center justify-center xl:w-[480px] mb-12">
            <img
              src={myImg}
              alt=""
              className="object-cover object-top w-full h-full"
            />
          </div>
        </section>
      </Wrapper>
      <Bubbles yStart={300} yEnd={-1100} />
    </>
  );
}

export default Home;
