"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ArrowLeft, Plus, Trash, Upload } from "lucide-react"

export default function NewTourPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    maxGroupSize: "",
    included: ["Transportation", "Tour Guide", "Water"],
    notIncluded: ["Meals", "Personal Expenses"],
    difficulty: "moderate",
    status: "draft",
  })

  const [images, setImages] = useState<string[]>([])
  const [itinerary, setItinerary] = useState([{ day: 1, title: "", description: "" }])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleItineraryChange = (index: number, field: string, value: string) => {
    const newItinerary = [...itinerary]
    newItinerary[index] = { ...newItinerary[index], [field]: value }
    setItinerary(newItinerary)
  }

  const addItineraryDay = () => {
    setItinerary([...itinerary, { day: itinerary.length + 1, title: "", description: "" }])
  }

  const removeItineraryDay = (index: number) => {
    const newItinerary = [...itinerary]
    newItinerary.splice(index, 1)
    // Update day numbers
    newItinerary.forEach((item, i) => {
      item.day = i + 1
    })
    setItinerary(newItinerary)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, itinerary, images })
    // Redirect to tours page after submission
    // router.push('/dashboard/tours')
  }

  return (
    <DashboardLayout partnerType="tour-guide">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/tours">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Add New Tour</h1>
          <p className="text-gray-500 mt-1">Create a new tour offering for your customers</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details of your tour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Tour Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Cape Coast Heritage Tour"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your tour in detail..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Cape Coast, Ghana"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="e.g. 3 days"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (GH₵)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="e.g. 1500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxGroupSize">Max Group Size</Label>
                      <Input
                        id="maxGroupSize"
                        name="maxGroupSize"
                        type="number"
                        value={formData.maxGroupSize}
                        onChange={handleChange}
                        placeholder="e.g. 10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Difficulty Level</Label>
                    <RadioGroup
                      value={formData.difficulty}
                      onValueChange={(value) => handleSelectChange("difficulty", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="easy" id="easy" />
                        <Label htmlFor="easy" className="font-normal">
                          Easy
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate" className="font-normal">
                          Moderate
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="challenging" id="challenging" />
                        <Label htmlFor="challenging" className="font-normal">
                          Challenging
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Tour Status</Label>
                    <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">
                      Draft tours are not visible to customers. Active tours are bookable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tour Images</CardTitle>
                <CardDescription>Upload images showcasing your tour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative h-40 bg-gray-100 rounded-md">
                      {/* Image preview would go here */}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6"
                        onClick={() => {
                          const newImages = [...images]
                          newImages.splice(index, 1)
                          setImages(newImages)
                        }}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="h-40 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Upload high-quality images that showcase your tour. Maximum 5 images.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Itinerary</CardTitle>
                    <CardDescription>Outline the day-by-day activities of your tour</CardDescription>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={addItineraryDay} className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Day
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {itinerary.map((day, index) => (
                    <div key={index} className="space-y-4 pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Day {day.day}</h3>
                        {itinerary.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItineraryDay(index)}
                            className="h-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`day-${index}-title`}>Title</Label>
                        <Input
                          id={`day-${index}-title`}
                          value={day.title}
                          onChange={(e) => handleItineraryChange(index, "title", e.target.value)}
                          placeholder="e.g. Arrival and City Tour"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`day-${index}-description`}>Description</Label>
                        <Textarea
                          id={`day-${index}-description`}
                          value={day.description}
                          onChange={(e) => handleItineraryChange(index, "description", e.target.value)}
                          placeholder="Describe the activities for this day..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inclusions & Exclusions</CardTitle>
                <CardDescription>Specify what is included and excluded in your tour price</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>What's Included</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Transportation", "Tour Guide", "Entrance Fees", "Water", "Accommodation"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox
                            id={`included-${item}`}
                            checked={formData.included.includes(item)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  included: [...formData.included, item],
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  included: formData.included.filter((i) => i !== item),
                                })
                              }
                            }}
                          />
                          <Label htmlFor={`included-${item}`} className="font-normal">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>What's Not Included</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Meals", "Personal Expenses", "Travel Insurance", "Tips", "Souvenirs"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox
                            id={`not-included-${item}`}
                            checked={formData.notIncluded.includes(item)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  notIncluded: [...formData.notIncluded, item],
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  notIncluded: formData.notIncluded.filter((i) => i !== item),
                                })
                              }
                            }}
                          />
                          <Label htmlFor={`not-included-${item}`} className="font-normal">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/tours">Cancel</Link>
          </Button>
          <Button type="submit">Save Tour</Button>
        </div>
      </form>
    </DashboardLayout>
  )
}
