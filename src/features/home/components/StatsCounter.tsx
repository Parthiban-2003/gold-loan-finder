"use client";
import { motion } from "framer-motion";
import { Users, IndianRupee, Store, Timer } from "lucide-react";

const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users, color: "text-amber-600" },
    { label: "Loans Disbursed", value: "₹500 Cr+", icon: IndianRupee, color: "text-green-600" },
    { label: "Partner Shops", value: "500+", icon: Store, color: "text-blue-600" },
    { label: "Avg. Approval Time", value: "15 Mins", icon: Timer, color: "text-purple-600" },
];

export default function StatsCounter() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center space-y-4"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}