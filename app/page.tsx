"use client";

import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utills/useMousePosition';
// import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x = 0, y = 0 } = useMousePosition();
  const size = isHovered ? 300 : 40;

  useEffect(() => {
    const modeToggle = document.querySelector(".mode-tog");
    const darkMode = document.querySelector(".dark-mode");

    if (modeToggle && darkMode) {
      const handleClick = () => {
        darkMode.classList.toggle("active");
        modeToggle.classList.toggle("active");
      };

      modeToggle.addEventListener("click", handleClick);

      // Cleanup event listener on component unmount
      return () => {
        modeToggle.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-1 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-6 row-start-2 items-center ">
      <main className={styles.main}>
        {/* <h1 className="text-4xl lg:text-5xl text-white mix-blend-difference font-bold flex flex-col text-center items-center justify-center">
          Kai-Portfolio
        </h1> */}

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
          <p>I&apos;m a <span>selectively skilled</span> product designer with a strong focus on
            producing high-quality & impactful digital experiences.
          </p>
        </div>

      </main>
      {/* <h2 className="text-white mix-blend-difference" >
          Yooo
        </h2> */}
    </main>
    // </div>
  );
}
