"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface Guide {
  id: string
  name: string
  email: string
  phone: string
  speciality: string
  region: string
  city: string
  rating: number
  totalTours: number
  status: "active" | "inactive"
  avatar?: string
  languages: string[]
  experience: number
}

interface EditGuideFormProps {
  guide: Guide
  onSubmit: (guide: Guide) => void
  onCancel: () => void
}

const specialities = [
  "Wildlife & Nature",
  "Cultural Heritage",
  "Adventure Sports",
  "Historical Tours",
  "Photography Tours",
  "Culinary Tours",
  "Religious Tours",
  "City Tours",
  "Beach & Coastal",
  "Mountain & Hiking",
]

const regions = ["East Africa", "West Africa", "Southern Africa", "North Africa", "Central Africa"]

const availableLanguages = [
  "English",
  "French",
  "Arabic",
  "Swahili",
  "Hausa",
  "Yoruba",
  "Igbo",
  "Amharic",
  "Oromo",
  "Twi",
  "Afrikaans",
  "Zulu",
  "Xhosa",
  "Portuguese",
  "Spanish",
]

export function EditGuideForm({ guide, onSubmit, onCancel }: EditGuideFormProps) {
  const [formData, setFormData] = useState<Guide>(guide)
  const [errors, setErrors] = useState<Partial<Record<keyof Guide, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Guide, string>> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.speciality) newErrors.speciality = "Speciality is required"
    if (!formData.region) newErrors.region = "Region is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (formData.languages.length === 0) newErrors.languages = "At least one language is required"
    if (formData.experience < 0) newErrors.experience = "Experience must be a positive number"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        languages: [...prev.languages, language],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        languages: prev.languages.filter((lang) => lang !== language),
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Enter full name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Enter email address"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="Enter phone number"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Experience */}
        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience *</Label>
          <Input
            id="experience"
            type="number"
            min="0"
            value={formData.experience}
            onChange={(e) => setFormData((prev) => ({ ...prev, experience: Number.parseInt(e.target.value) || 0 }))}
            placeholder="Enter years of experience"
            className={errors.experience ? "border-red-500" : ""}
          />
          {errors.experience && <p className="text-sm text-red-500">{errors.experience}</p>}
        </div>

        {/* Speciality */}
        <div className="space-y-2">
          <Label htmlFor="speciality">Speciality *</Label>
          <Select
            value={formData.speciality}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, speciality: value }))}
          >
            <SelectTrigger className={errors.speciality ? "border-red-500" : ""}>
              <SelectValue placeholder="Select speciality" />
            </SelectTrigger>
            <SelectContent>
              {specialities.map((speciality) => (
                <SelectItem key={speciality} value={speciality}>
                  {speciality}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.speciality && <p className="text-sm text-red-500">{errors.speciality}</p>}
        </div>

        {/* Region */}
        <div className="space-y-2">
          <Label htmlFor="region">Region *</Label>
          <Select
            value={formData.region}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, region: value }))}
          >
            <SelectTrigger className={errors.region ? "border-red-500" : ""}>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.region && <p className="text-sm text-red-500">{errors.region}</p>}
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
            placeholder="Enter city"
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status}
            onValueChange={(value: "active" | "inactive") => setFormData((prev) => ({ ...prev, status: value }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-2">
        <Label>Languages Spoken *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-40 overflow-y-auto border rounded-md p-3">
          {availableLanguages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={formData.languages.includes(language)}
                onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
              />
              <Label htmlFor={language} className="text-sm font-normal">
                {language}
              </Label>
            </div>
          ))}
        </div>
        {errors.languages && <p className="text-sm text-red-500">{errors.languages}</p>}
      </div>

      {/* Performance Stats (Read-only) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <Label className="text-sm font-medium text-gray-600">Current Rating</Label>
          <p className="text-lg font-semibold">{formData.rating}/5.0</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-600">Total Tours Completed</Label>
          <p className="text-lg font-semibold">{formData.totalTours}</p>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Update Guide
        </Button>
      </div>
    </form>
  )
}
