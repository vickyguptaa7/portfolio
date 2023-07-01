import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";

const ModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  useEffect(() => {
    if (localStorage.getItem("vickygupta-portolio-dark-mode") === "true") {
      document.body.classList.add("dark-mode");
    }
  });

  const modeSwitcherHandler = () => {
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("vickygupta-portolio-dark-mode", "true");
    } else {
      localStorage.setItem("vickygupta-portolio-dark-mode", "false");
      document.body.classList.remove("dark-mode");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="button fixed bottom-12 bg-[color:var(--color-primary)] shadow-lg w-12 md:w-16 h-10 rounded-r-full flex justify-end items-center">
      <button
        className={twMerge(
          "p-2 ",
          isDarkMode
            ? "text-black hover:text-white"
            : "text-white hover:text-black"
        )}
        onClick={modeSwitcherHandler}
      >
        {isDarkMode && <MdDarkMode className="text-2xl " />}
        {!isDarkMode && <RiSunFill className="text-2xl " />}
      </button>
    </div>
  );
};

export default ModeSwitcher;
