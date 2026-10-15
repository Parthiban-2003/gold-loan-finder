"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/src/types/index";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Contact Form Submitted:", data);
        toast.success("Message Sent Successfully!", {
            description: "We will get back to you within 24 hours.",
            duration: 4000,
        });

        setIsSubmitting(false);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Doe"
                        className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="9876543210"
                    className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="How can we help you?"
                    rows={5}
                    className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="h-4 w-4" />
                        Send Message
                    </>
                )}
            </Button>
        </form>
    );
}