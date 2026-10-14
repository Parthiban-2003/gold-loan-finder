"use client";
import { motion } from "framer-motion";
import { Briefcase, Wheat, Zap, Gem, Heart, Home } from "lucide-react";

const services = [
    { title: "Business Loans", desc: "Expand your business with quick capital.", icon: Briefcase, color: "bg-blue-100 text-blue-600" },
    { title: "Agriculture Loans", desc: "Support for farmers and agri-business.", icon: Wheat, color: "bg-green-100 text-green-600" },
    { title: "Emergency Cash", desc: "Instant funds for medical & urgent needs.", icon: Zap, color: "bg-red-100 text-red-600" },
    { title: "Silver Loans", desc: "Get loans against your silver assets.", icon: Gem, color: "bg-gray-100 text-gray-600" },
    { title: "Personal Loans", desc: "Fulfill your dreams and personal goals.", icon: Heart, color: "bg-pink-100 text-pink-600" },
    { title: "Home Renovation", desc: "Transform your home with easy funds.", icon: Home, color: "bg-purple-100 text-purple-600" },
];

export default function SpecializedServices() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Specialized Loan Services</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We provide tailored gold loan solutions for every need, ensuring you get the right support at the right time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-600">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}