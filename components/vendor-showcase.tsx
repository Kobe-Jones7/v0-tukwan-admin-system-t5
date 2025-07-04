import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, ShoppingBag } from "lucide-react"

export function VendorShowcase() {
  const products = [
    {
      id: 1,
      title: "Handwoven Kente Cloth",
      vendor: "Ashanti Crafts",
      price: "GH₵ 450",
      rating: 4.8,
      reviews: 56,
      category: "Fabrics",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Carved Wooden Mask",
      vendor: "Heritage Arts",
      price: "GH₵ 280",
      rating: 4.7,
      reviews: 42,
      category: "Art",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Adinkra Print Fabric",
      vendor: "Kumasi Textiles",
      price: "GH₵ 180",
      rating: 4.9,
      reviews: 38,
      category: "Fabrics",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Handcrafted Beaded Necklace",
      vendor: "Accra Jewelry",
      price: "GH₵ 120",
      rating: 4.6,
      reviews: 29,
      category: "Jewelry",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const vendors = [
    {
      id: 1,
      name: "Ashanti Crafts",
      category: "Fabrics & Textiles",
      products: 45,
      rating: 4.8,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Heritage Arts",
      category: "Sculptures & Masks",
      products: 32,
      rating: 4.7,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Kumasi Textiles",
      category: "Traditional Fabrics",
      products: 56,
      rating: 4.9,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-16">
          {/* Marketplace Products */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">African Arts & Crafts</h2>
              <Button variant="ghost" className="gap-2">
                Visit Marketplace <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-teal-600">{product.category}</Badge>
                  </div>
                  <CardHeader className="p-4">
                    <div>
                      <h3 className="font-bold text-lg">{product.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">by {product.vendor}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-lg">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Vendors */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Vendors</h2>
              <Button variant="ghost" className="gap-2">
                View all vendors <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {vendors.map((vendor) => (
                <Card key={vendor.id} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src={vendor.image || "/placeholder.svg"}
                          alt={vendor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{vendor.name}</h3>
                        <div className="text-sm text-gray-500">{vendor.category}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{vendor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-sm">
                      <span className="font-medium">{vendor.products}</span> products available
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Visit Store</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
