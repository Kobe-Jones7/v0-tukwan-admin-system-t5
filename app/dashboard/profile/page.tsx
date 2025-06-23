"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Camera, Upload } from "lucide-react"

export default function ProfilePage() {
  const { user, updateUser } = useAuth()
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [partnerType, setPartnerType] = useState<"tour-guide" | "vendor" | "tour-operator">(
    user?.user_type === "tour_guide" ? "tour-guide" : user?.user_type === "vendor" ? "vendor" : "tour-operator",
  )
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(user?.profile?.avatar || null)

  // Form data
  const [formData, setFormData] = useState({
    businessName: user?.profile?.businessName || "Ghana Explorer Tours",
    businessType: user?.user_type || "tour-guide",
    contactName: user?.name || "John Doe",
    contactEmail: user?.email || "john@ghanaexplorer.com",
    contactPhone: user?.profile?.phone || "+233 20 123 4567",
    location: user?.profile?.location || "Accra, Ghana",
    description:
      user?.profile?.description ||
      "Providing authentic cultural and historical tours across Ghana. Specializing in Cape Coast, Elmina, and Accra city tours.",
    website: user?.profile?.website || "https://ghanaexplorer.com",
    socialMedia: {
      facebook: user?.profile?.socialMedia?.facebook || "ghanaexplorer",
      instagram: user?.profile?.socialMedia?.instagram || "ghana_explorer",
      twitter: user?.profile?.socialMedia?.twitter || "ghana_explorer",
    },
    businessHours: user?.profile?.businessHours || "Monday - Saturday, 8:00 AM - 6:00 PM",
    languages: user?.profile?.languages || ["English", "Twi", "French"],
    paymentMethods: user?.profile?.paymentMethods || ["Mobile Money", "Credit Card", "Cash"],
    isVerified: user?.profile?.isVerified || true,
    isActive: user?.profile?.isActive || true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [name]: value,
      },
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        })
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        })
        return
      }

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setProfileImage(imageUrl)

        // Update user context with new avatar
        updateUser({
          profile: {
            ...user?.profile,
            avatar: imageUrl,
          },
        })

        toast({
          title: "Profile picture updated",
          description: "Your profile picture has been updated successfully",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerImageUpload = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Update user profile
    updateUser({
      name: formData.contactName,
      email: formData.contactEmail,
      profile: {
        ...user?.profile,
        ...formData,
        avatar: profileImage,
      },
    })

    toast({
      title: "Profile updated",
      description: "Your business profile has been updated successfully",
    })

    setIsEditing(false)
  }

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <DashboardLayout partnerType={partnerType}>
      <div className="mb-8">
        <Tabs defaultValue={partnerType} onValueChange={(value) => setPartnerType(value as any)}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Business Profile</h1>
            <TabsList>
              <TabsTrigger value="tour-guide">Tour Guide</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
              <TabsTrigger value="tour-operator">Tour Operator</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="tour-guide" className="mt-0">
            <p className="text-gray-500 mt-2">
              Manage your tour guide business information that will be displayed to customers.
            </p>
          </TabsContent>
          <TabsContent value="vendor" className="mt-0">
            <p className="text-gray-500 mt-2">
              Manage your vendor business information that will be displayed to customers.
            </p>
          </TabsContent>
          <TabsContent value="tour-operator" className="mt-0">
            <p className="text-gray-500 mt-2">
              Manage your tour operator business information that will be displayed to customers.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Update your business details and profile</CardDescription>
                </div>
                <Button variant={isEditing ? "outline" : "default"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  {/* Profile Picture Section */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={profileImage || undefined} alt={formData.contactName} />
                        <AvatarFallback className="bg-teal-100 text-teal-700 text-xl">
                          {getUserInitials(formData.contactName)}
                        </AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          type="button"
                          size="icon"
                          variant="secondary"
                          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                          onClick={triggerImageUpload}
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{formData.contactName}</h3>
                      <p className="text-sm text-muted-foreground">{formData.contactEmail}</p>
                      {isEditing && (
                        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={triggerImageUpload}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Picture
                        </Button>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleSelectChange("businessType", value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger id="businessType">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tour-guide">Tour Guide</SelectItem>
                          <SelectItem value="vendor">Vendor</SelectItem>
                          <SelectItem value="tour-operator">Tour Operator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        name="facebook"
                        value={formData.socialMedia.facebook}
                        onChange={handleSocialMediaChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        name="instagram"
                        value={formData.socialMedia.instagram}
                        onChange={handleSocialMediaChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        name="twitter"
                        value={formData.socialMedia.twitter}
                        onChange={handleSocialMediaChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessHours">Business Hours</Label>
                    <Input
                      id="businessHours"
                      name="businessHours"
                      value={formData.businessHours}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="isActive"
                            checked={formData.isActive}
                            onCheckedChange={(checked) => handleSwitchChange("isActive", checked)}
                            disabled={!isEditing}
                          />
                          <Label htmlFor="isActive" className="font-normal">
                            Active
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="isVerified"
                            checked={formData.isVerified}
                            onCheckedChange={(checked) => handleSwitchChange("isVerified", checked)}
                            disabled={true} // Verification is controlled by admin
                          />
                          <Label htmlFor="isVerified" className="font-normal">
                            Verified
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6">
                    <Button type="submit">Save Changes</Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Your business contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone</Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
              <CardDescription>Your account verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Verification Status</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      formData.isVerified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {formData.isVerified ? "Verified" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Account Status</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      formData.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {formData.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Partner Since</span>
                  <span className="text-gray-600">January 15, 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
