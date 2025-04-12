"use client";

import { useEffect } from 'react';
import Hero from "./components/Hero"
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import Footer from './components/Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Animation from './components/animationDes';

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up') as HTMLElement[];

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          // start: '-100 bottom',
          end: 'bottom 80%',
          scrub: true,
          // markers: true
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
    })

    console.log(elements)
  });

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-1 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="mt-12 gap-1 items-center h-screen text-white mix-blend-difference bg-zinc-950">
      {/* <main className={styles.main}> */}
      {/* <h1 className="text-4xl lg:text-5xl text-white mix-blend-difference font-bold flex flex-col text-center items-center justify-center">
          Kai-Portfolio
        </h1> */}

      {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
      <Hero />
      
      {/* </div> */}
      <About />
      <Animation />

      <Experience />

      {/* <Tech /> */}

      <Works />

      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>

      <Footer />
      {/* </main> */}
      {/* <h2 className="text-white mix-blend-difference" >
          Yooo
        </h2> */}
    </main>
    // </div>
  );
}
