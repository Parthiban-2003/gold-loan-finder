"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import ShopCard from "./ShopCard";
import { Shop } from "@/src/types/index";

interface ShopListProps {
    shops: Shop[];
    isLoading?: boolean;
}

export default function ShopList({ shops }: ShopListProps) {
    if (shops.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
            >
                <div className="rounded-full bg-yellow-50 p-6 mb-4">
                    <SearchX className="h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">No shops found</h3>
                <p className="mt-2 text-gray-500 max-w-md">
                    Try adjusting your search or filter to find gold loan shops in your area.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shops.map((shop, index) => (
                <ShopCard key={shop.id} shop={shop} index={index} />
            ))}
        </div>
    );
}