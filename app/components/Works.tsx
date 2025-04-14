import React from "react";
import Tilt from "react-parallax-tilt"; // ✅ Updated
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utills/motion";
import Image from "next/image"; // ✅ Added
import github from "../../public/assets/github.png";
import { styles } from "../utills/styles";
import { projects } from "../utills";
import SectionWrapper from ".././hoc/SectionWrapper";
import rocketLaunch from "@/public/assets/rocket-lunch.png"; // ✅ Fixed filename
import CustomButton from "./CustomButton";
import Link from "next/link";

// Define TypeScript types
interface ProjectType {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    source_code_link: string;
    projects_link: string;
}

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    projects_link
}: ProjectType) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                scale={1.05}
                transitionSpeed={400}
                className="bg-zinc-800 rounded-2xl sm:w-[360px] w-full shadow-sm hover:shadow-xl hover:shadow-sky-600 transition-all duration-300 reveal-up"
            >
                <div className="relative w-full h-[230px] overflow-hidden rounded-t-2xl">
                    <Image
                        src={image}
                        alt="project_image"
                        width={400}
                        height={300}
                        className="w-full h-full object-center transition-transform duration-500 hover:scale-105"
                        unoptimized={image.startsWith("http")}
                    />
                </div>

                <div className="p-5 space-y-3">
                    <div>
                        <h3 className="text-white font-semibold text-[24px]">{name}</h3>
                        <p className="mt-1 text-gray-400 text-[14px] leading-relaxed">{description}</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="bg-black border cursor-pointer border-gray-700 hover:bg-gray-900 transition p-2 rounded-full flex items-center justify-center w-10 h-10"
                        >
                            <Image src={github} alt="source code" width={20} height={20} />
                        </button>
                        <button
                            onClick={() => window.open(projects_link, "_blank")}
                            className="bg-black border cursor-pointer border-gray-700 hover:bg-gray-900 transition p-2 rounded-full flex items-center justify-center w-10 h-10"
                        >
                            <Image
                                src={rocketLaunch}
                                alt="project link"
                                width={20}
                                height={20}
                                className="object-contain filter invert brightness-0"
                            />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[13px] font-medium ${tag.color}`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex reveal-up">
                <motion.p
                    variants={fadeIn("up", "spring", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcase my skills and experience through real-world
                    examples of my work. Each project is briefly described with links to code
                    repositories and live demos. It reflects my ability to solve complex
                    problems, work with different technologies, and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
                <Link href='/projects' className="mx-auto mt-10">
                <CustomButton text="View More Projects" />
                </Link>
            </div>

        </>
    );
};

export default SectionWrapper(Works, "projects");
