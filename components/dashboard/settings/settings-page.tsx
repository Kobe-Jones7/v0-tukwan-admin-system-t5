"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/dashboard/settings/profile-settings"
import { AccountSettings } from "@/components/dashboard/settings/account-settings"
import { PaymentSettings } from "@/components/dashboard/settings/payment-settings"
import { NotificationSettings } from "@/components/dashboard/settings/notification-settings"

export function SettingsPage() {
  const [partnerType, setPartnerType] = useState<"tour-guide" | "vendor" | "tour-operator">("tour-guide")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <ProfileSettings partnerType={partnerType} setPartnerType={setPartnerType} />
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <PaymentSettings partnerType={partnerType} />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings partnerType={partnerType} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
