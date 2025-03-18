import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utills/motion";
import { styles } from "../utills/styles";
import { services } from "../utills";
import SectionWrapper from "../hoc/SectionWrapper";
import type { StaticImageData } from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-[500px] text-white mix-blend-difference">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-white-400 to-slate-400 p-[2px] rounded-2xl shadow-lg"
    >
      <div
        className="bg-gradient-to-r from-slate-800 to-sky-700 rounded-2xl p-10 min-h-[200px] flex flex-col items-center text-center"
      >
        <img
          src={icon.src}
          alt={title}
          className="w-16 h-16 object-contain mb-4"
        />
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="py-20 text-white text-center">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
