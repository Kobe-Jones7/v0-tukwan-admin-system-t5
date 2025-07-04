import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, ArrowRight } from "lucide-react"

export function VendorShowcase() {
  const products = [
    {
      id: 1,
      name: "Traditional Kente Cloth",
      vendor: "Bonwire Weavers",
      price: "GH₵ 450",
      originalPrice: "GH₵ 520",
      image: "/images/kente-cloth.png",
      rating: 4.9,
      reviews: 87,
      category: "Textiles",
    },
    {
      id: 2,
      name: "Handcrafted Wooden Mask",
      vendor: "Kumasi Artisans",
      price: "GH₵ 180",
      originalPrice: "GH₵ 220",
      image: "/images/wooden-mask.png",
      rating: 4.7,
      reviews: 64,
      category: "Art",
    },
    {
      id: 3,
      name: "Adinkra Fabric Print",
      vendor: "Ntonso Craftsmen",
      price: "GH₵ 120",
      originalPrice: "GH₵ 150",
      image: "/images/adinkra-fabric.png",
      rating: 4.8,
      reviews: 92,
      category: "Textiles",
    },
    {
      id: 4,
      name: "Beaded Jewelry Set",
      vendor: "Accra Beadworks",
      price: "GH₵ 85",
      originalPrice: "GH₵ 110",
      image: "/images/beaded-necklace.png",
      rating: 4.6,
      reviews: 73,
      category: "Jewelry",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Local Marketplace</h2>
            <p className="text-gray-600">Authentic Ghanaian crafts and products from local artisans</p>
          </div>
          <Link href="/marketplace">
            <Button variant="ghost" className="gap-2">
              View marketplace <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-green-600">{product.category}</Badge>
                {product.originalPrice && <Badge className="absolute top-3 left-3 bg-red-600">Sale</Badge>}
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-gray-500">by {product.vendor}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/marketplace/${product.id}`} className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
