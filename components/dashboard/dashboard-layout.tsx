import { Bell } from "lucide-react"
import type React from "react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import StoreProvider from "@/contexts/store";
import SidebarComponent from "../sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  // partnerType: "tour-guide" | "vendor" | "tour-operator" | "guest"
}

export function DashboardLayout({ children }: DashboardLayoutProps) {

  return (
    <StoreProvider>
      <SidebarProvider>
        <div className="flex min-h-screen bg-gray-100 w-full">

          <SidebarComponent />

          <div className="flex flex-col flex-1 w-full">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="flex items-center justify-between px-6 h-16">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </StoreProvider>
  )
}
