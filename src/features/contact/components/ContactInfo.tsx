"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Head Office",
        value: "123, Anna Salai, T. Nagar,\nChennai, Tamil Nadu 600017",
        color: "text-amber-600",
        bg: "bg-amber-100",
    },
    {
        icon: Phone,
        title: "Phone Number",
        value: "+91 98765 43210\n+91 44 1234 5678",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: Mail,
        title: "Email Address",
        value: "support@goldloanfinder.com\ninfo@goldloanfinder.com",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 4:00 PM",
        color: "text-purple-600",
        bg: "bg-purple-100",
    },
];

export default function ContactInfo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactDetails.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                            {item.value}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}