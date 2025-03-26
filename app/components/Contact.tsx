"use client"; // Ensure this runs as a client component

import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../utills/styles";
import { slideIn } from "../utills/motion";
import SectionWrapper from "../../app/hoc/SectionWrapper";
import Image from "next/image";
import contactUs from "../../public/assets/contact-me.svg";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-50 reveal-up">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-zinc-900 p-6 lg:p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact Us</h3>

                <form action="https://getform.io/f/apjnrrxa" method="POST" className="mt-8 flex flex-col gap-6">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-zinc-800 py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-zinc-500 transition-all"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="bg-zinc-800 py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-zinc-500 transition-all"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2">Your Message</span>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message here"
                            className="bg-zinc-800 py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-zinc-500 transition-all"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-zinc-800 hover:bg-zinc-700 transition-all py-3 px-6 rounded-lg text-white font-semibold shadow-md cursor-pointer"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[650px] h-[600px] text-center flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* <h2 className={styles.heroSubText}>Contact me for collaboration</h2> */}

                {/* <p>
                    Reach out today to discuss your project needs and start collabrating on something amazing!
                </p> */}

                <Image src={contactUs} alt="Contact Us" width={600} height={600} className="w-full max-w-xl md:max-w-2xl xl:max-w-3xl" />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
