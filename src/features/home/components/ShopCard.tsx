"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Coins, TrendingDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shop } from "@/src/types/index";

interface ShopCardProps {
    shop: Shop;
    index: number;
}

export default function ShopCard({ shop, index }: ShopCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Card className="group overflow-hidden border-yellow-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Coins className="h-20 w-20 text-yellow-500/40" />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-bold text-gray-900">{shop.rating}</span>
                        <span className="text-xs text-gray-500">({shop.reviewCount})</span>
                    </div>

                    {/* Interest Badge */}
                    <div className="absolute bottom-3 left-3">
                        <Badge className="bg-green-500 hover:bg-green-600 text-white">
                            <TrendingDown className="mr-1 h-3 w-3" />
                            {shop.interestRate}% / month
                        </Badge>
                    </div>
                </div>

                <CardContent className="p-5 space-y-3">
                    {/* Shop Name & Location */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                            {shop.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{shop.area}, {shop.district}</span>
                        </div>
                    </div>

                    {/* Rates */}
                    <div className="grid grid-cols-2 gap-3 rounded-lg bg-gray-50 p-3">
                        <div>
                            <div className="text-xs text-gray-500">Gold Rate</div>
                            <div className="text-sm font-bold text-yellow-700">₹{shop.goldRatePerGram}/g</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Silver Rate</div>
                            <div className="text-sm font-bold text-gray-700">₹{shop.silverRatePerGram}/g</div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5">
                        {shop.features.slice(0, 3).map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs bg-yellow-50 text-yellow-800 border border-yellow-200">
                                {feature}
                            </Badge>
                        ))}
                    </div>

                    {/* Open Hours */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{shop.openHours}</span>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                    <Link href={`/shop/${shop.id}`} className="w-full">
                        <Button
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
                        >
                            View Details & Apply
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}