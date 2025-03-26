import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utills/motion";
import { styles } from "../utills/styles";
import { testimonials } from "../utills";
import SectionWrapper from "../../app/hoc/SectionWrapper";

interface Types {
    index: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Types) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-zinc-700 p-6 rounded-3xl xs:w-[320px] w-full reveal-up"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1 ">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          width={40} // Match the original w-10 (10 * 4px = 40px)
          height={40} // Match the original h-10 (10 * 4px = 40px)
          className="rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-8 bg-zinc-800 rounded-[20px]">
      <div className={`bg-zinc-900 border-b-2 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(0.1)}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-10 ${styles.paddingX} flex flex-wrap gap-4`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
