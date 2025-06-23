import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Filter, Search, ShoppingBag } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function MarketplacePage() {
  const products = [
    {
      id: 1,
      title: "Handwoven Kente Cloth",
      vendor: "Ashanti Crafts",
      price: "GH₵ 450",
      rating: 4.8,
      reviews: 56,
      category: "Fabrics",
    },
    {
      id: 2,
      title: "Carved Wooden Mask",
      vendor: "Heritage Arts",
      price: "GH₵ 280",
      rating: 4.7,
      reviews: 42,
      category: "Art",
    },
    {
      id: 3,
      title: "Adinkra Print Fabric",
      vendor: "Kumasi Textiles",
      price: "GH₵ 180",
      rating: 4.9,
      reviews: 38,
      category: "Fabrics",
    },
    {
      id: 4,
      title: "Handcrafted Beaded Necklace",
      vendor: "Accra Jewelry",
      price: "GH₵ 120",
      rating: 4.6,
      reviews: 29,
      category: "Jewelry",
    },
    {
      id: 5,
      title: "Traditional Djembe Drum",
      vendor: "Rhythm Crafts",
      price: "GH₵ 350",
      rating: 4.8,
      reviews: 34,
      category: "Instruments",
    },
    {
      id: 6,
      title: "Hand-painted Ceramic Bowl",
      vendor: "Clay Artisans",
      price: "GH₵ 85",
      rating: 4.5,
      reviews: 22,
      category: "Home Decor",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-blue-600 text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">African Arts & Crafts Marketplace</h1>
            <p className="max-w-2xl">
              Discover authentic African fabrics, art pieces, jewelry, and home decor from verified artisans and
              vendors.
            </p>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-6">
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  All Items
                </TabsTrigger>
                <TabsTrigger value="fabrics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Fabrics
                </TabsTrigger>
                <TabsTrigger value="art" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Art & Sculptures
                </TabsTrigger>
                <TabsTrigger value="jewelry" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Jewelry
                </TabsTrigger>
                <TabsTrigger value="home" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Home Decor
                </TabsTrigger>
                <TabsTrigger value="fashion" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Fashion
                </TabsTrigger>
              </TabsList>

              <div className="relative">
                <div className="flex items-center border rounded-lg bg-white p-2 mb-6">
                  <Search className="h-5 w-5 text-gray-500 ml-2" />
                  <Input
                    placeholder="Search for products..."
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Filters */}
                  <div className="lg:w-1/4 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h2 className="font-bold text-lg mb-4 flex items-center">
                        <Filter className="h-5 w-5 mr-2" />
                        Filters
                      </h2>

                      <div className="space-y-6">
                        {/* Categories */}
                        <div>
                          <h3 className="font-medium mb-2">Categories</h3>
                          <div className="space-y-2">
                            {["Fabrics", "Art", "Sculptures", "Jewelry", "Home Decor", "Fashion", "Instruments"].map(
                              (category) => (
                                <div key={category} className="flex items-center space-x-2">
                                  <Checkbox id={`category-${category}`} />
                                  <label htmlFor={`category-${category}`} className="text-sm">
                                    {category}
                                  </label>
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Vendors */}
                        <div>
                          <h3 className="font-medium mb-2">Vendors</h3>
                          <div className="space-y-2">
                            {[
                              "Ashanti Crafts",
                              "Heritage Arts",
                              "Kumasi Textiles",
                              "Accra Jewelry",
                              "Rhythm Crafts",
                            ].map((vendor) => (
                              <div key={vendor} className="flex items-center space-x-2">
                                <Checkbox id={`vendor-${vendor}`} />
                                <label htmlFor={`vendor-${vendor}`} className="text-sm">
                                  {vendor}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                      </div>
                    </div>
                  </div>

                  {/* Product Listings */}
                  <div className="lg:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-gray-500">Showing {products.length} products</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Sort by:</span>
                        <select className="border rounded-md p-1 text-sm">
                          <option>Featured</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Rating</option>
                          <option>Newest</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden border">
                          <Link
                            href={`/marketplace/${product.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^a-z0-9-]/g, "")}`}
                          >
                            <div className="h-48 bg-gray-100 relative cursor-pointer hover:opacity-90 transition-opacity">
                              <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                                {product.category}
                              </div>
                            </div>
                          </Link>
                          <div className="p-4">
                            <Link
                              href={`/marketplace/${product.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^a-z0-9-]/g, "")}`}
                            >
                              <h3 className="font-bold text-lg">{product.title}</h3>
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">by {product.vendor}</div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="font-bold text-lg">{product.price}</div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">
                                  {product.rating} ({product.reviews})
                                </span>
                              </div>
                            </div>
                            <Link href={`/cart`}>
                              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Add to Cart
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Other tab contents would be similar to the "all" tab but with filtered products */}
              <TabsContent value="fabrics" className="mt-0">
                {/* Similar structure as "all" tab but filtered for fabrics */}
              </TabsContent>
              <TabsContent value="art" className="mt-0">
                {/* Similar structure as "all" tab but filtered for art */}
              </TabsContent>
              <TabsContent value="jewelry" className="mt-0">
                {/* Similar structure as "all" tab but filtered for jewelry */}
              </TabsContent>
              <TabsContent value="home" className="mt-0">
                {/* Similar structure as "all" tab but filtered for home decor */}
              </TabsContent>
              <TabsContent value="fashion" className="mt-0">
                {/* Similar structure as "all" tab but filtered for fashion */}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
