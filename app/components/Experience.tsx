"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utills/motion";
import { styles } from "../utills/styles";
import SectionWrapper from "../../app/hoc/SectionWrapper";
import { experiences } from "../../app/utills/index";
import Image from "next/image";

interface ExperienceType {
  title: string;
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
        "linear-gradient(145deg, rgba(33, 33, 43, 0.95), rgba(25, 25, 35, 0.9))",
        color: "#fff",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        backdropFilter: "blur(12px)",
        
      }}
      contentArrowStyle={{ borderRight: "8px solid #3a3a46" }}
      date={experience.date} // ✅ FIXED TYPE ERROR HERE
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 12px rgba(0,0,0,0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <Image
            src={
              experience.icon.startsWith("/")
                ? experience.icon
                : `/assets/${experience.icon}`
            }
            alt={experience.title}
            width={50}
            height={50}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="pb-2">
        <h3 className="text-white text-[20px] font-bold leading-snug">
          {experience.title}
        </h3>
        {/* <p className="text-indigo-400 text-[15px] font-medium mt-1">
          {experience.company_name}
        </p> */}
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] leading-relaxed tracking-wide transition duration-300 ease-in-out hover:text-white"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
        className="text-center reveal-up mb-10"
      >
        <p className={`${styles.sectionSubText}`}>My Professional Journey</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Experience & Skills
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-col ">
        <VerticalTimeline lineColor="#3a3a46">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "skills");
