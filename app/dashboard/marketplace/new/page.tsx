import React from 'react'

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import MarketplaceForm from "@/components/dashboard/marketplace/form"
import BackButton from "@/components/dashboard/back-button"
import { routes } from "@/routes"

type Props = {}

const Page = (props: Props) => {
    return (
        <DashboardLayout>
            <div className="flex items-center gap-2 mb-8">
                <BackButton link={routes.dashboard.marketplace.index} />
                <div>
                    <h1 className="text-2xl font-bold">Add New Marketplace Item</h1>
                </div>
            </div>

            <MarketplaceForm />
        </DashboardLayout>
    )
}

export default Page