import React from "react";
import { twMerge } from "tailwind-merge";

interface IPROPS {
  className: string;
  title: string;
}

const Tooltip: React.FC<IPROPS> = ({ className, title }) => {
  return (
    <div className={twMerge("absolute hidden items-center justify-center flex-col group-hover:flex bg-white px-4 py-2 rounded-md shadow-md", className)}>
      <p className="whitespace-nowrap">{title}</p>
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-b-[16px] border-l-[10px] border-r-[10px] border-white border-l-transparent border-r-transparent "></div>
    </div>
  );
};

export default Tooltip;
