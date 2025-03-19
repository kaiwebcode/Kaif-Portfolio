import React from "react";

import Ball from "./canvas/Ball";
import SectionWrapper from "../../app/hoc/SectionWrapper";
import { technologies } from "../../app/utills/index";

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <Ball icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");