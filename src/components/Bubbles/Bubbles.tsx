import { motion } from "framer-motion";
import "./Bubbles.styles.css";
interface IPROPS {
  yStart: number;
  yEnd: number;
}
const Bubbles: React.FC<IPROPS> = ({ yStart, yEnd }) => {
  return (
    <div className="relative h-1">
      <div className="absolute flex justify-between w-full bubble">
        {[...Array(20)].map((_, indx) => {
          return (
            <motion.span
              key={indx}
              className=""
              initial={{
                scale: 0.1,
                translateY: yStart,
              }}
              animate={{
                translateY: yEnd,
                scale: 1,
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: Math.random() * 10 + 15,
                },
              }}
            ></motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Bubbles;
