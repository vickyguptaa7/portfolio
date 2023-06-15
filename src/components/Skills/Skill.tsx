import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Wrapper from "../Wrapper/wrapper";
// import Wrapper from "../Wrapper/wrapper";

function Skill() {
  return (
    <section className="mt-56 text-black ">
      <Wrapper className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
          SKILLS
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
        <ParallaxProvider>
          <Parallax className="w-full" speed={0.3} translateY={["-100px", "100px"]}>
            <div className="relative w-full h-[600px] font-semibold text-gray-300 -z-10">
              <p className="absolute right-0 text-2xl top-12">HTML5</p>
              <p className="absolute text-2xl top-4 left-10">Redux</p>
              <p className="absolute left-[30%] text-lg top-[10%]">CSS3</p>
              <p className="absolute text-xl translate-x-1/2 top-1/2 -left-4 ">
                Tailwind
              </p>
              <p className="absolute right-[20%] bottom-[35%] text-xl ">
                MongoDB
              </p>
              <p className="absolute right-[30%] top-[15%] text-xl ">Git</p>
              <p className="absolute bottom-[20%] right-[40%] text-xl ">
                Express
              </p>
              <p className="absolute left-[30%] bottom-10 text-xl ">Github</p>
              <p className="absolute text-xl right-[20%] bottom-0 ">Firebase</p>
            </div>
          </Parallax>
        </ParallaxProvider>
      </Wrapper>
    </section>
  );
}

export default Skill;
