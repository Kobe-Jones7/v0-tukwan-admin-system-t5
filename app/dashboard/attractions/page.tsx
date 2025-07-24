import { Plus } from "lucide-react"
import Link from "next/link"

import { AttractionsTable } from "@/components/dashboard/attractions/attractions-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { getAllAttractions } from "@/lib/queries/attractions"
import { Button } from "@/components/ui/button"
import { routes } from "@/routes"

export default async function ToursPage() {
  const { data: attractions, error } = await getAllAttractions();

  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Attractions</h1>
          {/* <p className="text-gray-500 mt-1">Manage your tour package offerings</p> */}
        </div>
        <Button className="gap-2" asChild>
          <Link href={routes.dashboard.attractions.new}>
            <Plus className="h-4 w-4" />
            Add New Attraction
          </Link>
        </Button>
      </div>

      <Card>
        <CardContent>
          {attractions &&
            <AttractionsTable {...{ attractions }} />
          }

          {error && <>{error}</>}
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
