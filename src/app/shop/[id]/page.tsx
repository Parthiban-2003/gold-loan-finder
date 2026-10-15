import { Suspense } from "react";
import { notFound } from "next/navigation";
import { mockShops } from "@/src/features/home/data/mockShops";
import ShopDetailsClient from "@/src/features/shop/components/ShopDetailsClient";

type ShopDetailsPageProps = {
    params: Promise<{ id: string }>;
};

export default function ShopDetailsPage({
    params,
}: ShopDetailsPageProps) {
    return (
        <Suspense
            fallback={
                <div className="container mx-auto px-4 py-12 text-center">
                    Loading shop details...
                </div>
            }
        >
            <ShopDetailsContent params={params} />
        </Suspense>
    );
}

async function ShopDetailsContent({
    params,
}: ShopDetailsPageProps) {
    const { id } = await params;

    const shop = mockShops.find((s) => s.id === id);

    if (!shop) {
        notFound();
    }

    return <ShopDetailsClient shop={shop} />;
}