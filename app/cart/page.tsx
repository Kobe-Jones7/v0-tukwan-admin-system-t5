import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Handwoven Kente Cloth",
      vendor: "Ashanti Crafts",
      price: 450,
      originalPrice: 520,
      quantity: 1,
      image: "/images/kente-cloth.png",
      category: "Fabrics",
      inStock: true,
      description: "Authentic traditional Kente cloth with intricate patterns",
    },
    {
      id: 2,
      title: "Carved Wooden Mask",
      vendor: "Heritage Arts",
      price: 280,
      originalPrice: 320,
      quantity: 2,
      image: "/images/wooden-mask.png",
      category: "Art",
      inStock: true,
      description: "Hand-carved traditional African mask",
    },
    {
      id: 3,
      title: "Handcrafted Beaded Necklace",
      vendor: "Accra Jewelry",
      price: 120,
      quantity: 1,
      image: "/images/beaded-necklace.png",
      category: "Jewelry",
      inStock: true,
      description: "Colorful traditional beaded necklace",
    },
    {
      id: 4,
      title: "Adinkra Print Fabric",
      vendor: "Kumasi Textiles",
      price: 180,
      originalPrice: 200,
      quantity: 3,
      image: "/images/adinkra-fabric.png",
      category: "Fabrics",
      inStock: true,
      description: "Traditional Adinkra symbols on quality fabric",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 300 ? 0 : 25
  const tax = Math.round(subtotal * 0.125) // 12.5% VAT
  const total = subtotal + shipping + tax

  const recommendedItems = [
    {
      id: 5,
      title: "Traditional Djembe Drum",
      vendor: "Rhythm Crafts",
      price: 350,
      image: "/placeholder.svg?height=200&width=200&query=African djembe drum",
      category: "Instruments",
    },
    {
      id: 6,
      title: "Brass Ashanti Weight Set",
      vendor: "Heritage Metals",
      price: 95,
      image: "/placeholder.svg?height=200&width=200&query=Ashanti brass weights",
      category: "Collectibles",
    },
    {
      id: 7,
      title: "Woven Basket Collection",
      vendor: "Northern Crafts",
      price: 65,
      image: "/placeholder.svg?height=200&width=200&query=African woven baskets",
      category: "Home Decor",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/marketplace">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-gray-600">Review your African marketplace selections</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Cart Items ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative h-24 w-24 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                        <Badge className="absolute -top-2 -right-2 text-xs">{item.category}</Badge>
                      </div>

                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-gray-600">by {item.vendor}</p>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm">
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="outline" size="sm">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-blue-600">GH₵ {item.price}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">GH₵ {item.originalPrice}</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">Total: GH₵ {item.price * item.quantity}</div>
                          </div>

                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommended Items */}
              <Card>
                <CardHeader>
                  <CardTitle>You Might Also Like</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {recommendedItems.map((item) => (
                      <div key={item.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="relative h-32 mb-3">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">by {item.vendor}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-600">GH₵ {item.price}</span>
                          <Button size="sm" variant="outline">
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>GH₵ {subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "FREE" : `GH₵ ${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT (12.5%)</span>
                      <span>GH₵ {tax}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">GH₵ {total}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/checkout">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Save for Later
                    </Button>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code</label>
                    <div className="flex gap-2">
                      <Input placeholder="Enter code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Free shipping on orders over GH₵ 300</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span>Authenticity guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vendor Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Supporting Local Artisans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600 mb-3">
                    Your purchase directly supports {cartItems.length} local Ghanaian artisans and their communities.
                  </p>
                  <div className="space-y-2">
                    {Array.from(new Set(cartItems.map((item) => item.vendor))).map((vendor) => (
                      <div key={vendor} className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{vendor}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
