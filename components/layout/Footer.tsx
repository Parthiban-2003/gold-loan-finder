"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Coins, Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiTacobell, SiInstagram } from "react-icons/si";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
                                <Coins className="h-6 w-6" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Gold<span className="text-yellow-500">Loan</span>Finder
                            </span>
                        </Link>

                        <p className="text-sm text-gray-400">
                            Your trusted partner for instant, transparent, and secure gold loans across Tamil Nadu.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="transition-colors hover:text-yellow-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/benefits" className="transition-colors hover:text-yellow-500">
                                    Why Choose Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="transition-colors hover:text-yellow-500">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="transition-colors hover:text-yellow-500">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 shrink-0 text-yellow-500" />
                                <span>123, Anna Salai, Chennai, TN 600002</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0 text-yellow-500" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0 text-yellow-500" />
                                <span>support@goldloanfinder.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-yellow-500 hover:text-white"
                            >
                                <SiFacebook className="h-5 w-5" />
                            </a>

                            <a
                                href="#"
                                aria-label="Social media"
                                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-yellow-500 hover:text-white"
                            >
                                <SiTacobell className="h-5 w-5" />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-yellow-500 hover:text-white"
                            >
                                <SiInstagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>
                        &copy; {currentYear ?? "2026"} GoldLoanFinder. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}