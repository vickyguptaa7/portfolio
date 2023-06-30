import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

const ModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="button fixed bottom-12 bg-[color:var(--color-primary)] shadow-lg w-12 md:w-16 h-10 rounded-r-full flex justify-end items-center">
      <button
        className={twMerge(
          "p-2 text-white ",
          isDarkMode ? "hover:text-white" : "hover:text-black"
        )}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        {isDarkMode && <MdDarkMode className="text-2xl " />}
        {!isDarkMode && <RiSunFill className="text-2xl " />}
      </button>
    </div>
  );
};

export default ModeSwitcher;
