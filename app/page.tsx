"use client";

import { useEffect } from 'react';
import Hero from "./components/Hero"
import About from './components/About';

export default function Home() {

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
    <main className="mt-20 gap-1 items-center h-screen">
      {/* <main className={styles.main}> */}
        {/* <h1 className="text-4xl lg:text-5xl text-white mix-blend-difference font-bold flex flex-col text-center items-center justify-center">
          Kai-Portfolio
        </h1> */}

          
        <Hero />
        {/* <AnimationDes /> */}
        <About />

      {/* </main> */}
      {/* <h2 className="text-white mix-blend-difference" >
          Yooo
        </h2> */}
    </main>
    // </div>
  );
}
