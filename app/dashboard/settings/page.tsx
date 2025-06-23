import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  return (
    <DashboardLayout partnerType="tour-operator">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile information visible to customers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+233 XX XXX XXXX" defaultValue="+233 50 123 4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell customers about yourself or your business"
                    defaultValue="Experienced tour operator specializing in cultural and historical tours across Ghana."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Details</CardTitle>
                <CardDescription>Update your business information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business name</Label>
                    <Input id="businessName" placeholder="Tukwan Tours" defaultValue="Tukwan Tours" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business type</Label>
                    <Select defaultValue="tour-operator">
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tour-guide">Tour Guide</SelectItem>
                        <SelectItem value="vendor">Vendor</SelectItem>
                        <SelectItem value="tour-operator">Tour Operator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" defaultValue="123 Independence Ave" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Accra" defaultValue="Accra" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select defaultValue="greater-accra">
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="greater-accra">Greater Accra</SelectItem>
                        <SelectItem value="ashanti">Ashanti</SelectItem>
                        <SelectItem value="western">Western</SelectItem>
                        <SelectItem value="eastern">Eastern</SelectItem>
                        <SelectItem value="central">Central</SelectItem>
                        <SelectItem value="northern">Northern</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deactivate Account</CardTitle>
                <CardDescription>Temporarily deactivate your account. You can reactivate anytime.</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Deactivating your account will hide your profile and listings from customers. All bookings and data
                    will be preserved.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter>
                <Button variant="destructive">Deactivate Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Add or update your payment methods for receiving payments.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment method</Label>
                  <Select defaultValue="bank">
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Account</SelectItem>
                      <SelectItem value="mobile">Mobile Money</SelectItem>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank name</Label>
                    <Input id="bankName" placeholder="Bank name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account number</Label>
                    <Input id="accountNumber" placeholder="Account number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Account name</Label>
                    <Input id="accountName" placeholder="Account name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branchCode">Branch code</Label>
                    <Input id="branchCode" placeholder="Branch code" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Payment Method</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redeem Money</CardTitle>
                <CardDescription>Withdraw your available balance to your payment method.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">Available Balance</p>
                    <p className="text-2xl font-bold">GHS 2,450.00</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pending</p>
                    <p className="text-lg font-semibold">GHS 750.00</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="withdrawAmount">Amount to withdraw</Label>
                  <Input id="withdrawAmount" placeholder="Enter amount" type="number" min="100" />
                  <p className="text-xs text-muted-foreground">Minimum withdrawal: GHS 100.00</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="withdrawMethod">Withdraw to</Label>
                  <Select defaultValue="bank-1">
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-1">Bank Account (GCB Bank - ****4567)</SelectItem>
                      <SelectItem value="mobile-1">Mobile Money (MTN - ****7890)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Withdraw Funds</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Configure which emails you want to receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailBookings">Booking notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive emails when you get new bookings</p>
                  </div>
                  <Switch id="emailBookings" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailPayments">Payment notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive emails for payment updates</p>
                  </div>
                  <Switch id="emailPayments" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailReviews">Review notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive emails when customers leave reviews</p>
                  </div>
                  <Switch id="emailReviews" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailMarketing">Marketing emails</Label>
                    <p className="text-sm text-muted-foreground">Receive promotional emails and newsletters</p>
                  </div>
                  <Switch id="emailMarketing" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Notification Preferences</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
                <CardDescription>Configure push notifications for the mobile app.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="pushBookings">Booking notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications for new bookings</p>
                  </div>
                  <Switch id="pushBookings" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="pushMessages">Message notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications for new messages</p>
                  </div>
                  <Switch id="pushMessages" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="pushUpdates">System updates</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications for system updates</p>
                  </div>
                  <Switch id="pushUpdates" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Notification Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
