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
          I am a dedicated selectively skilled  with a strong proficiency in the MERN stack, specializing in TypeScript, JavaScript, React, Node.js, and MongoDB. As a college student, I am continuously advancing my skills while building dynamic web applications that are efficient.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I&apos;m a <span>Full Stack Developer</span> Passionate about coding and problem-solving, I thrive in collaborative environments where I can contribute and learn from others. I am eager to take on new challenges, further sharpen my skills, and bring innovative ideas to life.
        </p>
      </div>
    </main>
  );
}

export default Animation;
