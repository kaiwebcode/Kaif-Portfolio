import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import github from '../../public/assets/github.png';
import linkedin from '../../public/assets/linkedin.png';
import Email from '../../public/assets/communication.png';

type Props = object; // Fixed empty object type issue

const Footer = ({}: Props) => {
    return (
        <footer className="text-white mix-blend-difference bg-zinc-800 pb-4 border border-[#0000000e] dark:border-[#ffffff1e] mt-6 ">
            <div className="pt-11" />
            <br />
            <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8 reveal-up">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 ">
                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h3 className="text-[28px] font-[700] text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#about" className="text-base text-white dark:text-gray-300 dark:hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="text-base text-white dark:text-gray-300 dark:hover:text-white">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-base text-white dark:text-gray-300 dark:hover:text-white">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h3 className="text-[28px] font-[700] text-white">Social Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/kaif-qureshi-06b5782a7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-white dark:text-gray-300 dark:hover:text-white"
                                >
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.instagram.com/Kaif.__q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-white dark:text-gray-300 dark:hover:text-white"
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.github.com/kaiwebcode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-white dark:text-gray-300 dark:hover:text-white"
                                >
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-1.5">
                        <h3 className="text-[28px] font-[700] text-white pb-2">Contact Info</h3>
                        <p className="text-white dark:text-gray-300 pb-2">Call Me: 911-911-911-911</p>
                        <p className="text-white dark:text-gray-300 pb-2">Address: India, Maharashtra, Mumbai</p>
                        <p className="text-white dark:text-gray-300 pb-2">Mail Me: kaifqureshi.pr@gmail.com</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="space-y-1 gap-10 flex">
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
                </div>
                <br />
                <div className="w-full h-[1px] bg-[#ffffff3b] my-4"></div>
                <p className="text-center text-white dark:text-white my-5 text-4xl font-semibold">KAIF QURESHI</p>
                <p className="text-center text-white dark:text-white mb-4">© 2023 | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
