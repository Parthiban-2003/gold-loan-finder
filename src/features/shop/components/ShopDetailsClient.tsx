"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, Shield, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shop } from "@/src/types/index";
import InterestCalculator from "./InterestCalculator";
import ApplyLoanModal from "./ApplyLoanModal";

export default function ShopDetailsClient({ shop }: { shop: Shop }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Top Bar */}
            <div className="bg-white border-b sticky top-16 z-30">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="gap-2 text-slate-600 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Search
                    </Button>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                    >
                        Apply Now
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Shop Infos */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{shop.name}</h1>
                                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                                        <MapPin className="h-4 w-4 text-amber-600" />
                                        <span>{shop.address}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">
                                            <Star className="h-3 w-3 mr-1 fill-amber-600 text-amber-600" />
                                            {shop.rating} ({shop.reviewCount} reviews)
                                        </Badge>
                                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">
                                            {shop.openHours}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 min-w-[200px]">
                                    <a href={`tel:${shop.contact}`} className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors font-medium">
                                        <Phone className="h-4 w-4" /> Call Shop: {shop.contact}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        >
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Why Choose This Shop?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {shop.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        >
                            <h2 className="text-xl font-bold text-slate-900 mb-4">About the Shop</h2>
                            <p className="text-slate-600 leading-relaxed">{shop.description}</p>

                            <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                                <Shield className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-amber-900">100% Safe & Secure</h4>
                                    <p className="text-sm text-amber-800 mt-1">
                                        Your gold is stored in RBI-approved, fully insured vaults with 24/7 CCTV surveillance.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Calculator & CTA */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="sticky top-24"
                        >
                            <InterestCalculator shop={shop} />

                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full mt-4 h-14 bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold rounded-xl shadow-lg transition-all"
                            >
                                Apply for Loan Now
                            </Button>

                            <p className="text-center text-xs text-slate-500 mt-3">
                                No processing fees. Zero obligation to apply.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Apply Modal */}
            <ApplyLoanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                shopName={shop.name}
            />
        </div>
    );
}