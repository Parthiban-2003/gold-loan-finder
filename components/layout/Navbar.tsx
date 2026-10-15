"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Coins, ArrowUpRight, ShieldCheck, ChevronRight, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className="border-b border-amber-100/80 bg-white/90 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-[76px] items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" onClick={() => setIsOpen(false)}
                            className="group flex shrink-0 items-center gap-2.5"
                            aria-label="GoldLoanFinder home"
                        >
                            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-white shadow-lg shadow-amber-500/20 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                                <Coins className="h-6 w-6" />
                                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                                    Gold<span className="text-amber-500">Loan</span>Finder
                                </span>
                                <span className="text-[9px] font-semibold uppercase tracking-[0.19em] text-slate-500 sm:text-[10px]">
                                    Smart Gold Loan Search
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-1 md:flex">
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname === link.href ||
                                        pathname.startsWith(`${link.href}/`);

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${isActive
                                            ? "text-amber-700"
                                            : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
                                            }`}
                                    >
                                        {link.name}

                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-active-link"
                                                className="absolute inset-0 -z-10 rounded-full bg-amber-100/80"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden items-center gap-3 lg:flex">
                            <div className="hidden items-center gap-1.5 xl:flex">
                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                <span className="text-xs font-medium text-slate-500">
                                    Compare Loan Options
                                </span>
                            </div>

                            <Link
                                href="contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
                            >
                                Get Started
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            type="button"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 md:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={isOpen ? "close" : "open"}
                                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex"
                                >
                                    {isOpen ? (
                                        <X className="h-5 w-5" />
                                    ) : (
                                        <Menu className="h-5 w-5" />
                                    )}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            id="mobile-navigation"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-amber-100 bg-white md:hidden"
                        >
                            <div className="container mx-auto space-y-4 px-4 py-5 sm:px-6">

                                {/* Mobile trust card */}
                                <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 p-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">
                                            Find the right loan option
                                        </p>
                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Explore available gold loan providers.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Links */}
                                <div className="space-y-1">
                                    {navLinks.map((link, index) => {
                                        const isActive =
                                            link.href === "/"
                                                ? pathname === "/"
                                                : pathname === link.href ||
                                                pathname.startsWith(`${link.href}/`);

                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.05,
                                                }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${isActive
                                                        ? "bg-amber-50 text-amber-700"
                                                        : "text-slate-700 hover:bg-slate-50 hover:text-amber-700"
                                                        }`}
                                                >
                                                    {link.name}
                                                    <ChevronRight className="h-4 w-4 opacity-60" />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Mobile CTA */}
                                <Link
                                    href="/#shops"
                                    onClick={() => setIsOpen(false)}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:brightness-105"
                                >
                                    <Coins className="h-5 w-5" />
                                    Find Gold Loan Shops
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>

                                <p className="pb-1 text-center text-xs text-slate-400">
                                    Compare options and choose what suits you.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}