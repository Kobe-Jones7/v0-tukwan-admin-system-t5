'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { ArrowLeft, MapPin, Trash, Upload } from 'lucide-react'
import { routes } from '@/routes'
import { upsertAttraction } from '@/lib/queries/attractions'
import { Places } from '@/components/Map'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import FileUpload from '@/components/file-upload'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { Place } from '@/components/place'

export default function NewTourPage() {
  const router = useRouter()

  const formSchema = z.object({
    name: z.string({ message: 'Provide a name' }),
    slug: z.string({ message: 'Provide a slug' }),
    category: z.string({ message: 'Provide a category' }),
    overview: z.string({ message: 'Provide an overview description' }),
    history: z.string({ message: 'Provide some history' }),
    cultural_significance: z.string({ message: 'Provide the cultural significance' }),
    images: z.array(z.string(), { message: 'Provide at least one image URL' }).min(1, { message: 'At least one image is required' }),
    location: z.object({
      address: z.string({ message: 'Provide an address' }),
      country: z.string({}),
      country_code: z.string({ message: 'Provide an address' }),
      city: z.string({ message: 'Provide an address' }),
      region: z.string({ message: 'Provide an address' }),
      longitude: z.number({ message: 'Provide an address' }),
      latitude: z.number({ message: 'Provide an address' }),
    }).required(),
    visitingInformation: z.object({
      opening_hours: z.string({ message: 'Provide opening hours' }),
      entry_fee: z.string({ message: 'Provide entry fee' }),
    }).required(),
  })

  const [images, setImages] = useState<string[]>([])

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   nested?: 'location' | 'visitingInformation'
  // ) => {
  //   const { name, value } = e.target
  //   if (nested) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [nested]: {
  //         ...prev[nested],
  //         [name]: value,
  //       },
  //     }))
  //   } else {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }))
  //   }
  // }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
      category: '',
      overview: '',
      history: '',
      cultural_significance: '',
      images: [],
      location: {
        address: '',
        country: '',
        country_code: '',
        city: '',
        longitude: 0,
        latitude: 0,
        region: '',
      },
      visitingInformation: {
        opening_hours: '',
        entry_fee: '',
      },
    },
    mode: 'onChange'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log('form data:', form.getValues())

    // const payload = {
    //   ...formData,
    //   images,
    //   location: {
    //     ...formData.location,
    //     longitude: parseFloat(formData.location.longitude),
    //     latitude: parseFloat(formData.location.latitude),
    //   },
    // }

    // const res = await upsertAttraction(payload)
    // if (res.success) {
    //   router.push(routes.dashboard.attractions.index)
    // } else {
    //   alert('Failed to create attraction.')
    // }
  }

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href={routes.dashboard.attractions.index}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Add New Attraction</h1>
          <p className="text-gray-500 mt-1">Create a new attraction entry</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Info</CardTitle>
                  <CardDescription>Fill in attraction details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>name</FormLabel>
                          <FormControl>
                            <Input placeholder="Eg: Cape Coast Castle" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>category</FormLabel>
                          <FormControl>
                            <Input placeholder="Eg: Historical" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="overview"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>overview</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="history"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>history</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cultural_significance"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>cultural significance</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Images</CardTitle>
                  <CardDescription>Upload attraction images</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-1 flex-wrap gap-4 mb-4">
                    {form.getValues("images")?.map((img, index) => (
                      <div key={index} className="relative bg-gray-100 rounded-md group">
                        {/* Replace with <Image /> */}
                        <div className="relative h-40 aspect-square">
                          <Image
                            src={
                              img ||
                              `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(form.getValues("name")) || "/placeholder.svg"}`
                            }
                            alt={form.getValues("name")}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>

                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          className="absolute top-2 right-2 group-hover:opacity-100 opacity-0 duration-300"
                          onClick={() => {
                            // Remove the image at the current index
                            const updated = [...form.getValues("images")];
                            updated.splice(index, 1)
                            form.setValue(
                              "images",
                              updated,
                              { shouldValidate: true }
                            )
                          }}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}

                    <div className={clsx({ 'hidden': form.getValues("images").length == 5 }, "h-40 aspect-square flex items-center")}>
                      <FileUpload
                        name="images"
                        bucket="attractions"
                        type={'image'}
                        disabled={form.getValues("images").length == 5}
                        onValueChanged={(image: string) => {
                          console.log(image);
                          console.log(form.getValues('images'))
                          form.setValue(
                            'images',
                            [...(form.getValues('images') || []), image],
                            {}
                          )
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Geographic details of the attraction</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="cultural_significance"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          {/* <FormLabel className='w-2/5 capitalize'>cultural significance</FormLabel> */}
                          <FormControl>
                            <Place
                              {...field}
                              value={form.getValues('location')}
                              setFieldValue={(_: string, value: z.infer<typeof formSchema>['location']) => {
                                form.setValue('location', value, { shouldValidate: true })
                              }}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="aspect-video relative rounded-md overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {(form.getValues("location").latitude)?.toFixed(4) ||
                            "N/A"}
                          ,{" "}
                          {(form.getValues("location").longitude)?.toFixed(4) ||
                            "N/A"}
                        </p>
                        <Link
                          href={`http://maps.google.com/?q=${form.getValues("location.address")}`}
                          target="_blank"
                          className="mt-2 text-primary underline-offset-4 hover:underline"
                        >
                          View on Google Maps
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Coordinates: {form.getValues("location").latitude || "N/A"},{" "}
                    {form.getValues("location").longitude || "N/A"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Visiting Info</CardTitle>
                  <CardDescription>Useful information for tourists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="visitingInformation.opening_hours"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>opening hours</FormLabel>
                          <FormControl>
                            <Input placeholder="Eg: 9:00 AM - 5:00 PM daily" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="visitingInformation.entry_fee"
                    render={({ field }) => (
                      <FormItem>
                        <div className='space-y-2 items-center justify-between'>
                          <FormLabel className='w-2/5 capitalize'>entry fee</FormLabel>
                          <FormControl>
                            <Input placeholder="Eg: GH₵ 40 (Adults), GH₵ 20 (Students)" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href={routes.dashboard.attractions.index}>Cancel</Link>
            </Button>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
            >
              Save Attraction
            </Button>
          </div>
        </form>
      </Form>
    </DashboardLayout>
  )
}
