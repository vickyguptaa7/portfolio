import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let HeightToHide = 200;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > HeightToHide) setIsVisible(true);
    else setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className=" fixed bottom-12 right-4  bg-white shadow-lg w-[48px] sm:w-[56px] aspect-square rounded-full flex justify-center items-center">
      <button className={twMerge("p-2 text-white ")} onClick={scrollToTop}>
        <FaArrowUp className="text-2xl text-[color:var(--primary-text-color)]" />
      </button>
    </div>
  );
};

export default ScrollUp;
