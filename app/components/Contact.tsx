"use client"; // Ensure this runs as a client component

import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../utills/styles";
import { slideIn } from "../utills/motion";
import SectionWrapper from "../../app/hoc/SectionWrapper";

// Dynamically import EarthCanvas to prevent SSR issues
// const EarthCanvas = dynamic(() => import("./canvas/Earth"), { ssr: false });

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulated API request (replace with emailJS or backend call)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            alert("Thank you! I will get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-50">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-slate-900 p-6 lg:p-8 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-slate-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-slate-800 py-3 px-8 rounded-lg outline-none w-fit text-white font-bold shadow-2xl cursor-pointer"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            {/* <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Ensure EarthCanvas renders only on client
                {typeof window !== "undefined" && <EarthCanvas />}
            </motion.div> */}
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
