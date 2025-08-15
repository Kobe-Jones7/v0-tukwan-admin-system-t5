"use client"

import { Loader2, Plus, Save, Trash, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import z, { ZodRecord } from 'zod'

import { createVendor, deleteMarketplaceItem, getAllMarketplaceCategories, getMarketplaceVendors, upsertMarketplaceItem } from "@/lib/queries/marketplace"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ObjectInput from "@/components/dashboard/object-input-modal"
import InputModal from "@/components/dashboard/input-modal"
import ComboBox from "@/components/dashboard/combobox"
import { zodResolver } from '@hookform/resolvers/zod'
import { Marketplace, Vendor } from '@/app/generated/prisma'
import CustomModal from '@/components/custom-modal'
import { Textarea } from '@/components/ui/textarea'
import FileUpload from '@/components/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useModal } from '@/providers/modal'
import { routes } from '@/routes'
import { JsonObject, JsonValue } from "@/app/generated/prisma/runtime/library"

type Props = { data?: Marketplace & { vendor: Vendor | null } }

const MarketplaceForm = ({ data }: Props) => {
    const router = useRouter()
    const { setOpen, setClose } = useModal();
    const [vendors, setVendors] = useState<z.infer<typeof formSchema>['vendor'][]>([])
    const [categories, setCategories] = useState<z.infer<typeof formSchema>['category'][]>([])

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
        category: z.string({ message: 'Provide a category' }),
        price: z.number().min(1),
        quantity: z.number().min(1),
        images: z.array(z.string(), { message: 'Provide at least one image URL' }).min(1, { message: 'At least one image is required' }),
        features: z.array(z.string()).min(1, { message: 'Provide at least one feature' }),
        // specifications: z.record(z.string(), z.string()),
        specifications: z.any(),
        description: z.string({ message: "Provide a description" }),
        about_product: z.string(),
        vendor: z.object({
            id: z.string().optional(),
            name: z.string({ message: 'Vendor name is required' }).nonempty()
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
            category: '',
            price: 1,
            quantity: 1,
            images: [],
            features: [],
            specifications: {},
            description: "",
            about_product: '',

            ...{
                ...data,
                vendor: data?.vendor
                    ? { id: data.vendor.id ?? '', name: data.vendor.name ?? '' }
                    : { id: '', name: '' }
            },
        },
        mode: 'onChange'
    })

    const isSubmitting = form.formState.isSubmitting

    const images = form.watch('images') || []

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        try {
            await upsertMarketplaceItem(values)
            toast.success(`Item ${data ? 'updated' : 'added'} successfully.`)
            router.push(routes.dashboard.marketplace.index)
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Failed to submit item details.')
            return
        }
    }

    const handleDelete = async () => {
        try {
            await deleteMarketplaceItem(data?.id!)
        } catch (error) {
            console.error('Error deleting marketplace item:', error)
            toast.error('Failed to delete marketplace item.')
        } finally {
            router.push(routes.dashboard.packages.index)
            setClose()
            toast.success('Item deleted successfully.')
        }
    }

    const handleCreateVendor = async (name: string) => {
        try {
            const { data, error } = await createVendor(name)
            if (data) {
                setVendors((prev: any) => {
                    return [...prev, data]
                })
                toast.success('Vendor created successfully.')
                form.setValue('vendor', vendors[vendors.length - 1], { shouldValidate: true })
                return data
            } else {
                toast.error(`Failed to create vendor: ${error}`)
            }
        } catch (error) {
            console.error('Error creating vendor:', error)
            toast.error('Failed to create vendor.')
        }
    }

    const getVendorsInForm = async () => {
        try {
            const { data } = await getMarketplaceVendors()
            if (data) setVendors(data)
        } catch (error) {
            console.log('VENDOR_FETCH_ERROR:', error)
            toast.error('Failed to get vendors')
        }
    }

    const getCategoriesInForm = async () => {
        try {
            const { data } = await getAllMarketplaceCategories()
            if (data) setCategories(data)
        } catch (error) {
            console.log('CATEGORY_FETCH_ERROR', error)
            toast.error('Failed to get categories')
        }
    }

    useEffect(() => {
        let mounted = true;

        getVendorsInForm();
        getCategoriesInForm();

        () => { mounted = false }
    }, [])


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-">
                        <Card>
                            <CardHeader>
                                <CardTitle>Item Info</CardTitle>
                                <CardDescription>Fill in the item details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='space-y-2 items-center justify-between'>
                                                <FormLabel className='w-2/5 capitalize'>Item name</FormLabel>
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

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex flex-col gap-2 justify-between'>
                                                    <FormLabel className='w-2/5 capitalize'>category</FormLabel>
                                                    <FormControl>
                                                        <ComboBox
                                                            data={categories.map(category => ({
                                                                value: category,
                                                                label: category
                                                            }))}
                                                            field="category"
                                                            placeholder="Eg: Clothing"
                                                            {...field}
                                                            onChange={(value) => {
                                                                form.setValue("category", value, { shouldValidate: true })
                                                            }}
                                                            onCreate={(value) => {
                                                                return setCategories((prev) => {
                                                                    return [...prev, value]
                                                                })
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

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

                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="quantity"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='space-y-2 items-center justify-between'>
                                                        <FormLabel className='w-2/5 capitalize'>quantity</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                type="number"
                                                                placeholder="Eg: 450"
                                                                min={1}
                                                                onChange={ev => {
                                                                    form.setValue('quantity', parseInt(ev.target.value), { shouldValidate: true })
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

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>Features</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <InputModal title="Add Feature" placeholder="Eg: 100% authentic handwoven" onSubmit={(value) => {
                                                        form.setValue('features', [...form.getValues('features'), value])
                                                        setClose()
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add
                                        </Button>
                                    </div>

                                    {form.getValues('features').map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                            <Trash2
                                                className="ml-auto h-4 w-4 text-gray-500 cursor-pointer hover:text-red-600"
                                                onClick={() => {
                                                    const updatedFeatures = form.getValues('features').filter((_, i) => i !== index)
                                                    form.setValue('features', updatedFeatures, { shouldValidate: true })
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <FormLabel>Specifications</FormLabel>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setOpen(
                                                    <ObjectInput title="Add Specification" onSubmit={(value) => {
                                                        form.setValue('specifications', { ...form.getValues('specifications'), ...value })
                                                        setClose()
                                                        console.log(form.getValues('specifications'))
                                                    }} />
                                                )
                                            }}
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add
                                        </Button>
                                    </div>

                                    {Object.entries(form.getValues('specifications')).map(([key, value]) => (
                                        <div key={key} className="flex justify-between">
                                            <span className="w-1/3 max-w-1/2 text-gray-600">{key}:</span>
                                            <div className="flex flex-1 gap-4">
                                                {/* @ts-ignore */}
                                                <span className="font-medium">{value}</span>
                                                <Trash2
                                                    className="ml-2 h-4 w-4 text-gray-500 cursor-pointer hover:text-red-600"
                                                    onClick={() => {
                                                        const updatedSpecs = { ...form.getValues('specifications') }
                                                        delete updatedSpecs[key] as any
                                                        form.setValue('specifications', updatedSpecs, { shouldValidate: true })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <FormField
                                    control={form.control}
                                    name="about_product"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='space-y-2 items-center justify-between'>
                                                <FormLabel className='w-2/5 capitalize'>about this product</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} value={field.value ?? ''} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="vendor"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex flex-col gap-2 justify-between'>
                                                    <FormLabel className='w-2/5 capitalize'>vendor</FormLabel>
                                                    <FormControl>
                                                        <ComboBox
                                                            data={
                                                                vendors.map(vendor => ({
                                                                    value: vendor.id ?? vendor.name,
                                                                    label: vendor.name
                                                                }))
                                                            }
                                                            field="vendor"
                                                            placeholder="Eg: Ashanti Crafts"
                                                            value={field.value?.id ?? ""}
                                                            onChange={(value) => {
                                                                form.setValue("vendor", { ...form.getValues("vendor"), id: value }, { shouldValidate: true })
                                                            }}
                                                            onCreate={handleCreateVendor}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
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

export default MarketplaceForm