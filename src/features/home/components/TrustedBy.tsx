"use client";
import { motion } from "framer-motion";
import { Banknote, ShieldCheck, Landmark, Award, Building2, BadgeCheck } from "lucide-react";

const partners = [
    { name: "RBI Guidelines", icon: Banknote },
    { name: "Secure Vaults", icon: ShieldCheck },
    { name: "Partner Banks", icon: Landmark },
    { name: "Certified Appraisers", icon: Award },
    { name: "500+ Shops", icon: Building2 },
    { name: "ISO Certified", icon: BadgeCheck },
];

export default function TrustedBy() {
    return (
        <section className="bg-white py-12 border-y border-amber-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8">
                    Trusted & Compliant With Industry Standards
                </p>
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex gap-12 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex items-center gap-3 text-slate-400 hover:text-amber-600 transition-colors">
                                <partner.icon className="h-6 w-6" />
                                <span className="text-lg font-semibold whitespace-nowrap">{partner.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}