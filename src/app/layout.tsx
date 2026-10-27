import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoldLoan Finder | Instant & Secure Gold Loans",
  description:
    "Find nearest gold loan shops, compare interest rates, and get instant cash securely. Trusted by 50,000+ customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-gray-50 text-gray-900`}
      >
        <Suspense fallback={<div className="h-[76px]" aria-hidden="true" />}>
          <Navbar />
        </Suspense>

        <main className="flex-1">{children}</main>

        <Footer />

        <Toaster position="top-right" richColors expand closeButton />
      </body>
    </html>
  );
}
