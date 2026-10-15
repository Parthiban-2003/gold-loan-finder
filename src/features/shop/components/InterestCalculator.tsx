"use client";

import { useState } from "react";
import { Calculator, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shop } from "@/src/types/index";

export default function InterestCalculator({ shop }: { shop: Shop }) {
    const [metalType, setMetalType] = useState<"gold" | "silver">("gold");
    const [weight, setWeight] = useState<number>(10);

    const rate = metalType === "gold" ? shop.goldRatePerGram : shop.silverRatePerGram;
    const loanAmount = weight * rate;
    const monthlyInterest = (loanAmount * shop.interestRate) / 100;

    return (
        <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator className="h-5 w-5 text-amber-600" />
                    <h3 className="text-lg font-bold text-slate-900">Loan Calculator</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                    <button
                        onClick={() => setMetalType("gold")}
                        className={`py-2 rounded-md text-sm font-semibold transition-all ${metalType === "gold"
                                ? "bg-amber-500 text-white shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                    >
                        Gold (₹{shop.goldRatePerGram}/g)
                    </button>
                    <button
                        onClick={() => setMetalType("silver")}
                        className={`py-2 rounded-md text-sm font-semibold transition-all ${metalType === "silver"
                                ? "bg-slate-600 text-white shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                    >
                        Silver (₹{shop.silverRatePerGram}/g)
                    </button>
                </div>

                {/* Weight Input */}
                <div className="space-y-2">
                    <Label className="text-slate-700">Approximate Weight (grams)</Label>
                    <div className="relative">
                        <Coins className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                            className="pl-10 border-slate-300 focus:border-amber-500 focus:ring-amber-500/20"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="space-y-3 pt-4 border-t border-amber-200">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600">Estimated Loan Amount</span>
                        <span className="text-2xl font-bold text-amber-600">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Monthly Interest ({shop.interestRate}%)</span>
                        <span className="font-semibold text-slate-700">₹{monthlyInterest.toFixed(2)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}