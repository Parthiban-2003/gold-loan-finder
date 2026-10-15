"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Scale } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Uncompromising Security",
        desc: "Your gold is your wealth. We only partner with shops that use RBI-approved, 24/7 CCTV monitored, and fully insured vaults.",
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        icon: Scale,
        title: "100% Transparency",
        desc: "No hidden processing fees, no surprise charges. What you see in the calculator is exactly what you get.",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "We know time is money. Our partnered shops guarantee loan approval and disbursal within 15-30 minutes.",
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        icon: Users,
        title: "Customer First",
        desc: "From doorstep service to flexible repayment options, every process is designed keeping your convenience in mind.",
        color: "text-green-600",
        bg: "bg-green-50",
    },
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        The principles that guide every partnership and transaction on our platform.
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl ${value.bg} ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}