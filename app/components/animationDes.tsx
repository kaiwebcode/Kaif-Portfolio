"use client";

import React, { useState } from "react";
import useMousePosition from "../utills/useMousePosition";
import { motion } from "framer-motion";
import styles from "../page.module.scss";

function Animation() {
  const [isHovered, setIsHovered] = useState(false);
  const { x = 0, y = 0 } = useMousePosition();
  const size = isHovered ? 300 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${(y ?? 0) - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          A visual designer - with skills that haven&apos;t been replaced by A.I (yet) - making good
          shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I&apos;m a <span>selectively skilled</span> product designer with a strong focus on
          producing high-quality & impactful digital experiences.
        </p>
      </div>
    </main>
  );
}

export default Animation;
