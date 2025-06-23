"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface NotificationSettingsProps {
  partnerType: "tour-guide" | "vendor" | "tour-operator"
}

export function NotificationSettings({ partnerType }: NotificationSettingsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [settingsSaved, setSettingsSaved] = useState(false)

  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState({
    bookings: true,
    payments: true,
    reviews: true,
    messages: true,
    promotions: false,
    newsletter: true,
  })

  const [pushNotifications, setPushNotifications] = useState({
    bookings: true,
    payments: true,
    reviews: true,
    messages: true,
    promotions: false,
  })

  const [smsNotifications, setSmsNotifications] = useState({
    bookings: true,
    payments: true,
    reviews: false,
    messages: false,
    promotions: false,
  })

  function onSubmit() {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log({
        emailNotifications,
        pushNotifications,
        smsNotifications,
      })
      setIsLoading(false)
      setSettingsSaved(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSettingsSaved(false)
      }, 5000)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how you receive notifications from Tukwan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {settingsSaved && (
          <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your notification settings have been saved successfully.</AlertDescription>
          </Alert>
        )}

        <div>
          <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-bookings">Booking Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new bookings, cancellations, and changes.
                </p>
              </div>
              <Switch
                id="email-bookings"
                checked={emailNotifications.bookings}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, bookings: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-payments">Payment Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about payments, refunds, and financial updates.
                </p>
              </div>
              <Switch
                id="email-payments"
                checked={emailNotifications.payments}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, payments: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-reviews">Review Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive emails when you get new reviews or ratings.</p>
              </div>
              <Switch
                id="email-reviews"
                checked={emailNotifications.reviews}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, reviews: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-messages">Message Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new messages from customers or Tukwan support.
                </p>
              </div>
              <Switch
                id="email-messages"
                checked={emailNotifications.messages}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, messages: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-promotions">Promotional Emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional emails about special offers and discounts.
                </p>
              </div>
              <Switch
                id="email-promotions"
                checked={emailNotifications.promotions}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, promotions: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-newsletter">Newsletter</Label>
                <p className="text-sm text-muted-foreground">Receive our monthly newsletter with updates and tips.</p>
              </div>
              <Switch
                id="email-newsletter"
                checked={emailNotifications.newsletter}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, newsletter: checked })}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-bookings">Booking Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications about new bookings and changes.
                </p>
              </div>
              <Switch
                id="push-bookings"
                checked={pushNotifications.bookings}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, bookings: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-payments">Payment Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications about payments and refunds.</p>
              </div>
              <Switch
                id="push-payments"
                checked={pushNotifications.payments}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, payments: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-reviews">Review Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for new reviews or ratings.</p>
              </div>
              <Switch
                id="push-reviews"
                checked={pushNotifications.reviews}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, reviews: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-messages">Message Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for new messages.</p>
              </div>
              <Switch
                id="push-messages"
                checked={pushNotifications.messages}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, messages: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-promotions">Promotional Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications about special offers and discounts.
                </p>
              </div>
              <Switch
                id="push-promotions"
                checked={pushNotifications.promotions}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, promotions: checked })}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">SMS Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-bookings">Booking Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts about new bookings and changes.</p>
              </div>
              <Switch
                id="sms-bookings"
                checked={smsNotifications.bookings}
                onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, bookings: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-payments">Payment Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts about payments and refunds.</p>
              </div>
              <Switch
                id="sms-payments"
                checked={smsNotifications.payments}
                onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, payments: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-reviews">Review Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts for new reviews or ratings.</p>
              </div>
              <Switch
                id="sms-reviews"
                checked={smsNotifications.reviews}
                onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, reviews: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-messages">Message Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts for new messages.</p>
              </div>
              <Switch
                id="sms-messages"
                checked={smsNotifications.messages}
                onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, messages: checked })}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-promotions">Promotional SMS</Label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts about special offers and discounts.</p>
              </div>
              <Switch
                id="sms-promotions"
                checked={smsNotifications.promotions}
                onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, promotions: checked })}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSubmit} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Notification Settings"}
        </Button>
      </CardFooter>
    </Card>
  )
}
