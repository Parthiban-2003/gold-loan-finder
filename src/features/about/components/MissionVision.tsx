"use client";

import { motion } from "framer-motion";
import { Eye, HeartHandshake } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-20 bg-[#FFFDF7]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                            <HeartHandshake className="h-7 w-7 text-amber-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To democratize access to instant financial liquidity by connecting individuals with verified, transparent, and fair gold loan providers. We believe everyone deserves access to emergency funds without the stress of hidden fees or unsafe practices.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                            <Eye className="h-7 w-7 text-blue-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To become Tamil Nadu's most trusted digital bridge for gold-backed financing. We envision a future where every gold loan transaction is as simple, secure, and transparent as a digital UPI payment, backed by physical gold safety.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}