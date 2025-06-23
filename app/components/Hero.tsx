import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import Coder from "../../public/assets/coder.svg";

function Hero() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 3, ease: "bounce" }
      );
    }
  }, []);

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative text-white py-16 lg:py-48 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 mx-auto lg:gap-16 xl:max-w-7xl">
        
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <figure className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-700">
              <Image src={Coder} width={100} height={100} alt="Coder Icon" className="w-full h-full" />
            </figure>
            <div className="flex items-center gap-2 text-zinc-400 text-lg">
              <span className="relative w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for work
            </div>
          </div>
          <h1 ref={textRef} className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl lg:text-4xl">
            <span className="block text-white">Hi I&apos;m Kai</span>
            <span className="block text-white">Building Scalable</span>
            <span className="block text-white">Modern Websites for the Future</span>
          </h1>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <CustomButton text="View Work" />
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <figure className="relative w-full max-w-md mx-auto lg:max-w-4xl bg-gradient-to-t from-sky-500/60 via-sky-400/40 to-transparent rounded-[50px] overflow-hidden shadow-xl">
            <Image src={Coder} width={800} height={800} alt="Coder Image" className="w-full" />
          </figure>

          {/* Animated Scroll Indicator */}
          <div className="absolute xs:bottom-10 bottom-24 flex justify-center items-center ">
            <a href="#about" onClick={scrollToAbout} className="">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 shadow-xl shadow-sky-600">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="w-3 h-3 rounded-full bg-slate-300 mb-1"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
