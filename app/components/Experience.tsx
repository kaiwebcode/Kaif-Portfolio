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
                background: "#1d1820",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full '>
                    <Image
                        src={experience.icon.startsWith("/") ? experience.icon : `/assets/${experience.icon}`}
                        alt={experience.company_name}
                        width={60} // Adjust size as needed
                        height={60} // Adjust size as needed
                        className='w-[60%] h-[60%] object-contain text-white'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point: string, index: number) => (
                    <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-0 tracking-wider'>
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
            <motion.div variants={textVariant(0.1)} className="reveal-up">
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-10 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience: ExperienceType, index: number) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
