"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import ContactInfo from "@/src/features/contact/components/ContactInfo";
import ContactForm from "@/src/features/contact/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7]">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get in <span className="text-amber-500">Touch</span>
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                            Have questions about gold loans? Our team is here to help you.
                            Reach out to us and we will respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Left: Contact Info & Map (3 cols) */}
                    <div className="lg:col-span-3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <ContactInfo />
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 group"
                        >
                            {/* Fake Map Visual */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                                        <Map className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">GoldLoan Finder HQ</p>
                                        <p className="text-sm text-slate-300">123, Anna Salai, Chennai</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                            <p className="text-slate-500 mb-6 text-sm">
                                Fill out the form below and our team will get back to you shortly.
                            </p>
                            <ContactForm />
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}