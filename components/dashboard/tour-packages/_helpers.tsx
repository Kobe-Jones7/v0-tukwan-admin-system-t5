import { ItineraryTimeline, ItineraryTimelineType } from "@/app/generated/prisma";
import { parse } from "date-fns";
import { Car, Camera, Utensils, Clock, Home } from "lucide-react";


export function getActivityIcon(type: ItineraryTimelineType) {
    switch (type) {
        case "road":
            return <Car className="h-5 w-5 mx-auto text-gray-500 mt-1" />;
        case "tour":
            return <Camera className="h-5 w-5 mx-auto text-blue-500 mt-1" />;
        case "food":
            return <Utensils className="h-5 w-5 mx-auto text-green-500 mt-1" />;
        case "time":
        default:
            return <Clock className="h-5 w-5 mx-auto text-gray-500 mt-1" />;
    }
}

export function sortTimelineItems(timeline: ItineraryTimeline[]) {
    try {
        return timeline.sort((a, b) => {
            // Convert "HH:mm" to total minutes for first activity
            const [aHours, aMinutes] = a.time.split(':').map(Number);
            const totalMinutesA = aHours * 60 + aMinutes;

            // Convert "HH:mm" to total minutes for second activity
            const [bHours, bMinutes] = b.time.split(':').map(Number);
            const totalMinutesB = bHours * 60 + bMinutes;

            // Compare total minutes for ascending order
            return totalMinutesA - totalMinutesB;
        })
    } catch (error) {
        console.error("Error sorting timeline items:", error);
        return timeline; // Return original order if sorting fails
    }
}