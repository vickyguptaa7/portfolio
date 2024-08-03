import Wrapper from "../Wrapper/wrapper";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center flex-col gap-4 justify-center w-full py-4 bg-[color:var(--color-primary)] text-white font-semibold text-lg tracking-wider mt-8">
      <Wrapper className="flex flex-col items-center justify-center gap-4">
        <p className="text-center">
          Copyright © Vicky Gupta {year} All Right Reserved.
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
