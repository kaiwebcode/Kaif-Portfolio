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
        <header className="fixed top-0 left-0 w-full lg:h-20 h-16 z-10  flex items-center text-white mix-blend-difference bg-gradient-to-b from-zinc-900 to-zinc-900/0 px-4 md:px-6 border-b border-slate-400">
            <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="font-bold text-white">
                    <Link href="/" className="text-4xl">KAIF</Link>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-white px-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-gray-400 from-neutral-950">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="fixed top-3 right-4 lg:hidden ">
                                <Menu className="h-7 w-7 " />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-zinc-900 text-white overflow-auto px-4">
                            {/* Title for Accessibility */}
                            <SheetTitle className="text-xl font-semibold text-center mt-6">Menu</SheetTitle>
                            <motion.nav
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-6 mt-6 text-lg"
                            >
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="hover:text-gray-400 px-4 py-2">
                                        {link.label}
                                    </Link>
                                ))}
                            </motion.nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
