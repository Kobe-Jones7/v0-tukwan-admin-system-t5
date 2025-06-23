"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { GuidesPage } from "@/components/dashboard/guides/guides-page"

export default function Guides() {
  return (
    <DashboardLayout partnerType="tour-operator">
      <GuidesPage />
    </DashboardLayout>
  )
}
