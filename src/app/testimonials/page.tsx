"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, TrendingUp } from "lucide-react";
import TestimonialCard from "@/src/features/testimonials/components/TestimonialCard";
import { testimonialsData } from "@/src/features/testimonials/data/reviewsData";

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF7]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300 border border-amber-500/30">
                            <Heart className="h-4 w-4" />
                            <span>Customer Success Stories</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Trusted by <span className="text-amber-500">50,000+</span> Customers
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            Don't just take our word for it. Hear directly from the people who got instant, transparent, and secure gold loans through our platform.
                        </p>

                        {/* Trust Stats */}
                        <div className="flex flex-wrap justify-center gap-6 pt-6">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                                <ShieldCheck className="h-5 w-5 text-amber-400" />
                                <span className="font-semibold">100% Verified Reviews</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                                <TrendingUp className="h-5 w-5 text-amber-400" />
                                <span className="font-semibold">4.8/5 Average Rating</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialsData.map((review, index) => (
                        <TestimonialCard key={review.id} review={review} index={index} />
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Ready to become our next <span className="text-amber-600">success story</span>?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Find the best gold loan rates in your area today. No hidden charges, instant approval.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                            >
                                Find Shops Near You
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                            >
                                Talk to Our Experts
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}