import { Skeleton } from "@/components/ui/skeleton"

export default function PackageDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Skeleton */}
      <div className="w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-8 w-32" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-3">
          <Skeleton className="h-4 w-64" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="relative h-96 md:h-[500px]">
        <Skeleton className="h-full w-full" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 md:px-6 pb-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-6 w-24 bg-gray-300/50" />
                <Skeleton className="h-6 w-20 bg-gray-300/50" />
              </div>
              <Skeleton className="h-16 w-96 bg-gray-300/50 mb-4" />
              <div className="flex flex-wrap items-center gap-6">
                <Skeleton className="h-6 w-32 bg-gray-300/50" />
                <Skeleton className="h-6 w-24 bg-gray-300/50" />
                <Skeleton className="h-6 w-28 bg-gray-300/50" />
                <Skeleton className="h-6 w-36 bg-gray-300/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-24" />
              </div>
              <div className="space-y-6 pt-6">
                <div className="border rounded-lg p-6 space-y-4">
                  <Skeleton className="h-8 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-32" />
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className="flex justify-between">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        ))}
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-32" />
                      {Array(2)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-full" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 space-y-4">
                  <Skeleton className="h-8 w-40" />
                  <div className="grid md:grid-cols-2 gap-3">
                    {Array(8)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Skeleton className="h-5 w-5 rounded-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 space-y-6">
              <div className="text-center">
                <Skeleton className="h-10 w-32 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto mt-2" />
              </div>

              <div className="flex items-center justify-center gap-2">
                <Skeleton className="h-5 w-24" />
              </div>

              <div className="space-y-4">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
              </div>

              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-md" />
                <Skeleton className="h-12 w-full rounded-md" />
                <Skeleton className="h-12 w-full rounded-md" />
              </div>

              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
