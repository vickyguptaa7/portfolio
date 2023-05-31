import "../styles.css";

function Home() {
  return (
    <section className="flex h-[calc(100vh-60px)]  md:h-[calc(100vh-76px)] min-h-[600px] px-12 sm:px-16 lg:px-20 xl:px-24 ">
      <div className="relative flex flex-col items-start justify-center">
        <p className="text-sm text-gray-300">&lt;html&gt;</p>
        <p className="px-3 mt-1 text-sm text-gray-300">&lt;body&gt;</p>
        <p className="px-6 mt-4 text-sm text-gray-300">&lt;h1&gt;</p>
        <div className="flex flex-col mt-2 px-9">
          <h1 className="text-5xl font-semibold tracking-wider">
            Hello
            <br />
          </h1>
          <h1 className="mt-2 text-5xl font-semibold tracking-wider">
            I'm{" "}
            <span className="text-[color:var(--primary-text-color)] text-5xl font-semibold">
              {" "}
              Vicky
            </span>
            ,
          </h1>
          <h1 className="mt-2 text-5xl font-semibold tracking-wider">
            Web Developer
          </h1>
        </div>
        <p className="px-6 mt-2 text-sm text-gray-300">&lt;/h1&gt;</p>
        <p className="px-6 mt-2 text-sm text-gray-300">&lt;/p&gt;</p>
        <p className="max-w-xl text-lg tracking-wider px-9">
          A full-stack developer with experience in competitive programming who
          is passionate about learning and growing.
        </p>
        <p className="px-6 mt-2 text-sm text-gray-300">&lt;/p&gt;</p>
        <button className=" border-[--primary-text-color] border-2 px-6 py-2 font-semibold mx-9 mt-4 text-[color:var(--primary-text-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white">
          View My CV
        </button>
        <p className="px-3 mt-4 text-sm text-gray-300">&lt;/body&gt;</p>
        <p className="mt-1 text-sm text-gray-300">&lt;/html&gt;</p>
      </div>
      <div className="absolute h-10 w-6 border-2 border-black  rounded-3xl bottom-6 translate-x-[50%] right-[50%] hidden sm:flex items-start justify-center">
        <div className="w-1.5 my-1 bg-black rounded-full aspect-square mouse"></div>
      </div>
    </section>
  );
}

export default Home;
