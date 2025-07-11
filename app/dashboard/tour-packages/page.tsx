import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Plus, MoreHorizontal, Search, Edit, Trash, Eye, Calendar, Users } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PackagesTable } from "@/components/dashboard/tour-packages/packages-table"
import { getAllTourPackages } from "@/lib/queries/tour-packages"
import { routes } from "@/routes"


export default async function TourPackagesPage() {

  const { data: packages, error } = await getAllTourPackages();
  console.log(packages)


  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Tour Packages</h1>
          {/* <p className="text-gray-500 mt-1">Manage your tour package offerings</p> */}
        </div>
        <Button className="gap-2" asChild>
          <Link href={routes.dashboard.packages.new}>
            <Plus className="h-4 w-4" />
            Add New Package
          </Link>
        </Button>
      </div>

      <Card>
        <CardContent>
          {packages &&
            <PackagesTable {...{ packages }} />
          }

          {error && <>{error}</>}
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
