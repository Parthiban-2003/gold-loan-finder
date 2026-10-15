"use client";

import { motion } from "framer-motion";
import AboutHero from "@/src/features/about/components/AboutHero";
import MissionVision from "@/src/features/about/components/MissionVision";
import CoreValues from "@/src/features/about/components/CoreValues";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7]">
            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. Mission & Vision */}
            <MissionVision />

            {/* 3. Core Values */}
            <CoreValues />

            {/* 4. Final CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to get the <span className="text-amber-500">best value</span> for your gold?
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Join thousands of satisfied customers who trust GoldLoan Finder for their financial needs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-slate-900 bg-amber-500 rounded-full hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                            >
                                Find Shops Near You
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                            >
                                Contact Our Team
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}