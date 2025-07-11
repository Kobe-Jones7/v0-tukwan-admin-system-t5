'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ItineraryTimelineType } from "@/app/generated/prisma";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModal } from "@/providers/modal";

// Main form schema
const formSchema = z.object({
    description: z.string().min(1, "Description is required"),
    time: z.string().min(1, "Time is required"),
    title: z.string().min(1, "Title is required"),
    type: z.nativeEnum(ItineraryTimelineType),
});

type TimelineFormValues = z.infer<typeof formSchema>;

interface TimelineFormProps {
    onSubmit: (data: TimelineFormValues) => void;
    initialData?: Partial<TimelineFormValues>;
}

export function TimelineForm({
    onSubmit,
    initialData,
}: TimelineFormProps) {
    const defaultValues: Partial<TimelineFormValues> = {
        description: "",
        time: "",
        title: "",
        type: "time",
        ...initialData,
    };

    // Map enum values to user-friendly labels
    const itineraryTypeOptions = [
        { value: "road", label: "Road Trip" },
        { value: "tour", label: "Guided Tour" },
        { value: "time", label: "Time-based Activity" },
        { value: "food", label: "Food Experience" },
    ];

    const form = useForm<TimelineFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Departure from Accra" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Experience this fascinating aspect of Ghanaian culture..."
                                    className="min-h-[100px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name={"time"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Time</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="time"
                                        placeholder="e.g., 10:00 AM"
                                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name={"type"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {itineraryTypeOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                    Save Itinerary
                </Button>
            </form>
        </Form>
    );
}
