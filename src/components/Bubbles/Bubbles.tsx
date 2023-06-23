import { motion } from "framer-motion";
import "./Bubbles.styles.css";

function Bubbles() {

  return (
    <div className="h-1">
      <div className="flex justify-between h-full bubble">
        {[...Array(20)].map((_, indx) => {
          return (
            <motion.span
              key={indx}
              className=""
              initial={{
                scale: 0.1,
                translateY: 1000 + 200,
              }}
              animate={{
                translateY: -1000,
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
}

export default Bubbles;
