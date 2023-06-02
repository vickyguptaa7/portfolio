import Wrapper from "../Wrapper/wrapper";

function About() {
  return (
    <Wrapper>
      <section className="px-8 mt-24">
        <div className="flex flex-col items-center justify-center header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            ABOUT ME
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
          <p className="mt-4 text-[--secondary-text-color] text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

export default About;
