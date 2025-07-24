import AttractionForm from '@/components/dashboard/attractions/form'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'
import { getSingleAttraction } from '@/lib/queries/attractions'
import { routes } from '@/routes'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = { params: { slug: string } }

const AttractionDetails = async ({ params }: Props) => {
    const { slug } = await params

    const { data: attraction } = await getSingleAttraction(slug)
    console.log('attraction:', attraction)

    return (
        <DashboardLayout>
            {!attraction && <></>}
            {attraction &&
                <>
                    <div className="flex items-center gap-2 mb-8">
                        <Button variant="outline" size="icon" asChild>
                            <Link href={routes.dashboard.attractions.index}>
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-400">
                                Attractions / <span className='text-black capitalize'>{attraction.name}</span>
                            </h1>
                        </div>
                    </div>
                    <AttractionForm data={attraction} />
                </>
            }
        </DashboardLayout>
    )
}

export default AttractionDetails