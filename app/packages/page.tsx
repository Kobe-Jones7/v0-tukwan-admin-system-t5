import { ExpandedPackagesView } from "@/components/expanded-packages-view"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { getAllPackages } from "@/data/tour-packages"

export default function PackagesPage() {
  const packages = getAllPackages()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-blue-600 text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">Tour Packages</h1>
            <p className="max-w-2xl">
              Discover our carefully curated tour packages that showcase the best of Ghana's natural beauty, rich
              culture, and historical sites.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            {packages && packages.length > 0 ? (
              <ExpandedPackagesView />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">No packages available</h2>
                <p className="text-gray-600">Please check back later for tour packages.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
