"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Calendar,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  User,
  Map,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  partnerType: "tour-guide" | "vendor" | "tour-operator"
}

export function DashboardLayout({ children, partnerType }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState(3)

  // Define navigation items based on partner type
  const getNavItems = () => {
    const commonItems = [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ]

    const specificItems = {
      "tour-guide": [
        {
          title: "My Tours",
          href: "/dashboard/tours",
          icon: Map,
        },
        {
          title: "Bookings",
          href: "/dashboard/bookings",
          icon: Calendar,
        },
        {
          title: "Customers",
          href: "/dashboard/customers",
          icon: Users,
        },
      ],
      vendor: [
        {
          title: "Products",
          href: "/dashboard/products",
          icon: ShoppingBag,
        },
        {
          title: "Orders",
          href: "/dashboard/orders",
          icon: Package,
        },
        {
          title: "Customers",
          href: "/dashboard/customers",
          icon: Users,
        },
      ],
      "tour-operator": [
        {
          title: "Tour Packages",
          href: "/dashboard/tour-packages",
          icon: Package,
        },
        {
          title: "Bookings",
          href: "/dashboard/bookings",
          icon: Calendar,
        },
        {
          title: "Guides",
          href: "/dashboard/guides",
          icon: Users,
        },
        {
          title: "Customers",
          href: "/dashboard/customers",
          icon: Users,
        },
      ],
    }

    return [...specificItems[partnerType], ...commonItems]
  }

  const navItems = getNavItems()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 px-6 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-blue-600">Tukwan</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} className="flex items-center gap-3">
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start gap-2" asChild>
                <Link href="/dashboard/help">
                  <HelpCircle className="h-5 w-5" />
                  Help & Support
                </Link>
              </Button>
              <Button variant="outline" className="justify-start gap-2 text-red-500 hover:text-red-600" asChild>
                <Link href="/sign-in">
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </Link>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-col flex-1">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="flex items-center justify-between px-6 h-16">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold hidden md:block">
                  {partnerType === "tour-guide"
                    ? "Tour Guide Dashboard"
                    : partnerType === "vendor"
                      ? "Vendor Dashboard"
                      : "Tour Operator Dashboard"}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                      <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium hidden md:block">John Doe</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
