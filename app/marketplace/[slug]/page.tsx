import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, ShoppingBag, Truck, Shield, Award } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

// Mock product data - in a real app this would come from a database
const getProductBySlug = (slug: string) => {
  const products = {
    "handwoven-kente-cloth": {
      id: 1,
      title: "Handwoven Kente Cloth",
      vendor: "Ashanti Crafts",
      price: 450,
      originalPrice: 520,
      rating: 4.8,
      reviews: 56,
      category: "Fabrics",
      description:
        "Authentic handwoven Kente cloth featuring traditional Ashanti patterns and vibrant colors. Each piece tells a story through its intricate designs and symbolic meanings.",
      longDescription:
        "This exquisite Kente cloth is handwoven by master craftsmen in the Ashanti region of Ghana. The traditional patterns represent various proverbs, historical events, and philosophical concepts. Made from high-quality cotton and silk threads, this piece showcases the rich cultural heritage of Ghana.",
      images: [
        "/images/kente-cloth.png",
        "/placeholder.svg?height=400&width=400&query=kente+cloth+detail",
        "/placeholder.svg?height=400&width=400&query=kente+weaving+process",
      ],
      inStock: true,
      stockCount: 12,
      features: [
        "100% authentic handwoven",
        "Traditional Ashanti patterns",
        "High-quality cotton and silk",
        "Symbolic cultural meanings",
        "Certificate of authenticity included",
      ],
      specifications: {
        Material: "Cotton and Silk blend",
        Dimensions: "6 yards x 4 inches",
        Origin: "Ashanti Region, Ghana",
        "Weaving Time": "2-3 weeks per piece",
        "Care Instructions": "Dry clean only",
      },
    },
    "carved-wooden-mask": {
      id: 2,
      title: "Carved Wooden Mask",
      vendor: "Heritage Arts",
      price: 280,
      originalPrice: 320,
      rating: 4.7,
      reviews: 42,
      category: "Art",
      description: "Hand-carved traditional wooden mask representing ancestral spirits and cultural heritage.",
      longDescription:
        "This stunning wooden mask is carved from premium African hardwood by skilled artisans. Each mask represents different aspects of Ghanaian spiritual and cultural traditions.",
      images: [
        "/images/wooden-mask.png",
        "/placeholder.svg?height=400&width=400&query=wooden+mask+side+view",
        "/placeholder.svg?height=400&width=400&query=mask+carving+process",
      ],
      inStock: true,
      stockCount: 8,
      features: [
        "Hand-carved from African hardwood",
        "Traditional spiritual significance",
        "Unique artistic design",
        "Museum-quality craftsmanship",
        "Cultural authenticity certificate",
      ],
      specifications: {
        Material: "African Hardwood",
        Dimensions: "12 inches x 8 inches",
        Weight: "1.2 kg",
        Origin: "Northern Ghana",
        Finish: "Natural wood stain",
      },
    },
  }

  return products[slug as keyof typeof products] || null
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/marketplace">
            <Button>Return to Marketplace</Button>
          </Link>
        </div>
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/marketplace" className="hover:text-blue-600">
              Marketplace
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
                {discount > 0 && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} - Image ${index + 2}`}
                      fill
                      className="object-cover cursor-pointer hover:opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-600">by {product.vendor}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">GH₵ {product.price.toLocaleString()}</div>
                {product.originalPrice && (
                  <div className="text-xl text-gray-500 line-through">GH₵ {product.originalPrice.toLocaleString()}</div>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                  <span className="text-sm">
                    {product.inStock ? `In Stock (${product.stockCount} available)` : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/cart">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg" disabled={!product.inStock}>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart - GH₵ {product.price.toLocaleString()}
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12">
                    <Heart className="mr-2 h-4 w-4" />
                    Save for Later
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-gray-600">Orders over GH₵ 300</div>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm font-medium">Authentic</div>
                  <div className="text-xs text-gray-600">Certified genuine</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm font-medium">Artisan Made</div>
                  <div className="text-xs text-gray-600">Supporting locals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Long Description */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>About This Product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
