"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import {
  Package,
  Users,
  CreditCard,
  Calendar,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  MapPin,
  Clock,
  Eye,
  Edit,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useAuth } from "@/contexts/auth-context"
import { apiClient } from "@/lib/api-client"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [partnerType, setPartnerType] = useState<"tour-guide" | "vendor" | "tour-operator">("tour-guide")
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [recentListings, setRecentListings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      // Set partner type based on user type
      if (user.user_type === "tour_guide") setPartnerType("tour-guide")
      else if (user.user_type === "vendor") setPartnerType("vendor")
      else if (user.user_type === "tour_operator") setPartnerType("tour-operator")

      fetchDashboardData()
    }
  }, [user])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)

      // Fetch dashboard stats
      const statsResponse = await apiClient.getDashboardStats()
      setDashboardData(statsResponse.data)

      // Fetch recent listings based on user type
      if (user?.user_type === "tour_guide" || user?.user_type === "tour_operator") {
        const toursResponse = await apiClient.getTours({ limit: 3, user_id: user.id })
        setRecentListings(toursResponse.data)
      } else if (user?.user_type === "vendor") {
        const productsResponse = await apiClient.getProducts({ limit: 3, user_id: user.id })
        setRecentListings(productsResponse.data)
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Default data for when API is not available
  const defaultStats = {
    totalTours: 12,
    totalBookings: 142,
    revenue: 12450,
    customers: 124,
    totalProducts: 48,
    totalOrders: 214,
    tourPackages: 8,
    guides: 14,
  }

  const revenueData = dashboardData?.revenueData || [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1900 },
    { name: "Mar", total: 1500 },
    { name: "Apr", total: 2200 },
    { name: "May", total: 2800 },
    { name: "Jun", total: 2600 },
    { name: "Jul", total: 3100 },
  ]

  const bookingsData = dashboardData?.bookingsData || [
    { name: "Mon", total: 12 },
    { name: "Tue", total: 18 },
    { name: "Wed", total: 15 },
    { name: "Thu", total: 22 },
    { name: "Fri", total: 28 },
    { name: "Sat", total: 32 },
    { name: "Sun", total: 24 },
  ]

  // Stats based on partner type
  const getStats = () => {
    const stats = dashboardData || defaultStats

    if (partnerType === "tour-guide") {
      return [
        {
          title: "Total Tours",
          value: stats.totalTours?.toString() || "12",
          change: "+2",
          changeType: "increase",
          icon: Package,
        },
        {
          title: "Total Bookings",
          value: stats.totalBookings?.toString() || "142",
          change: "+12%",
          changeType: "increase",
          icon: Calendar,
        },
        {
          title: "Revenue",
          value: `GH₵ ${stats.revenue?.toLocaleString() || "12,450"}`,
          change: "+18%",
          changeType: "increase",
          icon: CreditCard,
        },
        {
          title: "Customers",
          value: stats.customers?.toString() || "124",
          change: "+5",
          changeType: "increase",
          icon: Users,
        },
      ]
    } else if (partnerType === "vendor") {
      return [
        {
          title: "Total Products",
          value: stats.totalProducts?.toString() || "48",
          change: "+5",
          changeType: "increase",
          icon: ShoppingBag,
        },
        {
          title: "Total Orders",
          value: stats.totalOrders?.toString() || "214",
          change: "+8%",
          changeType: "increase",
          icon: Package,
        },
        {
          title: "Revenue",
          value: `GH₵ ${stats.revenue?.toLocaleString() || "18,320"}`,
          change: "+14%",
          changeType: "increase",
          icon: CreditCard,
        },
        {
          title: "Customers",
          value: stats.customers?.toString() || "186",
          change: "+12",
          changeType: "increase",
          icon: Users,
        },
      ]
    } else {
      return [
        {
          title: "Tour Packages",
          value: stats.tourPackages?.toString() || "8",
          change: "+1",
          changeType: "increase",
          icon: Package,
        },
        {
          title: "Total Bookings",
          value: stats.totalBookings?.toString() || "312",
          change: "+24%",
          changeType: "increase",
          icon: Calendar,
        },
        {
          title: "Revenue",
          value: `GH₵ ${stats.revenue?.toLocaleString() || "42,680"}`,
          change: "+22%",
          changeType: "increase",
          icon: CreditCard,
        },
        {
          title: "Guides",
          value: stats.guides?.toString() || "14",
          change: "+2",
          changeType: "increase",
          icon: Users,
        },
      ]
    }
  }

  const stats = getStats()

  // Get the appropriate listings based on partner type
  const getListings = () => {
    if (partnerType === "tour-guide") {
      return {
        title: "Recent Tours",
        description: "Your recently added tour offerings",
        items: recentListings,
        addNewLink: "/dashboard/tours/new",
        viewAllLink: "/dashboard/tours",
        addNewText: "Add New Tour",
        viewAllText: "View All Tours",
      }
    } else if (partnerType === "vendor") {
      return {
        title: "Recent Products",
        description: "Your recently added marketplace products",
        items: recentListings,
        addNewLink: "/dashboard/products/new",
        viewAllLink: "/dashboard/products",
        addNewText: "Add New Product",
        viewAllText: "View All Products",
      }
    } else {
      return {
        title: "Recent Tour Packages",
        description: "Your recently added tour packages",
        items: recentListings,
        addNewLink: "/dashboard/tour-packages/new",
        viewAllLink: "/dashboard/tour-packages",
        addNewText: "Add New Package",
        viewAllText: "View All Packages",
      }
    }
  }

  const listings = getListings()

  if (loading) {
    return (
      <DashboardLayout partnerType={partnerType}>
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout partnerType={partnerType}>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.name}!</p>
        </div>
        <p className="text-gray-500 mt-2">
          Here's an overview of your {partnerType.replace("-", " ")} business performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                {stat.changeType === "increase" ? (
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span
                  className={stat.changeType === "increase" ? "text-green-500 font-medium" : "text-red-500 font-medium"}
                >
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Listings Section */}
      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{listings.title}</CardTitle>
              <CardDescription>{listings.description}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href={listings.viewAllLink}>{listings.viewAllText}</Link>
              </Button>
              <Button asChild>
                <Link href={listings.addNewLink}>
                  <Plus className="h-4 w-4 mr-1" />
                  {listings.addNewText}
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {recentListings.length > 0 ? (
              recentListings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">{item.title || item.name}</h3>
                      <Badge
                        className={
                          item.status === "active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : item.status === "draft"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }
                      >
                        {item.status?.charAt(0).toUpperCase() + item.status?.slice(1) || "Active"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-gray-600">
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                      )}
                      <div className="font-medium">GH₵ {item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-auto">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  You haven't added any{" "}
                  {partnerType === "tour-guide" ? "tours" : partnerType === "vendor" ? "products" : "tour packages"}{" "}
                  yet.
                </p>
                <Button asChild>
                  <Link href={listings.addNewLink}>
                    <Plus className="h-4 w-4 mr-1" />
                    {listings.addNewText}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Your revenue for the past 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>{partnerType === "vendor" ? "Orders" : "Bookings"} Overview</CardTitle>
            <CardDescription>Your {partnerType === "vendor" ? "orders" : "bookings"} for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
