import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WaitlistLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-20 w-full mx-auto mt-4" />
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <div className="space-y-6">
              <div>
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-full mt-1" />
              </div>
              <div>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-10 w-full mt-1" />
              </div>
              <div>
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-10 w-full mt-1" />
              </div>
              <div>
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-10 w-full mt-1" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-12 w-full mt-6" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
