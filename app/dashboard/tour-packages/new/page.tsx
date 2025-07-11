import { ArrowLeft } from "lucide-react"
import type React from "react"
import Link from "next/link"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import TourPackageForm from "@/components/dashboard/tour-packages/form"
import { Button } from "@/components/ui/button"

export default function NewTourPackagePage() {

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/tour-packages">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Add New Tour Package</h1>
          <p className="text-gray-500 mt-1">Create a comprehensive tour package for your customers</p>
        </div>
      </div>

      <TourPackageForm />

    </DashboardLayout>
  )
}
