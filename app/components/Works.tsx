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
                tiltMaxAngleX={45}
                tiltMaxAngleY={45}
                scale={1}
                transitionSpeed={450}
                className="bg-zinc-800 p-4 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt="project_image"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-2xl hover:scale-3d"
                        unoptimized={image.startsWith("http")} // ✅ Fix for external images
                    />
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="flex gap-2">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border mt-3 hover:bg-black "
                    >
                        <Image
                            src={github}
                            alt="source code"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                    <div
                        onClick={() => window.open(projects_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border mt-3 hover:bg-black"
                    >
                        <Image
                            src={rocketLaunch}
                            alt="project link"
                            width={20}
                            height={20}
                            className="object-contain filter invert brightness-0"
                        />
                    </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
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

            <div className="w-full flex">
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
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
