"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters"),

    phone: z
        .string()
        .regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),

    email: z
        .union([
            z.literal(""),
            z.string().email("Enter a valid email address"),
        ])
        .optional(),

    goldWeight: z
        .string()
        .min(1, "Please enter the gold or silver weight")
        .refine(
            (value) => Number.isFinite(Number(value)) && Number(value) >= 1,
            "Weight must be at least 1 gram"
        ),

    metalType: z.enum(["gold", "silver"]),

    purpose: z.enum([
        "business",
        "personal",
        "medical",
        "education",
        "other",
    ]),

    preferredTime: z.enum(
        ["morning", "afternoon", "evening"],
        { message: "Please select a preferred time" }
    ),
});

type FormValues = z.infer<typeof formSchema>;

type ApplyLoanModalProps = {
    isOpen: boolean;
    onClose: () => void;
    shopName: string;
};

export default function ApplyLoanModal({
    isOpen,
    onClose,
    shopName,
}: ApplyLoanModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            goldWeight: "",
            metalType: "gold",
            purpose: "personal",
            preferredTime: undefined,
        },
        mode: "onSubmit",
    });

    const metalType = watch("metalType");
    const purpose = watch("purpose");
    const preferredTime = watch("preferredTime") ?? "";

    const handleClose = () => {
        if (isSubmitting) return;
        reset();
        onClose();
    };

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Application Submitted:", {
                shopName,
                ...data,
                goldWeight: Number(data.goldWeight),
            });

            toast.success("Application submitted successfully!", {
                description: `We will contact you regarding your loan application at ${shopName}.`,
                duration: 5000,
            });

            reset();
            onClose();
        } catch (error) {
            console.error("Application submission failed:", error);

            toast.error("Unable to submit your application", {
                description: "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) handleClose();
            }}
        >
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-xl text-slate-900">
                        Apply for Gold Loan
                    </DialogTitle>

                    <DialogDescription>
                        Fill in your details for{" "}
                        <span className="font-semibold text-amber-600">
                            {shopName}
                        </span>
                        . We will call you to confirm.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-4 space-y-4"
                    noValidate
                >
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                            id="fullName"
                            autoComplete="name"
                            placeholder="John Doe"
                            aria-invalid={!!errors.fullName}
                            {...register("fullName")}
                        />
                        {errors.fullName && (
                            <p className="text-xs text-red-500">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                maxLength={10}
                                placeholder="9876543210"
                                aria-invalid={!!errors.phone}
                                {...register("phone")}
                            />
                            {errors.phone && (
                                <p className="text-xs text-red-500">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email (Optional)</Label>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                aria-invalid={!!errors.email}
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Metal Type and Weight */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Metal Type *</Label>
                            <Select
                                value={metalType}
                                onValueChange={(value) =>
                                    setValue(
                                        "metalType",
                                        value as FormValues["metalType"],
                                        { shouldValidate: true, shouldDirty: true }
                                    )
                                }
                            >
                                <SelectTrigger aria-invalid={!!errors.metalType}>
                                    <SelectValue placeholder="Select metal" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gold">Gold</SelectItem>
                                    <SelectItem value="silver">Silver</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.metalType && (
                                <p className="text-xs text-red-500">
                                    {errors.metalType.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="goldWeight">
                                Approx. Weight (g) *
                            </Label>
                            <Input
                                id="goldWeight"
                                type="number"
                                min="1"
                                step="any"
                                inputMode="decimal"
                                placeholder="10"
                                aria-invalid={!!errors.goldWeight}
                                {...register("goldWeight")}
                            />
                            {errors.goldWeight && (
                                <p className="text-xs text-red-500">
                                    {errors.goldWeight.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Loan Purpose */}
                    <div className="space-y-2">
                        <Label>Loan Purpose *</Label>
                        <Select
                            value={purpose}
                            onValueChange={(value) =>
                                setValue(
                                    "purpose",
                                    value as FormValues["purpose"],
                                    { shouldValidate: true, shouldDirty: true }
                                )
                            }
                        >
                            <SelectTrigger aria-invalid={!!errors.purpose}>
                                <SelectValue placeholder="Select purpose" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="personal">Personal</SelectItem>
                                <SelectItem value="medical">
                                    Medical Emergency
                                </SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.purpose && (
                            <p className="text-xs text-red-500">
                                {errors.purpose.message}
                            </p>
                        )}
                    </div>

                    {/* Call Time */}
                    <div className="space-y-2">
                        <Label>Preferred Call Time *</Label>
                        <Select
                            value={preferredTime}
                            onValueChange={(value) =>
                                setValue(
                                    "preferredTime",
                                    value as FormValues["preferredTime"],
                                    { shouldValidate: true, shouldDirty: true }
                                )
                            }
                        >
                            <SelectTrigger
                                aria-invalid={!!errors.preferredTime}
                            >
                                <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="morning">
                                    Morning (9 AM - 12 PM)
                                </SelectItem>
                                <SelectItem value="afternoon">
                                    Afternoon (12 PM - 4 PM)
                                </SelectItem>
                                <SelectItem value="evening">
                                    Evening (4 PM - 7 PM)
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.preferredTime && (
                            <p className="text-xs text-red-500">
                                {errors.preferredTime.message}
                            </p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="flex-1"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-amber-500 text-white hover:bg-amber-600"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Submit Application"
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}