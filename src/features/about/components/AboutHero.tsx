"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 lg:py-32">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300 border border-amber-500/30">
                        <Target className="h-4 w-4" />
                        <span>Our Mission</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Empowering Tamil Nadu with <br />
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                            Transparent Gold Loans
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We are on a mission to connect you with the most trusted, RBI-registered gold loan providers in your area. No hidden charges, 100% security, and instant cash when you need it most.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                            <ShieldCheck className="h-5 w-5 text-amber-400" />
                            <span className="font-semibold">100% Secure Vaults</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                            <Target className="h-5 w-5 text-amber-400" />
                            <span className="font-semibold">500+ Verified Shops</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}