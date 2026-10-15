"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Calendar } from "lucide-react";
import { Testimonial } from "@/src/types/index";

interface TestimonialCardProps {
    review: Testimonial;
    index: number;
}

export default function TestimonialCard({ review, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col h-full relative"
        >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 h-8 w-8 text-amber-100" />

            {/* Header - Avatar, Info */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {review.avatar}
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">{review.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        {review.location}
                    </div>
                </div>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                            }`}
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow italic">
                "{review.review}"
            </p>

            {/* Footer - Loan Amount & Date */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-semibold">
                    Loan: {review.loanAmount}
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {review.date}
                </div>
            </div>
        </motion.div>
    );
}