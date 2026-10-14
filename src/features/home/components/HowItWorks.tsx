"use client";
import { motion } from "framer-motion";
import { Search, MapPin, Banknote } from "lucide-react";

const steps = [
    { step: "01", title: "Search Location", desc: "Enter your district to find nearby verified gold loan shops.", icon: Search },
    { step: "02", title: "Visit & Evaluate", desc: "Visit the shop. Our experts evaluate your gold purity transparently.", icon: MapPin },
    { step: "03", title: "Get Instant Cash", desc: "Sign minimal paperwork and receive cash in your account instantly.", icon: Banknote },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
                    <p className="mt-4 text-lg text-slate-600">Get your gold loan in just 3 simple steps</p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-amber-200 -z-10" />

                    {steps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-50 border-4 border-white shadow-lg mb-6">
                                <item.icon className="h-10 w-10 text-amber-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 max-w-xs mx-auto">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}