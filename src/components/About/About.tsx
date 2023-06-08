function About() {
  return (
    <section className="mt-24 ">
      <div className="flex flex-col items-center justify-center px-8 header">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
          ABOUT ME
        </h1>
        <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="w-full h-96 bg-[color:var(--color-primary)] mt-20 relative">
      <div className="absolute -top-16 w-[110%] -z-10 -translate-x-5 h-24 bg-[--color-primary] rotate-3 mt-6"></div>
        
      <div className="absolute -bottom-12 w-[110%] -z-10 -translate-x-5 h-24 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default About;
