"use client"

import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    LayoutDashboard,
    Settings,
    HelpCircle,
    Map,
    Calendar,
    Users,
    Package,
} from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { UserButton } from "@clerk/nextjs"
import { routes } from "@/routes"

type Props = {}

const SidebarComponent = ({ }: Props) => {

    const pathname = usePathname()

    // Define navigation items based on partner type
    const getNavItems = () => {
        const commonItems = [
            // NOTE: below are role specific links
            [
                {
                    title: "Attractions",
                    href: routes.dashboard.attractions.index,
                    icon: Map,
                },
                {
                    title: "Guides",
                    href: "/dashboard/guides",
                    icon: Users,
                },
                {
                    title: "Tour Packages",
                    href: routes.dashboard.packages.index,
                    icon: Package,
                },
                {
                    title: "Bookings",
                    href: routes.dashboard.bookings.index,
                    icon: Calendar,
                }
            ],

            // NOTE: below are common  links
            [
                {
                    title: "Dashboard",
                    href: routes.dashboard.index,
                    icon: LayoutDashboard,
                },
                {
                    title: "Settings",
                    href: routes.dashboard.settings,
                    icon: Settings,
                }
            ]
        ]

        // const specificItems = {
        //     "tour-guide": [
        //         {
        //             title: "Tours",
        //             href: "/dashboard/tours",
        //             icon: Map,
        //         },
        //         {
        //             title: "Bookings",
        //             href: "/dashboard/bookings",
        //             icon: Calendar,
        //         },
        //         {
        //             title: "Customers",
        //             href: "/dashboard/customers",
        //             icon: Users,
        //         },
        //     ],
        //     vendor: [
        //         {
        //             title: "Products",
        //             href: "/dashboard/products",
        //             icon: ShoppingBag,
        //         },
        //         {
        //             title: "Orders",
        //             href: "/dashboard/orders",
        //             icon: Package,
        //         },
        //         {
        //             title: "Customers",
        //             href: "/dashboard/customers",
        //             icon: Users,
        //         },
        //     ],
        //     "tour-operator": [
        //         {
        //             title: "Tour Packages",
        //             href: "/dashboard/tour-packages",
        //             icon: Package,
        //         },
        //         {
        //             title: "Bookings",
        //             href: "/dashboard/bookings",
        //             icon: Calendar,
        //         },
        //         {
        //             title: "Guides",
        //             href: "/dashboard/guides",
        //             icon: Users,
        //         },
        //         {
        //             title: "Customers",
        //             href: "/dashboard/customers",
        //             icon: Users,
        //         },
        //     ],
        //     guest: [
        //     ]
        // }

        return [...commonItems]
    }

    const navItems = getNavItems()

    return (
        <Sidebar className="border-r border-gray-200">
            <SidebarHeader className="border-b border-gray-200 px-6 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={32} height={32} className="w-8 h-8" />
                    <span className="text-xl font-bold text-blue-600">Tukwan</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <div className="px-4 divide-y">
                        {navItems.map((section, i) =>
                            <div className="py-2" key={i}>
                                {section.map(item =>
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton asChild isActive={pathname.startsWith(item.href)} className="flex items-center gap-3">
                                            <Link href={item.href}>
                                                <item.icon className="h-5 w-5" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )}
                            </div>
                        )}
                    </div>
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

                    <div className="flex items-center gap-2">
                        <UserButton showName />
                        {/* <span className="font-medium hidden md:block">John Doe</span> */}
                    </div>

                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default SidebarComponent