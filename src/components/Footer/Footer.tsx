import { motion } from "framer-motion";
import "./Footer.styles.css";
function Footer() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between bubble">
        {[...Array(20)].map((i) => {
          return (
            <motion.span
              key={i}
              className=""
              initial={{
                scale: 0,
                translateY: document.documentElement.scrollHeight,
              }}
              animate={{
                translateY: -document.documentElement.scrollHeight-200,
                scale: 1,
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: Math.random() * 10 + 10,
                },
              }}
            ></motion.span>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
