import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'
import { routes } from '@/routes'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AttractionDetails = (props: Props) => {
    return (
        <DashboardLayout>
            <div className="flex items-center gap-2 mb-8">
                <Button variant="outline" size="icon" asChild>
                    <Link href={routes.dashboard.attractions.index}>
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </DashboardLayout>
    )
}

export default AttractionDetails