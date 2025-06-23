import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Coffee, Utensils, Home, Car, Camera, Moon } from "lucide-react"
import type { TourPackage } from "@/data/tour-packages"

interface DetailedItineraryProps {
  tourPackage: TourPackage
}

export function DetailedItinerary({ tourPackage }: DetailedItineraryProps) {
  // AI-enhanced itinerary with more details
  const enhancedItinerary = generateEnhancedItinerary(tourPackage)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Day-by-Day Itinerary</h2>
        <p className="text-gray-600">
          Experience the best of {tourPackage.region} Region with our carefully crafted itinerary. Each day has been
          designed to provide you with unforgettable experiences and insights into Ghana's rich culture and heritage.
        </p>
      </div>

      <div className="space-y-8">
        {enhancedItinerary.map((day, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 md:h-64">
              <Image
                src={day.image || "/placeholder.svg?height=400&width=800&query=Ghana+tourism+landscape"}
                alt={`Day ${day.day} - ${day.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <Badge className="bg-blue-600 mb-2">Day {day.day}</Badge>
                <h3 className="text-xl md:text-2xl font-bold">{day.title}</h3>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 mb-4">
                {day.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-600 mb-6">{day.description}</p>

              <div className="space-y-6">
                {day.schedule.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-sm font-medium text-gray-500">{item.time}</div>
                      {getActivityIcon(item.type)}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      {item.location && (
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {item.location}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {day.accommodation && (
                <>
                  <Separator className="my-6" />
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Accommodation</h4>
                      <p className="text-sm text-gray-600">{day.accommodation.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{day.accommodation.description}</p>
                    </div>
                  </div>
                </>
              )}

              {day.meals && day.meals.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <div>
                    <h4 className="font-medium mb-3">Included Meals</h4>
                    <div className="flex gap-4">
                      {day.meals.includes("breakfast") && (
                        <div className="flex items-center gap-1 text-sm">
                          <Coffee className="h-4 w-4 text-amber-600" />
                          <span>Breakfast</span>
                        </div>
                      )}
                      {day.meals.includes("lunch") && (
                        <div className="flex items-center gap-1 text-sm">
                          <Utensils className="h-4 w-4 text-green-600" />
                          <span>Lunch</span>
                        </div>
                      )}
                      {day.meals.includes("dinner") && (
                        <div className="flex items-center gap-1 text-sm">
                          <Moon className="h-4 w-4 text-blue-600" />
                          <span>Dinner</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {day.tips && (
                <>
                  <Separator className="my-6" />
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">Travel Tips for Day {day.day}</h4>
                    <ul className="space-y-1">
                      {day.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-amber-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getActivityIcon(type: string) {
  switch (type) {
    case "transport":
      return <Car className="h-5 w-5 mx-auto text-gray-500 mt-1" />
    case "sightseeing":
      return <Camera className="h-5 w-5 mx-auto text-blue-500 mt-1" />
    case "meal":
      return <Utensils className="h-5 w-5 mx-auto text-green-500 mt-1" />
    case "activity":
      return <Clock className="h-5 w-5 mx-auto text-amber-500 mt-1" />
    case "rest":
      return <Home className="h-5 w-5 mx-auto text-purple-500 mt-1" />
    default:
      return <Clock className="h-5 w-5 mx-auto text-gray-500 mt-1" />
  }
}

// AI-enhanced itinerary generator
function generateEnhancedItinerary(tourPackage: TourPackage) {
  // This function takes the basic itinerary from the tour package
  // and enhances it with more details, images, and tips

  return tourPackage.itinerary.map((day) => {
    // Parse activities to create a more detailed schedule
    const schedule = day.activities.map((activity) => {
      const [time, description] = activity.split(": ")

      // Determine activity type based on keywords
      let type = "activity"
      if (
        description.toLowerCase().includes("breakfast") ||
        description.toLowerCase().includes("lunch") ||
        description.toLowerCase().includes("dinner")
      ) {
        type = "meal"
      } else if (
        description.toLowerCase().includes("drive") ||
        description.toLowerCase().includes("return") ||
        description.toLowerCase().includes("departure")
      ) {
        type = "transport"
      } else if (
        description.toLowerCase().includes("visit") ||
        description.toLowerCase().includes("tour") ||
        description.toLowerCase().includes("explore")
      ) {
        type = "sightseeing"
      } else if (
        description.toLowerCase().includes("hotel") ||
        description.toLowerCase().includes("rest") ||
        description.toLowerCase().includes("leisure")
      ) {
        type = "rest"
      }

      // Extract location if present
      let location = ""
      if (description.includes("at")) {
        const parts = description.split("at")
        if (parts.length > 1) {
          location = parts[1].trim()
        }
      }

      return {
        time,
        title: description,
        description: generateActivityDescription(description, tourPackage.region),
        type,
        location,
      }
    })

    // Determine meals included
    const meals = []
    if (day.activities.some((a) => a.toLowerCase().includes("breakfast"))) meals.push("breakfast")
    if (day.activities.some((a) => a.toLowerCase().includes("lunch"))) meals.push("lunch")
    if (day.activities.some((a) => a.toLowerCase().includes("dinner"))) meals.push("dinner")

    // Generate travel tips based on activities
    const tips = generateTravelTips(day.activities, tourPackage.region, day.title)

    // Generate a description for the day
    const description = generateDayDescription(day.title, tourPackage.region)

    // Determine tags for the day
    const tags = generateDayTags(day.title, day.activities)

    // Generate an image for the day
    const image = generateDayImage(day.title, tourPackage.region)

    // Generate accommodation details if available
    let accommodationDetails = null
    if (day.accommodation) {
      accommodationDetails = {
        name: day.accommodation,
        description: generateAccommodationDescription(day.accommodation),
      }
    }

    return {
      day: day.day,
      title: day.title,
      description,
      schedule,
      meals,
      tips,
      tags,
      image,
      accommodation: accommodationDetails,
    }
  })
}

function generateActivityDescription(activity: string, region: string) {
  // This would ideally be a more sophisticated AI function
  // For now, we'll use some simple pattern matching

  if (activity.toLowerCase().includes("castle")) {
    return "Explore this historic UNESCO World Heritage site with a knowledgeable guide who will explain the castle's role in the transatlantic slave trade and its significance in Ghanaian history."
  } else if (activity.toLowerCase().includes("market")) {
    return "Immerse yourself in the vibrant colors, sounds, and scents of this bustling market. Interact with local vendors and discover authentic Ghanaian crafts, textiles, and produce."
  } else if (activity.toLowerCase().includes("lunch") || activity.toLowerCase().includes("dinner")) {
    return "Enjoy delicious Ghanaian cuisine featuring local specialties. Your guide will explain the cultural significance of different dishes and ingredients."
  } else if (activity.toLowerCase().includes("national park") || activity.toLowerCase().includes("canopy")) {
    return "Experience the breathtaking biodiversity of Ghana's rainforest. Look out for colorful birds, butterflies, and if you're lucky, some of the park's elusive mammals."
  } else if (activity.toLowerCase().includes("beach")) {
    return "Relax on the golden sands and enjoy the refreshing Atlantic Ocean. This is a perfect opportunity to unwind and reflect on your Ghanaian experiences."
  } else if (activity.toLowerCase().includes("hotel")) {
    return "Check in and freshen up at your comfortable accommodation. Take some time to rest before the next exciting part of your journey."
  }

  // Default description
  return "Experience this fascinating aspect of Ghanaian culture and history with expert guidance and insightful commentary."
}

function generateDayDescription(title: string, region: string) {
  if (title.toLowerCase().includes("historical") || title.toLowerCase().includes("heritage")) {
    return `Today you'll journey through time as you explore the rich historical heritage of ${region} Region. From ancient traditions to colonial influences, you'll gain deep insights into Ghana's complex past.`
  } else if (title.toLowerCase().includes("nature") || title.toLowerCase().includes("wildlife")) {
    return `Immerse yourself in the natural beauty of ${region} Region today. You'll encounter diverse ecosystems, unique wildlife, and breathtaking landscapes that showcase Ghana's natural heritage.`
  } else if (title.toLowerCase().includes("cultural") || title.toLowerCase().includes("arts")) {
    return `Today is dedicated to experiencing the vibrant cultural tapestry of ${region} Region. You'll engage with local communities, witness traditional crafts, and participate in authentic cultural exchanges.`
  } else if (title.toLowerCase().includes("beach") || title.toLowerCase().includes("coastal")) {
    return `Enjoy the coastal splendor of ${region} Region today. With golden beaches, historic fishing communities, and the rhythmic Atlantic waves, you'll experience Ghana's maritime charm.`
  }

  // Default description
  return `Today's journey through ${region} Region offers a perfect blend of cultural immersion, historical discovery, and natural beauty. Each carefully selected experience contributes to your understanding of Ghana's rich heritage.`
}

function generateDayTags(title: string, activities: string[]) {
  const tags = []

  if (
    title.toLowerCase().includes("historical") ||
    activities.some((a) => a.toLowerCase().includes("castle") || a.toLowerCase().includes("fort"))
  ) {
    tags.push("Historical")
  }

  if (
    title.toLowerCase().includes("nature") ||
    activities.some((a) => a.toLowerCase().includes("park") || a.toLowerCase().includes("wildlife"))
  ) {
    tags.push("Nature")
  }

  if (
    title.toLowerCase().includes("cultural") ||
    activities.some((a) => a.toLowerCase().includes("cultural") || a.toLowerCase().includes("traditional"))
  ) {
    tags.push("Cultural")
  }

  if (activities.some((a) => a.toLowerCase().includes("beach") || a.toLowerCase().includes("coast"))) {
    tags.push("Coastal")
  }

  if (activities.some((a) => a.toLowerCase().includes("hike") || a.toLowerCase().includes("walk"))) {
    tags.push("Active")
  }

  if (
    activities.some(
      (a) =>
        a.toLowerCase().includes("food") || a.toLowerCase().includes("cuisine") || a.toLowerCase().includes("lunch"),
    )
  ) {
    tags.push("Culinary")
  }

  // Ensure we have at least 2 tags
  if (tags.length < 2) {
    tags.push("Sightseeing")
  }

  return tags
}

function generateDayImage(title: string, region: string) {
  if (title.toLowerCase().includes("castle") || title.toLowerCase().includes("fort")) {
    return "/images/cape-coast-castle.png"
  } else if (title.toLowerCase().includes("market") || title.toLowerCase().includes("arts")) {
    return "/makola-market-ghana.png"
  } else if (title.toLowerCase().includes("nature") || title.toLowerCase().includes("park")) {
    return "/placeholder-wc2av.png"
  } else if (title.toLowerCase().includes("beach") || title.toLowerCase().includes("coastal")) {
    return "/ghana-beach-sunset.png"
  } else if (region === "Greater Accra") {
    return "/independence-arch-ghana.png"
  } else if (region === "Central") {
    return "/images/cape-coast-castle.png"
  }

  // Default image
  return "/placeholder.svg?height=400&width=800&query=Ghana+tourism+landscape+beautiful"
}

function generateTravelTips(activities: string[], region: string, title: string) {
  const tips = []

  if (activities.some((a) => a.toLowerCase().includes("castle") || a.toLowerCase().includes("fort"))) {
    tips.push("Wear comfortable shoes as you'll be walking on uneven surfaces in the historical sites.")
    tips.push("Bring a light jacket as some parts of the castles can be cool and damp.")
  }

  if (activities.some((a) => a.toLowerCase().includes("hike") || a.toLowerCase().includes("walk"))) {
    tips.push("Wear sturdy footwear suitable for hiking on potentially muddy trails.")
    tips.push("Bring insect repellent for protection against mosquitoes and other insects.")
  }

  if (activities.some((a) => a.toLowerCase().includes("beach"))) {
    tips.push("Don't forget sunscreen, sunglasses, and a hat for sun protection.")
    tips.push("Consider bringing a change of clothes if you plan to swim.")
  }

  if (activities.some((a) => a.toLowerCase().includes("market"))) {
    tips.push("Bring small denominations of local currency for easier transactions at the market.")
    tips.push("Practice your bargaining skills - it's expected and part of the cultural experience.")
  }

  if (region === "Greater Accra") {
    tips.push("Accra can get very hot - stay hydrated by drinking plenty of water throughout the day.")
  }

  if (title.toLowerCase().includes("nature") || title.toLowerCase().includes("park")) {
    tips.push("Bring binoculars if you have them for better wildlife viewing.")
    tips.push("Keep your camera ready but be respectful when photographing wildlife.")
  }

  // Ensure we have at least 2 tips
  if (tips.length < 2) {
    tips.push("Keep your camera charged for the many photo opportunities throughout the day.")
    tips.push("Stay hydrated by drinking plenty of water, especially in Ghana's warm climate.")
  }

  // Return a maximum of 4 tips
  return tips.slice(0, 4)
}

function generateAccommodationDescription(accommodation: string) {
  if (accommodation.toLowerCase().includes("eco-lodge")) {
    return "This sustainable accommodation blends harmoniously with the surrounding nature, offering comfort while minimizing environmental impact."
  } else if (accommodation.toLowerCase().includes("hotel")) {
    return "Enjoy comfortable rooms, friendly service, and modern amenities at this well-located hotel."
  } else if (accommodation.toLowerCase().includes("resort")) {
    return "Relax in luxury at this resort featuring excellent amenities, attentive service, and beautiful surroundings."
  }

  // Default description
  return "Your carefully selected accommodation provides comfort and convenience, perfectly positioned for the next day's adventures."
}
