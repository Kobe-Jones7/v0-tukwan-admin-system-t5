"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CreditCard, Landmark, Wallet } from "lucide-react"

const paymentMethodSchema = z
  .object({
    type: z.enum(["bank", "mobile-money", "card"]),
    bankName: z.string().optional(),
    accountNumber: z.string().optional(),
    accountName: z.string().optional(),
    mobileProvider: z.string().optional(),
    mobileNumber: z.string().optional(),
    cardNumber: z.string().optional(),
    cardName: z.string().optional(),
    expiryDate: z.string().optional(),
    cvv: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === "bank") {
        return !!data.bankName && !!data.accountNumber && !!data.accountName
      }
      if (data.type === "mobile-money") {
        return !!data.mobileProvider && !!data.mobileNumber
      }
      if (data.type === "card") {
        return !!data.cardNumber && !!data.cardName && !!data.expiryDate && !!data.cvv
      }
      return true
    },
    {
      message: "Please fill in all required fields for the selected payment method",
    },
  )

const redeemSchema = z.object({
  amount: z.string().min(1, {
    message: "Please enter an amount.",
  }),
  paymentMethod: z.string({
    required_error: "Please select a payment method.",
  }),
})

type PaymentMethodValues = z.infer<typeof paymentMethodSchema>
type RedeemValues = z.infer<typeof redeemSchema>

interface PaymentSettingsProps {
  partnerType: "tour-guide" | "vendor" | "tour-operator"
}

export function PaymentSettings({ partnerType }: PaymentSettingsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [paymentMethodAdded, setPaymentMethodAdded] = useState(false)
  const [redeemSuccess, setRedeemSuccess] = useState(false)

  // Default values for the payment method form
  const defaultPaymentValues: Partial<PaymentMethodValues> = {
    type: "bank",
  }

  const paymentMethodForm = useForm<PaymentMethodValues>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: defaultPaymentValues,
  })

  // Default values for the redeem form
  const defaultRedeemValues: Partial<RedeemValues> = {
    amount: "",
    paymentMethod: "bank-account",
  }

  const redeemForm = useForm<RedeemValues>({
    resolver: zodResolver(redeemSchema),
    defaultValues: defaultRedeemValues,
  })

  function onPaymentMethodSubmit(data: PaymentMethodValues) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
      setPaymentMethodAdded(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setPaymentMethodAdded(false)
      }, 5000)
    }, 1000)
  }

  function onRedeemSubmit(data: RedeemValues) {
    setIsRedeeming(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsRedeeming(false)
      setRedeemSuccess(true)

      // Reset form
      redeemForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        setRedeemSuccess(false)
      }, 5000)
    }, 1000)
  }

  // Only show redeem section for tour guides and vendors
  const showRedeem = partnerType === "tour-guide" || partnerType === "vendor"

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Add or update your payment methods for receiving payments.</CardDescription>
        </CardHeader>
        <CardContent>
          {paymentMethodAdded && (
            <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your payment method has been added successfully.</AlertDescription>
            </Alert>
          )}

          <Form {...paymentMethodForm}>
            <form onSubmit={paymentMethodForm.handleSubmit(onPaymentMethodSubmit)} className="space-y-6">
              <FormField
                control={paymentMethodForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Payment Method Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-3 space-y-0">
                          <RadioGroupItem value="bank" id="bank" />
                          <label htmlFor="bank" className="flex items-center gap-2 cursor-pointer font-normal">
                            <Landmark className="h-4 w-4" />
                            Bank Account
                          </label>
                        </div>
                        <div className="flex items-center space-x-3 space-y-0">
                          <RadioGroupItem value="mobile-money" id="mobile-money" />
                          <label htmlFor="mobile-money" className="flex items-center gap-2 cursor-pointer font-normal">
                            <Wallet className="h-4 w-4" />
                            Mobile Money
                          </label>
                        </div>
                        <div className="flex items-center space-x-3 space-y-0">
                          <RadioGroupItem value="card" id="card" />
                          <label htmlFor="card" className="flex items-center gap-2 cursor-pointer font-normal">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {paymentMethodForm.watch("type") === "bank" && (
                <div className="space-y-4">
                  <FormField
                    control={paymentMethodForm.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a bank" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ghana-commercial-bank">Ghana Commercial Bank</SelectItem>
                              <SelectItem value="ecobank">Ecobank</SelectItem>
                              <SelectItem value="stanbic-bank">Stanbic Bank</SelectItem>
                              <SelectItem value="zenith-bank">Zenith Bank</SelectItem>
                              <SelectItem value="access-bank">Access Bank</SelectItem>
                              <SelectItem value="fidelity-bank">Fidelity Bank</SelectItem>
                              <SelectItem value="cal-bank">CAL Bank</SelectItem>
                              <SelectItem value="absa-bank">Absa Bank</SelectItem>
                              <SelectItem value="standard-chartered">Standard Chartered</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={paymentMethodForm.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input placeholder="0123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={paymentMethodForm.control}
                      name="accountName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {paymentMethodForm.watch("type") === "mobile-money" && (
                <div className="space-y-4">
                  <FormField
                    control={paymentMethodForm.control}
                    name="mobileProvider"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Money Provider</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a provider" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="vodafone">Vodafone Cash</SelectItem>
                              <SelectItem value="airtel-tigo">AirtelTigo Money</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={paymentMethodForm.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0201234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {paymentMethodForm.watch("type") === "card" && (
                <div className="space-y-4">
                  <FormField
                    control={paymentMethodForm.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="4111 1111 1111 1111" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={paymentMethodForm.control}
                    name="cardName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name on Card</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={paymentMethodForm.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={paymentMethodForm.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Payment Method"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {showRedeem && (
        <Card>
          <CardHeader>
            <CardTitle>Redeem Money</CardTitle>
            <CardDescription>Withdraw your earnings to your preferred payment method.</CardDescription>
          </CardHeader>
          <CardContent>
            {redeemSuccess && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your redemption request has been submitted successfully. It will be processed within 1-3 business
                  days.
                </AlertDescription>
              </Alert>
            )}

            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-blue-800">Available Balance</h3>
                  <p className="text-2xl font-bold text-blue-900">GH₵ 2,450.00</p>
                </div>
                <div className="text-right">
                  <h3 className="font-medium text-blue-800">Pending</h3>
                  <p className="text-lg font-medium text-blue-900">GH₵ 350.00</p>
                </div>
              </div>
            </div>

            <Form {...redeemForm}>
              <form onSubmit={redeemForm.handleSubmit(onRedeemSubmit)} className="space-y-4">
                <FormField
                  control={redeemForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount to Redeem (GH₵)</FormLabel>
                      <FormControl>
                        <Input placeholder="1000" {...field} />
                      </FormControl>
                      <FormDescription>Minimum withdrawal amount is GH₵ 100.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={redeemForm.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bank-account">Bank Account (Ghana Commercial Bank ****6789)</SelectItem>
                          <SelectItem value="mobile-money">Mobile Money (MTN ****4567)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" disabled={isRedeeming}>
                    {isRedeeming ? "Processing..." : "Redeem Money"}
                  </Button>
                </div>
              </form>
            </Form>

            <Separator className="my-6" />

            <div>
              <h3 className="font-medium mb-4">Recent Transactions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Withdrawal to Bank Account</p>
                    <p className="text-sm text-gray-500">May 15, 2023</p>
                  </div>
                  <p className="font-medium text-red-600">-GH₵ 1,000.00</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Tour Booking Payment</p>
                    <p className="text-sm text-gray-500">May 10, 2023</p>
                  </div>
                  <p className="font-medium text-green-600">+GH₵ 450.00</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Tour Booking Payment</p>
                    <p className="text-sm text-gray-500">May 5, 2023</p>
                  </div>
                  <p className="font-medium text-green-600">+GH₵ 750.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
