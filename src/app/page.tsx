"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import HeroSection from "@/src/features/home/components/HeroSection";
import TrustedBy from "@/src/features/home/components/TrustedBy";
import ShopList from "@/src/features/home/components/ShopList";
import SpecializedServices from "@/src/features/home/components/SpecializedServices";
import StatsCounter from "@/src/features/home/components/StatsCounter";
import HowItWorks from "@/src/features/home/components/HowItWorks";
import { mockShops } from "@/src/features/home/data/mockShops";

export default function HomePage() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredShops = mockShops.filter(
    (shop) => shop.district === selectedDistrict
  );

  const handleSearch = () => {
    setHasSearched(true);
    // Smooth scroll to shops section
    setTimeout(() => {
      document.getElementById("shops-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* 1. Hero Section with Search */}
      <HeroSection
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        onSearch={handleSearch}
      />

      {/* 2. Trusted By Marquee */}
      <TrustedBy />

      {/* 3. Shop Cards (Hidden until searched) */}
      <section id="shops-section" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-[300px]">
        {!hasSearched ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <SearchX className="h-10 w-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Find Shops in Your Area</h3>
            <p className="mt-2 text-slate-500 max-w-md">
              Use the search box above to discover trusted gold loan shops near you.
            </p>
          </motion.div>
        ) : filteredShops.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Shops in <span className="text-amber-600">{selectedDistrict}</span>
              </h2>
              <p className="mt-2 text-slate-600">
                Found <span className="font-bold text-amber-600">{filteredShops.length}</span> trusted shops
              </p>
            </div>
            <ShopList shops={filteredShops} />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-amber-50 p-6 mb-4">
              <SearchX className="h-12 w-12 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No shops found in {selectedDistrict}</h3>
            <p className="mt-2 text-slate-500 max-w-md">
              Try selecting a different district like Chennai, Madurai, or Coimbatore.
            </p>
          </motion.div>
        )}
      </section>

      {/* 4. Specialized Services */}
      <SpecializedServices />

      {/* 5. Stats Counter */}
      <StatsCounter />

      {/* 6. How It Works */}
      <HowItWorks />
    </>
  );
}