import type React from "react"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import MarketplaceForm from "@/components/dashboard/marketplace/form"
import { getMarketplaceItem } from "@/lib/queries/marketplace"
import BackButton from "@/components/dashboard/back-button"
import { routes } from "@/routes"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function MarketplaceItemDetailsPage({ params }: Props) {
    const { slug } = await params
    const { error, data } = await getMarketplaceItem({ slug })

    return (
        <DashboardLayout>
            <div className="flex items-center gap-2 mb-8">
                <BackButton link={routes.dashboard.marketplace.index} />
                <div>
                    <h1 className="text-2xl font-bold">Edit Item ({data?.name})</h1>
                </div>
            </div>

            {error && <>Failed to load marketplace item</>}

            {data && <MarketplaceForm {...{ data }} />}

        </DashboardLayout>
    )
}
