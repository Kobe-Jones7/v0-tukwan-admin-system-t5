import { ArrowLeft } from "lucide-react"
import type React from "react"
import Link from "next/link"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import TourPackageForm from "@/components/dashboard/tour-packages/form"
import { Button } from "@/components/ui/button"
import BackButton from "@/components/dashboard/back-button"
import { routes } from "@/routes"

export default function NewTourPackagePage() {

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-8">
        <BackButton link={routes.dashboard.packages.index} />
        <div>
          <h1 className="text-2xl font-bold">Add New Tour Package</h1>
          <p className="text-gray-500 mt-1">Create a comprehensive tour package for your customers</p>
        </div>
      </div>

      <TourPackageForm />

    </DashboardLayout>
  )
}
