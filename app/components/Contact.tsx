"use client"; // Ensure this runs as a client component

import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../utills/styles";
import { slideIn } from "../utills/motion";
import SectionWrapper from "../../app/hoc/SectionWrapper";
import Image from "next/image";
import contactUs from "../../public/assets/contact-me.svg";
import github from '../../public/assets/github.png';
import instagram from '../../public/assets/instagram.png';
import linkedin from '../../public/assets/linkedin.png';
import Email from '../../public/assets/communication.png';
import Link from "next/link";


const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    return (
        <div className="xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-50 reveal-up">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-zinc-900 p-6 lg:p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact Me</h3>

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
                className="xl:flex-1 xl:h-auto md:h-[650px] h-[600px] text-center border border-gray-700 pt-16 px-4 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 className={styles.heroSubText}>Contact me for collaboration</h2>

                <p>
                    Reach out today to discuss your project needs and start collabrating on something amazing!
                </p>

                <div className="space-y-1 gap-10 flex items-center justify-center mt-5">
                        {/* GitHub */}
                        <Link
                            href="https://www.github.com/kaiwebcode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer border hover:bg-zinc-700 hover:text-black"
                        >
                            <Image src={github} alt="GitHub" width={35} height={35} className="object-contain" />
                        </Link>

                        {/* Email */}
                        <Link
                            href="mailto:kaifqureshi.pr@gmail.com"
                            className="black-gradient w-14 h-14 rounded-full text-white flex justify-center items-center cursor-pointer border hover:bg-zinc-700 hover:text-black"
                        >
                            <Image src={Email} alt="Email" width={35} height={35} className="object-contain" />
                        </Link>

                        <Link
                            href="https://www.instagram.com/Kaif.__q"
                            className="black-gradient w-14 h-14 rounded-full text-white flex justify-center items-center cursor-pointer border hover:bg-zinc-700 hover:text-black"
                        >
                            <Image src={instagram} alt="instagram" width={35} height={35} className="object-contain" />
                        </Link>

                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/in/kaif-qureshi-06b5782a7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer border hover:bg-zinc-700 hover:text-black"
                        >
                            <Image src={linkedin} alt="LinkedIn" width={35} height={35} className="object-contain" />
                        </Link>
                    </div>

                <Image src={contactUs} alt="Contact Me" width={700} height={700} className="w-full max-w-2xl md:max-w-2xl xl:max-w-3xl mt-6" />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
