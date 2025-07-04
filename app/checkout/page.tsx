"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CreditCard, Wallet, Shield, Truck, CheckCircle, Smartphone, DollarSign } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("mobile-money")

  const cartItems = [
    {
      id: 1,
      title: "Handwoven Kente Cloth",
      vendor: "Ashanti Crafts",
      price: 450,
      quantity: 1,
      image: "/images/kente-cloth.png",
    },
    {
      id: 2,
      title: "Carved Wooden Mask",
      vendor: "Heritage Arts",
      price: 280,
      quantity: 2,
      image: "/images/wooden-mask.png",
    },
    {
      id: 3,
      title: "Handcrafted Beaded Necklace",
      vendor: "Accra Jewelry",
      price: 120,
      quantity: 1,
      image: "/images/beaded-necklace.png",
    },
    {
      id: 4,
      title: "Adinkra Print Fabric",
      vendor: "Kumasi Textiles",
      price: 180,
      quantity: 3,
      image: "/images/adinkra-fabric.png",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 300 ? 0 : 25
  const tax = Math.round(subtotal * 0.125) // 12.5% VAT

  // Apply discounts based on payment method
  const getDiscount = () => {
    switch (paymentMethod) {
      case "vooya-wallet":
        return Math.round(subtotal * 0.05) // 5% discount
      case "mobile-money":
        return Math.round(subtotal * 0.02) // 2% discount
      default:
        return 0
    }
  }

  const discount = getDiscount()
  const total = subtotal + shipping + tax - discount

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/cart">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cart
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Checkout</h1>
              <p className="text-gray-600">Complete your African marketplace purchase</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+233 XX XXX XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="Enter street address" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="greater-accra">Greater Accra</SelectItem>
                          <SelectItem value="ashanti">Ashanti</SelectItem>
                          <SelectItem value="western">Western</SelectItem>
                          <SelectItem value="central">Central</SelectItem>
                          <SelectItem value="eastern">Eastern</SelectItem>
                          <SelectItem value="volta">Volta</SelectItem>
                          <SelectItem value="northern">Northern</SelectItem>
                          <SelectItem value="upper-east">Upper East</SelectItem>
                          <SelectItem value="upper-west">Upper West</SelectItem>
                          <SelectItem value="brong-ahafo">Brong Ahafo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" placeholder="Enter postal code" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    {/* Mobile Money Option */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg bg-green-50 border-green-200">
                      <RadioGroupItem value="mobile-money" id="mobile-money" />
                      <Label htmlFor="mobile-money" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Smartphone className="h-5 w-5 text-green-600" />
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                Mobile Money
                                <Badge className="bg-green-100 text-green-800 text-xs">2% OFF</Badge>
                              </div>
                              <div className="text-sm text-gray-600">MTN, Vodafone, AirtelTigo</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">
                              Save GH₵ {Math.round(subtotal * 0.02)}
                            </div>
                            <div className="text-xs text-gray-500">Instant discount</div>
                          </div>
                        </div>
                      </Label>
                    </div>

                    {/* Credit Card Option */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5" />
                            <div>
                              <div className="font-medium">Credit/Debit Card</div>
                              <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Image src="/placeholder.svg?height=24&width=36" alt="Visa" width={36} height={24} />
                            <Image src="/placeholder.svg?height=24&width=36" alt="Mastercard" width={36} height={24} />
                          </div>
                        </div>
                      </Label>
                    </div>

                    {/* PayPal Option */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <DollarSign className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">PayPal</div>
                              <div className="text-sm text-gray-600">Secure online payment</div>
                            </div>
                          </div>
                          <div className="text-blue-600 font-bold">PayPal</div>
                        </div>
                      </Label>
                    </div>

                    {/* Vooya Wallet Option */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg bg-blue-50 border-blue-200">
                      <RadioGroupItem value="vooya-wallet" id="vooya-wallet" />
                      <Label htmlFor="vooya-wallet" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Wallet className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                Vooya Wallet
                                <Badge className="bg-green-100 text-green-800 text-xs">5% OFF</Badge>
                              </div>
                              <div className="text-sm text-gray-600">Pay with your Vooya wallet balance</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">
                              Save GH₵ {Math.round(subtotal * 0.05)}
                            </div>
                            <div className="text-xs text-gray-500">Instant discount</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Payment Method Forms */}
                  {paymentMethod === "mobile-money" && (
                    <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="space-y-2">
                        <Label htmlFor="mobileNetwork">Select Network</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your network" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                            <SelectItem value="vodafone">Vodafone Cash</SelectItem>
                            <SelectItem value="airteltigo">AirtelTigo Money</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobileNumber">Mobile Number</Label>
                        <Input id="mobileNumber" placeholder="0XX XXX XXXX" />
                      </div>
                      <div className="text-sm text-green-600 bg-green-100 p-3 rounded">
                        <CheckCircle className="h-4 w-4 inline mr-2" />
                        Save 2% with Mobile Money payment!
                      </div>
                    </div>
                  )}

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Enter name as on card" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 text-blue-700">
                        <DollarSign className="h-5 w-5" />
                        <span className="font-medium">PayPal Payment</span>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paypalEmail">PayPal Email</Label>
                        <Input id="paypalEmail" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="text-sm text-blue-600">
                        You'll be redirected to PayPal to complete your payment securely.
                      </div>
                    </div>
                  )}

                  {paymentMethod === "vooya-wallet" && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 text-blue-700">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Vooya Wallet Selected</span>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="walletPin">Wallet PIN</Label>
                        <Input id="walletPin" type="password" placeholder="Enter your 4-digit PIN" maxLength={4} />
                      </div>
                      <div className="text-sm text-blue-600">Current Balance: GH₵ 2,450.00</div>
                      <div className="flex items-start gap-2 text-sm text-green-700 bg-green-50 p-3 rounded">
                        <CheckCircle className="h-4 w-4 mt-0.5" />
                        <div>
                          <div className="font-medium">5% Discount Applied!</div>
                          <div>You're saving GH₵ {Math.round(subtotal * 0.05)} with Vooya Wallet</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sameAsShipping" />
                    <Label htmlFor="sameAsShipping">Same as shipping address</Label>
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
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{item.title}</div>
                          <div className="text-xs text-gray-600">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-sm font-medium">GH₵ {item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>GH₵ {subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "FREE" : `GH₵ ${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>VAT (12.5%)</span>
                      <span>GH₵ {tax}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>
                          {paymentMethod === "mobile-money" && "Mobile Money Discount (2%)"}
                          {paymentMethod === "vooya-wallet" && "Vooya Wallet Discount (5%)"}
                        </span>
                        <span>-GH₵ {discount}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">GH₵ {total}</span>
                    </div>
                    {discount > 0 && <div className="text-xs text-green-600 text-right">You saved GH₵ {discount}!</div>}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                    <Shield className="mr-2 h-4 w-4" />
                    Complete Order
                  </Button>
                </CardContent>
              </Card>

              {/* Security & Trust */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>SSL encrypted checkout</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Free shipping on orders over GH₵ 300</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Authenticity guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method Benefits */}
              {(paymentMethod === "vooya-wallet" || paymentMethod === "mobile-money") && (
                <Card
                  className={`border-${paymentMethod === "vooya-wallet" ? "blue" : "green"}-200 bg-${paymentMethod === "vooya-wallet" ? "blue" : "green"}-50`}
                >
                  <CardHeader>
                    <CardTitle className={`text-${paymentMethod === "vooya-wallet" ? "blue" : "green"}-800 text-sm`}>
                      {paymentMethod === "vooya-wallet" ? "Vooya Wallet Benefits" : "Mobile Money Benefits"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`space-y-2 text-sm text-${paymentMethod === "vooya-wallet" ? "blue" : "green"}-700`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3" />
                        <span>{paymentMethod === "vooya-wallet" ? "5%" : "2%"} instant discount on all purchases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3" />
                        <span>Faster checkout process</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3" />
                        <span>Enhanced purchase protection</span>
                      </div>
                      {paymentMethod === "vooya-wallet" && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3" />
                          <span>Earn rewards on every transaction</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
