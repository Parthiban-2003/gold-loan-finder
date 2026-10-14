"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Search, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tamilNaduDistricts, quickSearchDistricts } from "../data/mockShops";

interface LocationSearchProps {
    selectedDistrict: string;
    setSelectedDistrict: (value: string) => void;
    onSearch: () => void;
}

export default function LocationSearch({
    selectedDistrict,
    setSelectedDistrict,
    onSearch,
}: LocationSearchProps) {
    const [inputValue, setInputValue] = useState(selectedDistrict);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredDistricts = tamilNaduDistricts.filter((district) =>
        district.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    // Close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectDistrict = (district: string) => {
        setInputValue(district);
        setSelectedDistrict(district);
        setShowDropdown(false);
    };

    const handleQuickSearch = (district: string) => {
        setInputValue(district);
        setSelectedDistrict(district);
    };

    const handleCurrentLocation = async () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
                    );
                    const data = await response.json();

                    const district =
                        data.address?.city ||
                        data.address?.town ||
                        data.address?.state_district ||
                        data.address?.county;

                    if (district && tamilNaduDistricts.includes(district)) {
                        handleSelectDistrict(district);
                    } else {
                        alert(`Location detected: ${district || 'Unknown'}. Please select a Tamil Nadu district manually.`);
                    }
                } catch (error) {
                    console.error("Error fetching location:", error);
                    alert("Could not detect location. Please select manually.");
                } finally {
                    setIsLoadingLocation(false);
                }
            },
            (error) => {
                alert("Location access denied. Please select manually.");
                setIsLoadingLocation(false);
            }
        );
    };

    const handleSearchClick = () => {
        if (inputValue && tamilNaduDistricts.includes(inputValue)) {
            setSelectedDistrict(inputValue);
            onSearch();
        } else {
            alert("Please select a valid Tamil Nadu district from the list.");
        }
    };

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-amber-100">
            {/* Location Input */}
            <div className="mb-6 relative" ref={dropdownRef}>
                <label className="text-slate-600 text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" /> Location
                </label>
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                        type="text"
                        placeholder="Type district name (e.g., Chennai, Madurai)"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setSelectedDistrict("");
                            setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        className="pl-12 pr-10 h-14 bg-slate-50 border-slate-200 text-slate-900 text-lg rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
                    />
                    {inputValue && (
                        <button
                            onClick={() => { setInputValue(""); setSelectedDistrict(""); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>

                {/* Autocomplete Dropdown */}
                <AnimatePresence>
                    {showDropdown && inputValue.length > 0 && !tamilNaduDistricts.includes(inputValue) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-60 overflow-y-auto"
                        >
                            {filteredDistricts.length > 0 ? (
                                filteredDistricts.map((district) => (
                                    <button
                                        key={district}
                                        onClick={() => handleSelectDistrict(district)}
                                        className="w-full text-left px-4 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-b border-slate-100 last:border-0"
                                    >
                                        <MapPin className="inline h-4 w-4 mr-2 text-amber-500" />
                                        {district}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-slate-400 text-center">No districts found</div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Button
                variant="outline"
                onClick={handleCurrentLocation}
                disabled={isLoadingLocation}
                className="w-full h-12 mb-4 bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-xl text-base"
            >
                <Navigation className={`mr-2 h-5 w-5 ${isLoadingLocation ? "animate-spin" : ""}`} />
                {isLoadingLocation ? "Detecting..." : "Use Current Location"}
            </Button>

            {/* Search Button */}
            <Button
                onClick={handleSearchClick}
                className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold rounded-xl shadow-lg transition-all mb-6"
            >
                <Search className="mr-2 h-5 w-5" />
                Search Shops
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Quick Search Chips */}
            <div className="text-center">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-3">
                    Quick Search
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {quickSearchDistricts.map((district) => (
                        <button
                            key={district}
                            onClick={() => handleQuickSearch(district)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${inputValue === district
                                    ? "bg-amber-500 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {district}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}