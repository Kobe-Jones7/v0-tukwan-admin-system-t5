import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function SettingsLoading() {
  return (
    <DashboardLayout partnerType="tour-operator">
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72 mt-2" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-10 w-96" />

          <div className="space-y-4">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <Skeleton className="h-[250px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
