"use client"

import { ArrowLeft, MapPin, Save, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import z from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { upsertAttraction } from '@/lib/queries/attractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Attractions } from '@/app/generated/prisma'
import { Textarea } from '@/components/ui/textarea'
import FileUpload from '@/components/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Place } from '@/components/place'
import { routes } from '@/routes'
import { toast } from 'sonner'

type Props = { data?: Attractions }

const AttractionForm = ({ data }: Props) => {
    const router = useRouter()

    const formSchema = z.object({
        name: z.string({ message: 'Provide a name' }),
        slug: z.string({ message: 'Provide a slug' }).refine((val) => {
            // slug should be lowercase, replace spaces with dashes, and remove special characters
            const slug = val
                .toLowerCase()
                .replace(/\s+/g, '-')          // Replace spaces with hyphens
                .replace(/[^a-z0-9-]/g, '')     // Remove special characters
                .replace(/-{2,}/g, '-')         // Replace consecutive hyphens with single hyphen
                .replace(/^-+/, '')             // Remove leading hyphens
                .replace(/-+$/, '');            // Remove trailing hyphens
            return slug.length > 0 && slug.length <= 50
        }),
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
        }),
        visitingInformation: z.object({
            opening_hours: z.string({ message: 'Provide opening hours' }),
            entry_fee: z.string({ message: 'Provide entry fee' }),
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data?.name ?? '',
            slug: data?.slug ?? '',
            category: data?.category ?? '',
            overview: data?.overview ?? '',
            history: data?.history ?? '',
            cultural_significance: data?.cultural_significance ?? '',
            images: data?.images ?? [],
            location: {
                address: data?.location.address ?? '',
                country: data?.location.country ?? '',
                country_code: data?.location.country_code ?? '',
                city: data?.location.city ?? '',
                region: data?.location.region ?? '',
                longitude: data?.location.longitude ?? 0,
                latitude: data?.location.latitude ?? 0,
            },
            visitingInformation: {
                opening_hours: data?.visitingInformation.opening_hours ?? "",
                entry_fee: data?.visitingInformation.entry_fee ?? "",
            },
        },
        mode: 'onBlur'
    })


    const [isSubmitting, setIsSubmitting] = useState(form.formState.isSubmitting || form.formState.isValid)

    const images = form.watch('images') || []

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('form data:', form.getValues())

        console.log('form issues:', form.formState.defaultValues)

        try {
            setIsSubmitting(true)
            await upsertAttraction({ id: data?.id!, ...form.getValues() })
            router.push(routes.dashboard.attractions.index)
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Failed to submit attraction form.')
            return
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
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
                                                    <Input
                                                        {...field}
                                                        placeholder="Eg: Cape Coast Castle"
                                                        onChange={(ev) => {
                                                            form.setValue('name', ev.target.value, { shouldValidate: true })
                                                            // Update slug based on name
                                                            const slug = ev.target.value
                                                                .toLowerCase()
                                                                .replace(/\s+/g, '-')
                                                                .replace(/[^a-z0-9-]/g, '')
                                                            form.setValue('slug', slug, { shouldValidate: true })
                                                        }} />
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
                                    {images.map((img, index) => (
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
                                                    const updated = images.filter((_, i) => i !== index)
                                                    form.setValue('images', updated, { shouldValidate: true })
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
                                            disabled={images.length >= 5}
                                            onValueChanged={(image: string) => {
                                                form.setValue('images', [...images, image], { shouldValidate: true })
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
                                    name="location"
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

                <div className="mt-6 flex justify-between gap-4">
                    <Button variant="destructive" onClick={() => { }} asChild>
                        <div className="flex items-center justify-center">
                            <Trash className="h-5 w-5" />
                            <span className='hidden md:block'>Delete Attraction</span>
                        </div>
                    </Button>
                    <div className="flex items-end gap-4">
                        <Button variant="outline" asChild>
                            <Link href={routes.dashboard.attractions.index}>Cancel</Link>
                        </Button>
                        <Button
                            disabled={!form.formState.isValid || isSubmitting}
                            type="submit"
                        >
                            <div className="flex items-center justify-center gap-4">
                                <Save className='w-5 h-5' />

                                <span className='hidden md:block'> {isSubmitting ? "Saving..." : "Save Attraction"}</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default AttractionForm