import { motion } from "framer-motion";
import { staggerContainer } from "../utills/motion";
import { styles } from "../utills/styles";
import React from "react"; // ✅ Ensure React is imported for typing

const StarWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 text-white mix-blend-difference`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
