import { Skeleton } from "@/components/ui/skeleton"

export default function PackageLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative h-96">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Skeleton */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            {/* Highlights Skeleton */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-8 w-40 mb-4" />
                <div className="grid md:grid-cols-2 gap-3">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Itinerary Skeleton */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-8 w-48 mb-6" />
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-48" />
                      </div>
                      <div className="space-y-2 ml-4">
                        {Array(4)
                          .fill(0)
                          .map((_, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-200 rounded-full mt-2 flex-shrink-0" />
                              <Skeleton className="h-4 w-full" />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Included/Not Included Skeleton */}
            <div className="grid md:grid-cols-2 gap-6">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-6">
                      <Skeleton className="h-8 w-40 mb-4" />
                      <div className="space-y-2">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0" />
                              <Skeleton className="h-4 w-full" />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <Skeleton className="h-8 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>

                <div className="space-y-4 mb-6">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-5 w-5" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
