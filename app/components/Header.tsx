"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact Us" },
];

function Header() {
    return (
        <section>
            <div className="mode-tog animate-bounce "></div>
            <div className="container">
                <div className="dark-mode"></div>
            </div>
            <header className="fixed top-0 left-0 w-full lg:h-20 h-16 z-20 flex items-center text-white bg-zinc-900/80 backdrop-blur-md px-4 md:px-6 border-b border-gray-700">
                <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="font-bold text-white">
                        <Link href="/" className="lg:text-4xl text-3xl tracking-wide">KAIF.</Link>
                    </h1>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 text-white px-8">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <Link href={link.href} className="hover:text-gray-400 text-lg">
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="fixed top-3 right-4 lg:hidden bg-transparent border-none">
                                    <Menu className="h-7 w-7 text-white" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-zinc-900 text-white overflow-auto px-4 pb-10 z-80">
                                <SheetTitle className="text-2xl font-semibold text-white mix-blend-difference text-center mt-6 pb-3 border-b">KAI</SheetTitle>
                                <motion.nav
                                    initial={{ x: 10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-6 mt-6 text-lg"
                                >
                                    {navLinks.map((link) => (
                                        <motion.div
                                            key={link.href}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            <Link href={link.href} className="hover:text-gray-400 px-4 py-2">
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Header;
