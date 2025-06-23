import { Skeleton } from "@/components/ui/skeleton"

export default function TourPackagesLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Skeleton */}
      <div className="w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      <div className="flex-1">
        {/* Hero Skeleton */}
        <div className="bg-blue-600 py-12">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-10 w-64 bg-blue-500" />
            <Skeleton className="h-6 w-96 mt-4 bg-blue-500" />
          </div>
        </div>

        <div className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Skeleton */}
              <div className="lg:w-1/4 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <Skeleton className="h-8 w-40 mb-4" />
                  <div className="space-y-6">
                    <div>
                      <Skeleton className="h-5 w-24 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-5 w-24 mb-2" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </div>
                    <div>
                      <Skeleton className="h-5 w-24 mb-2" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>

              {/* Package Listings Skeleton */}
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <Skeleton className="h-10 w-64" />
                  <Skeleton className="h-8 w-40" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <div key={i} className="border rounded-lg overflow-hidden">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-4 space-y-3">
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-1/2" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <div className="flex gap-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-16" />
                          </div>
                          <Skeleton className="h-10 w-full" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
