import { Plus } from "lucide-react"
import Link from "next/link"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { routes } from "@/routes"
import { Card, CardContent } from "@/components/ui/card"
import { AttractionsTable } from "@/components/dashboard/attractions/attractions-table"
import { getAllMarketplaceItems } from "@/lib/queries/marketplace"
import { MarketplaceTable } from "@/components/dashboard/marketplace/marketplace-table"

export default async function MarketplacePage() {
    const { data: { items, pagination } = {}, error } = await getAllMarketplaceItems();

    return (
        <DashboardLayout>
            <div className="flex flex-wrap items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold">Marketplace</h1>
                    {/* <p className="text-gray-500 mt-1">Manage your market place items</p> */}
                </div>
                <Button className="gap-2" asChild>
                    <Link href={routes.dashboard.marketplace.new}>
                        <Plus className="h-4 w-4" />
                        Add New Item
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent>
                    {items &&
                        <MarketplaceTable {...{ items }} />
                    }

                    {!items && !error &&
                        <div className="text-center text-gray-500">
                            <p>No marketplace items found.</p>
                        </div>
                    }
                </CardContent>
            </Card>
        </DashboardLayout>
    )
}
