import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function AttractionsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] md:h-[400px]">
        <Skeleton className="h-full w-full" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-6 w-full max-w-xl mb-8" />
              <Skeleton className="h-12 w-full max-w-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* Filters Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-[180px]" />
          </div>
          <Skeleton className="h-10 w-[150px]" />
        </div>

        {/* Results Count Skeleton */}
        <Skeleton className="h-5 w-64 mb-6" />

        {/* Grid View Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="pt-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
