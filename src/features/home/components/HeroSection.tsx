"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import LocationSearch from "./LocationSearch";

interface HeroSectionProps {
    selectedDistrict: string;
    setSelectedDistrict: (value: string) => void;
    onSearch: () => void;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HeroSection({
    selectedDistrict,
    setSelectedDistrict,
    onSearch,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#FFFDF7] py-16 lg:py-24">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -left-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"
                />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-5 py-2.5 text-sm font-medium text-amber-900 border border-amber-200">
                            <Shield className="h-4 w-4" />
                            <span>RBI Registered & 100% Secure</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
                            Instant <span className="text-amber-600">Gold Loans</span>
                            <br />
                            Near You
                        </motion.h1>

                        <motion.p variants={itemVariants} className="max-w-xl text-lg text-slate-600 leading-relaxed">
                            Find trusted gold loan shops in your area. Compare rates, check reviews,
                            and get instant cash with the lowest interest rates starting at 1.2% per month.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-2 text-base text-slate-700">
                                <Clock className="h-5 w-5 text-amber-600" />
                                <span className="font-medium">15 Min Approval</span>
                            </div>
                            <div className="flex items-center gap-2 text-base text-slate-700">
                                <Award className="h-5 w-5 text-amber-600" />
                                <span className="font-medium">50,000+ Customers</span>
                            </div>
                            <div className="flex items-center gap-2 text-base text-slate-700">
                                <Shield className="h-5 w-5 text-amber-600" />
                                <span className="font-medium">Insured Vaults</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Location Search Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <LocationSearch
                            selectedDistrict={selectedDistrict}
                            setSelectedDistrict={setSelectedDistrict}
                            onSearch={onSearch}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}