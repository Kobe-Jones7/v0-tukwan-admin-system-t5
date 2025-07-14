"use client"

import { Loader2, Plus, Save, Trash } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import React, { } from 'react'
import Image from 'next/image'
import { toast } from "sonner"
import Link from 'next/link'
import clsx from 'clsx'
import z from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ItineraryItemForm, itineraryItemSchema } from "./itinerary-form"
import { deleteTourPackageBySlug, upsertTourPackage } from "@/lib/queries/tour-packages"
import { TourPackages } from '@/app/generated/prisma'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'
import CustomModal from '@/components/custom-modal'
import FileUpload from '@/components/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useModal } from '@/providers/modal'
import InputModal from "./input-modal"
import { routes } from '@/routes'

type Props = { data?: TourPackages }

const TourPackageForm = ({ data }: Props) => {
    const router = useRouter()
    const { setOpen, setClose } = useModal();

    const formSchema = z.object({
        name: z.string({ message: 'Provide a name' }).nonempty(),
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
        images: z.array(z.string(), { message: 'Provide at least one image URL' }).min(1, { message: 'At least one image is required' }),
        region: z.string({ message: "Provide a region" }),
        duration: z.number().min(1),
        group_size: z.number().min(1),
        description: z.string({ message: "Provide a description" }),
        minimum_age: z.number().min(1),
        best_time: z.string({ message: "Provide best time for visit" }),
        tour_highlights: z.array(z.string()),
        what_to_bring: z.array(z.string()),
        price: z.number().min(1),
        whats_included: z.array(z.string()),
        whats_not_included: z.array(z.string()),
        // cancellation_policy: z.string().nullable(),
        itinerary: z.array(itineraryItemSchema),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
            region: "",
            duration: 1, // duration in hours
            group_size: 1,
            description: "",
            minimum_age: 1,
            best_time: "",
            tour_highlights: [],
            what_to_bring: [],
            price: 1,
            images: [],
            whats_included: [],
            whats_not_included: [],
            // cancellation_policy: "",
            itinerary: [],
            ...data,
        },
        mode: 'onChange'
    })

    const isSubmitting = form.formState.isSubmitting

    const images = form.watch('images') || []
    const itinerary = form.watch('itinerary') || []

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        try {
            await upsertTourPackage(values)
            toast.success(data ? 'Package updated successfully.' : 'Package created successfully.')
            router.push(routes.dashboard.packages.index)
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Failed to submit package form.')
            return
        }
    }

    const handleDelete = async () => {
        try {
            await deleteTourPackageBySlug(data?.slug!)
        } catch (error) {
            console.error('Error deleting tour package:', error)
            toast.error('Failed to delete tour package.')
        } finally {
            router.push(routes.dashboard.packages.index)
            setClose()
            toast.success('Tour package deleted successfully.')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                                                <FormLabel className='w-2/5 capitalize'>package name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="e.g. Ghana Explorer Package"
                                                        onChange={(ev) => {
                                                            form.setValue('name', ev.target.value, { shouldValidate: true })
                                                            // Update slug based on name
                                                            const slug = ev.target.value
                                                                .toLowerCase()
                                                                .replace(/\s+/g, '-')
                                                                .replace(/[^a-z0-9-]/g, '')
                                                                .replace(/-{2,}/g, '-')
                                                                .replace(/^-+/, '')
                                                                .replace(/-+$/, '');
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
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='space-y-2 items-center justify-between'>
                                                <FormLabel className='w-2/5 capitalize'>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} value={field.value ?? ''} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex space-x-4">
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="region"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>region</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Eg: Greater Accra" {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="price"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>price</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                type="number"
                                                                placeholder="Eg: 450"
                                                                min={1}
                                                                onChange={ev => {
                                                                    form.setValue('price', parseInt(ev.target.value), { shouldValidate: true })
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="duration"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>duration (days)</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" min="1" placeholder="Eg: 2" {...field} onChange={ev => {
                                                                form.setValue('duration', parseInt(ev.target.value), { shouldValidate: true })
                                                            }} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="group_size"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>group size</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" min="1" placeholder="Eg: 15" {...field} onChange={ev => {
                                                                form.setValue('group_size', parseInt(ev.target.value), { shouldValidate: true })
                                                            }} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="minimum_age"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>minimum age</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" min="1" placeholder="Eg: 45" {...field} onChange={ev => {
                                                                form.setValue('minimum_age', parseInt(ev.target.value), { shouldValidate: true })
                                                            }} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="best_time"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>best time to visit</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Eg: 9:00 am" {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>Tour Highlights</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <InputModal title="Add Tour Highlight" placeholder="Eg: Guided tour" onSubmit={(value) => {
                                                        form.setValue('tour_highlights', [...form.getValues('tour_highlights'), value])
                                                        setClose()
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add Highlight
                                        </Button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3">
                                        {form.getValues('tour_highlights').map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Policies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="cancellation_policy"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='space-y-2 items-center justify-between'>
                                                <FormLabel className='w-2/5 capitalize'>cancellation policy</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} value={field.value ?? ''} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card> */}
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Preparation</CardTitle>
                                <CardDescription>What the people booking the tour should look out for</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>What To Bring</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <InputModal title="Add What To Bring" placeholder="Eg: Comfortable walking shoes" onSubmit={(value) => {
                                                        form.setValue('what_to_bring', [...form.getValues('what_to_bring'), value])
                                                        setClose()
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add
                                        </Button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3">
                                        {form.getValues('what_to_bring').map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>What's Included</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <InputModal title="Add What's Included" placeholder="Eg: All entrance fees" onSubmit={(value) => {
                                                        form.setValue('whats_included', [...form.getValues('whats_included'), value])
                                                        setClose()
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add
                                        </Button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3">
                                        {form.getValues('whats_included').map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>What's Not Included</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <InputModal title="Add What's Not Included" placeholder="Eg: Travel insurance" onSubmit={(value) => {
                                                        form.setValue('whats_not_included', [...form.getValues('whats_not_included'), value])
                                                        setClose()
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add
                                        </Button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3">
                                        {form.getValues('whats_not_included').map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Itinerary</CardTitle>
                                        <CardDescription>Outline the day-by-day activities of your tour package</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">

                                {/* itinerary list here */}
                                <div className="divide-y">
                                    {itinerary.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-4 py-4">
                                            <div className="relative h-16 aspect-square">
                                                <Image
                                                    src={
                                                        item.images[0] ||
                                                        `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(form.getValues("name")) || "/placeholder.svg"}`
                                                    }
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-medium">{item.name}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <ItineraryItemForm
                                    onSubmit={(values) => {
                                        console.log('Itinerary Item Submitted:', values)
                                        form.setValue('itinerary', [...form.getValues('itinerary'), values])
                                    }}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Images</CardTitle>
                                <CardDescription>Upload images showcasing the tour package</CardDescription>
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
                                            bucket="tour_packages"
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
                </div>
                <div className={clsx({ 'justify-between': data, 'justify-end': !data }, "mt-6 flex gap-4")}>
                    {data &&
                        <Button
                            type='button'
                            variant="destructive"
                            className='cursor-pointer'
                            disabled={isSubmitting}
                            onClick={() => {
                                setOpen(
                                    <CustomModal title='Delete Attraction'>
                                        <div className="flex flex-col gap-8">
                                            <div className="text-center">
                                                <p className='text-sm'>Are you sure you want to delete your business account?.</p>
                                                <p>This cannot be undone.</p>
                                            </div>

                                            <div className="flex gap-4 justify-around">
                                                <Button className="w-max" variant="outline" type="button" onClick={setClose} disabled={isSubmitting}
                                                >
                                                    No, cancel
                                                </Button>

                                                <Button
                                                    className="w-max !border-error !bg-error !text-white"
                                                    type="button"
                                                    disabled={isSubmitting}
                                                    onClick={handleDelete}
                                                >
                                                    Yes, delete
                                                </Button>
                                            </div>
                                        </div>
                                    </CustomModal>
                                )
                            }}>
                            <div className="flex items-center justify-center gap-4">
                                <Trash className="h-5 w-5" />
                                <span className='hidden md:block'>Delete Package</span>
                            </div>
                        </Button>
                    }
                    <div className="flex items-end gap-4">
                        <Button variant="outline" disabled={isSubmitting} asChild>
                            <Link href={routes.dashboard.attractions.index}>Cancel</Link>
                        </Button>

                        <Button
                            disabled={!form.formState.isValid || isSubmitting}
                            type="submit"
                            className='cursor-pointer flex items-center justify-center gap-4'
                        >
                            {isSubmitting ?
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> :
                                <Save className='w-5 h-5' />
                            }
                            <span className='hidden md:block'> {isSubmitting ? "Saving..." : "Save Package"}</span>
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default TourPackageForm