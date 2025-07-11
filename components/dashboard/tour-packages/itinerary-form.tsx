'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import {
    useForm,
    useFieldArray,
    FieldValues,
    Control,
    FieldArrayPath,
    UseFieldArrayReturn
} from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Plus, Trash, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Image from "next/image";
import FileUpload from "@/components/file-upload";
import { ItineraryTimelineType } from "@/app/generated/prisma";
import { useModal } from "@/providers/modal";
import CustomModal from "@/components/custom-modal";
import { TimelineForm } from "./timeline-form.tsx";
import { getActivityIcon, sortTimelineItems } from "./_helpers";
// import { ScrollArea } from "@/components/ui/scroll-area";

// Timeline item schema
const timelineItemSchema = z.object({
    description: z.string().min(1, "Description is required"),
    time: z.string().min(1, "Time is required"),
    title: z.string().min(1, "Title is required"),
    type: z.nativeEnum(ItineraryTimelineType),
});

// Main form schema
export const itineraryItemSchema = z.object({
    accommodation: z.string(),
    categories: z.array(z.string()),
    description: z.string().min(1, "Description is required"),
    images: z.array(z.string().url("Invalid URL format")),
    included_meals: z.array(z.string()),
    name: z.string().min(1, "Name is required"),
    timeline: z.array(timelineItemSchema).min(1, "At least one timeline item is required"),
    travel_tips: z.array(z.string()),
});

type ItineraryItemFormValues = z.infer<typeof itineraryItemSchema>;

interface ItineraryItemFormProps {
    onSubmit: (data: ItineraryItemFormValues) => void;
    initialData?: Partial<ItineraryItemFormValues>;
}

// Helper type for string arrays
type StringFieldArray = UseFieldArrayReturn<ItineraryItemFormValues, FieldArrayPath<ItineraryItemFormValues>>;

export function ItineraryItemForm({
    onSubmit,
    initialData,
}: ItineraryItemFormProps) {
    const defaultValues: Partial<ItineraryItemFormValues> = {
        accommodation: "",
        categories: [],
        description: "",
        images: [],
        included_meals: [],
        name: "",
        timeline: [],
        travel_tips: [],
        ...initialData,
    };

    const mealOptions = ["Breakfast", "Lunch", "Dinner", "Snacks"];

    const form = useForm<ItineraryItemFormValues>({
        resolver: zodResolver(itineraryItemSchema),
        defaultValues,
    });

    const [newCategory, setNewCategory] = useState("");
    const [travelTip, setTravelTip] = useState("");
    const images = form.watch('images') || []

    const { setOpen, setClose } = useModal();

    const handleSubmit = form.handleSubmit((values: z.infer<typeof itineraryItemSchema>) => {
        onSubmit(values);
        setTimeout(() => {
            form.reset();
        });
    });

    return (
        <Form {...form}>
            <div className="space-y-8 p-3">
                {/* Header Section */}
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Arrival and Cape Coast Castle" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Images */}
                    <div className="spacey-2">
                        <FormLabel>Preview Image</FormLabel>
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
                                    bucket="itinerary"
                                    type={'image'}
                                    disabled={images.length >= 1}
                                    onValueChanged={(image: string) => {
                                        form.setValue('images', [...images, image], { shouldValidate: true })
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Detailed overview of the day's itinerary"
                                        className="min-h-[100px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Categories */}
                <FormField
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <div className="flex space-x-4">
                                {field.value?.map((category, index) => (
                                    <Badge key={index} className="bg-blue-600 capitalize">
                                        {category}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() => {
                                                const updated = [...field.value];
                                                updated.splice(index, 1);
                                                form.setValue("categories", updated);
                                            }}
                                        >
                                            <X className="h-4 w-4 text-white" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                            <FormControl>
                                <div className="flex space-x-4">
                                    <Input
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        placeholder="e.g., Adventure, Cultural"
                                    />
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        onClick={() => {
                                            if (newCategory.trim()) {
                                                // Update form values
                                                const currentCategories = form.getValues("categories") || [];
                                                form.setValue("categories", [...currentCategories, newCategory.trim()]);
                                                setNewCategory("");
                                            }
                                        }}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Timeline Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center space-x-4">
                        <FormLabel>Timeline Breakdown</FormLabel>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setOpen(
                                    <CustomModal title='Delete Attraction'>
                                        <TimelineForm
                                            onSubmit={(data) => {
                                                form.setValue("timeline", [...form.getValues("timeline"), data]);
                                                setClose();
                                            }}
                                        />
                                    </CustomModal>
                                )
                            }}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Timeline Item
                        </Button>
                    </div>

                    <div className="space-y-6">
                        {sortTimelineItems(form.getValues('timeline')).map((item, itemIndex) => (
                            <div key={itemIndex} className="flex gap-4">
                                <div className="flex-shrink-0 w-16 text-center">
                                    <div className="text-sm font-medium text-gray-500">{item.time}</div>
                                    {getActivityIcon(item.type)}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-medium">{item.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="p-4 text-gray-500 hover:text-gray-700"
                                    onClick={() => {
                                        setOpen(
                                            <CustomModal title='Edit Timeline Item'>
                                                <TimelineForm
                                                    onSubmit={(data) => {
                                                        const updatedTimeline = [...form.getValues("timeline")];
                                                        updatedTimeline[itemIndex] = data;
                                                        form.setValue("timeline", updatedTimeline);
                                                        setClose();
                                                    }}
                                                    initialData={item}
                                                />
                                            </CustomModal>
                                        )
                                    }}
                                >
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accommodation */}
                <FormField
                    control={form.control}
                    name="accommodation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Accommodation</FormLabel>
                            <FormControl>
                                <Input placeholder="Hotel name and details" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Included Meals */}
                <div className="flex flex-col gap-3">
                    <FormLabel>Included Meals</FormLabel>
                    {mealOptions.map((meal) => (
                        <FormField
                            key={meal}
                            control={form.control}
                            name="included_meals"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value?.includes(meal)}
                                            onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...(field.value || []), meal])
                                                    : field.onChange(
                                                        field.value?.filter((value) => value !== meal) || []
                                                    );
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel className="font-normal">{meal}</FormLabel>
                                </FormItem>
                            )}
                        />
                    ))}
                </div>

                {/* Travel Tips */}
                <FormField
                    control={form.control}
                    name="travel_tips"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Travel Tips</FormLabel>
                            {/* <div className="space-y-2"> */}
                            {field.value?.map((tip, index) => (
                                <li key={index} className="text-sm text-amber-700 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    {tip}

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="p-0 text-red-500"
                                        onClick={() => {
                                            const updated = [...field.value];
                                            updated.splice(index, 1);
                                            form.setValue("travel_tips", updated);
                                        }}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </li>
                            ))}
                            {/* </div> */}
                            <FormControl>
                                <div className="flex space-x-4">
                                    <Input
                                        value={travelTip}
                                        onChange={(e) => setTravelTip(e.target.value)}
                                        placeholder="e.g., Wear comfortable shoes"
                                    />
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        onClick={() => {
                                            if (travelTip.trim()) {
                                                // Update form values
                                                const currentTips = form.getValues("travel_tips") || [];
                                                form.setValue("travel_tips", [...currentTips, travelTip.trim()]);
                                                setTravelTip("");
                                            }
                                        }}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="button"
                    className="w-full md:w-auto"
                    onClick={handleSubmit}
                >
                    Save Itinerary
                </Button>
            </div>

        </Form >
    );
}
