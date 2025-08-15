
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import AttractionForm from '@/components/dashboard/attractions/form'
import { Button } from '@/components/ui/button'
import { routes } from '@/routes'
import BackButton from "@/components/dashboard/back-button"

export default function NewTourPage() {

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-8">
        <BackButton link={routes.dashboard.attractions.index} />
        <div>
          <h1 className="text-2xl font-bold">Add New Attraction</h1>
          <p className="text-gray-500 mt-1">Create a new attraction entry</p>
        </div>
      </div>

      <AttractionForm />
    </DashboardLayout >
  )
}
