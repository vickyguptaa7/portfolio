import TypewriterComponent from "typewriter-effect";
import "../styles.css";

function Home() {
  return (
    <section className="flex md:h-[calc(100vh-76px)] min-h-[550px] px-12 sm:px-16 lg:px-20 xl:px-24 ">
      <div className="relative flex flex-col items-start justify-center cursor-default">
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
          <h1 className="text-5xl font-semibold tracking-wider duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110">
            Hello
            <br />
          </h1>
          <h1 className="mt-2 text-5xl font-semibold tracking-wider duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110">
            I'm{" "}
            <span className="text-[color:var(--primary-text-color)] text-5xl font-semibold">
              {" "}
              Vicky
            </span>
            ,
          </h1>
          <h1 className="mt-2 text-5xl font-semibold tracking-wider duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110">
            a web developer.
          </h1>
        </div>
        <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
          &lt;/h1&gt;
        </p>
        <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
          &lt;/p&gt;
        </p>
        <p className="flex max-w-xl pt-2 text-2xl tracking-wider duration-1000 px-9 hover:translate-x-8 hover:duration-300 hover:scale-105">
          I'm&nbsp;
          <TypewriterComponent
            options={{
              strings: [
                "full-stack web developer",
                "data structures and algorithms enthusiast",
                "a student",
              ],
              autoStart: true,
              delay: 100,
              loop: true,
              cursorClassName:
                " text-2xl text-[color:var(--primary-text-color)] ",
              wrapperClassName:
                "text-[color:var(--primary-text-color)] text-2xl font-semibold",
            }}
          />
        </p>
        <p className="px-6 mt-2 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
          &lt;/p&gt;
        </p>
        <button className=" border-[--primary-text-color] border-2 px-6 py-2 font-semibold mx-9 mt-4 text-[color:var(--primary-text-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110">
          View My CV
        </button>
        <p className="px-3 mt-4 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
          &lt;/body&gt;
        </p>
        <p className="mt-1 text-sm text-gray-300 duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
          &lt;/html&gt;
        </p>
      </div>
      <div className="absolute h-10 w-6 border-2 border-black  rounded-3xl bottom-6 translate-x-[50%] right-[50%] hidden sm:flex items-start justify-center">
        <div className="w-1.5 my-1 bg-black rounded-full aspect-square mouse"></div>
      </div>
    </section>
  );
}

export default Home;
