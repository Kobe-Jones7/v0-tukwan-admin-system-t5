interface DayActivity {
  time: string
  activity: string
  description: string
  location?: string
}

interface ItineraryDay {
  day: number
  title: string
  activities: DayActivity[]
}

interface EstimatedCost {
  accommodation: number
  meals: number
  transport: number
  total: number
}

export async function generateAISearchResults(query: string) {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const location = extractLocation(query)
  const itinerary = generateItinerary(location)
  const overview = generateOverview(location)
  const tips = generateTips(location)
  const estimatedCost = generateEstimatedCost(location)

  return {
    location,
    overview,
    itinerary,
    tips,
    estimatedCost,
  }
}

function extractLocation(query: string): string {
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.includes("aflao")) return "Aflao"
  if (lowerQuery.includes("kumasi")) return "Kumasi"
  if (lowerQuery.includes("cape coast")) return "Cape Coast"
  if (lowerQuery.includes("tamale")) return "Tamale"
  if (lowerQuery.includes("wa")) return "Wa"
  if (lowerQuery.includes("bolgatanga")) return "Bolgatanga"
  if (lowerQuery.includes("accra")) return "Accra"
  if (lowerQuery.includes("elmina")) return "Elmina"
  if (lowerQuery.includes("ho")) return "Ho"
  if (lowerQuery.includes("sunyani")) return "Sunyani"

  // Default to the query itself if no specific location found
  return query.charAt(0).toUpperCase() + query.slice(1)
}

function generateOverview(location: string): string {
  const overviews: { [key: string]: string } = {
    Aflao:
      "Aflao, Ghana's main border town with Togo, offers a unique cross-border cultural experience. This 3-day itinerary combines border town exploration with nearby Volta Region attractions, including waterfalls and traditional Ewe culture.",
    Kumasi:
      "Kumasi, the cultural heart of Ghana and capital of the Ashanti Region, is perfect for experiencing traditional Ghanaian culture. This itinerary focuses on royal palaces, traditional crafts, and authentic cultural experiences.",
    "Cape Coast":
      "Cape Coast offers a profound journey through Ghana's history with its UNESCO World Heritage slave castles and beautiful coastal scenery. This itinerary balances historical education with coastal relaxation.",
    Tamale:
      "Tamale, the capital of Northern Ghana, provides an authentic experience of traditional Ghanaian life with unique architecture, vibrant markets, and cultural diversity.",
    Wa: "Wa offers an immersive experience into traditional Northern Ghanaian culture with its distinctive Sudano-Sahelian architecture and rich cultural heritage.",
    Bolgatanga:
      "Bolgatanga is famous for its traditional crafts, especially basket weaving, and serves as a gateway to experiencing authentic Upper East Region culture.",
    Accra:
      "Ghana's vibrant capital city combines modern urban life with rich historical sites, bustling markets, and beautiful beaches along the Atlantic coast.",
  }

  return (
    overviews[location] ||
    `Explore ${location} with this carefully crafted itinerary that showcases the best of local culture, attractions, and authentic Ghanaian experiences.`
  )
}

function generateItinerary(location: string): ItineraryDay[] {
  const itineraries: { [key: string]: ItineraryDay[] } = {
    Aflao: [
      {
        day: 1,
        title: "Border Town Exploration",
        activities: [
          {
            time: "8:00 AM",
            activity: "Arrival and Border Market Visit",
            description: "Explore the bustling Aflao border market and experience cross-border trade culture",
            location: "Aflao Border Market",
          },
          {
            time: "10:30 AM",
            activity: "Ewe Cultural Center",
            description: "Learn about traditional Ewe culture, customs, and history",
            location: "Local Cultural Center",
          },
          {
            time: "2:00 PM",
            activity: "Traditional Kente Weaving Workshop",
            description: "Participate in authentic kente cloth weaving with local artisans",
            location: "Artisan Workshop",
          },
          {
            time: "6:00 PM",
            activity: "Local Cuisine Experience",
            description: "Enjoy traditional Ewe dishes and border town specialties",
            location: "Local Restaurant",
          },
        ],
      },
      {
        day: 2,
        title: "Volta Region Adventure",
        activities: [
          {
            time: "7:00 AM",
            activity: "Journey to Wli Waterfalls",
            description: "Travel to Ghana's highest waterfall for hiking and nature photography",
            location: "Wli Waterfalls",
          },
          {
            time: "10:00 AM",
            activity: "Waterfall Hike",
            description: "Guided hike to the upper falls with local guide",
            location: "Wli Waterfalls Trail",
          },
          {
            time: "2:00 PM",
            activity: "Traditional Village Visit",
            description: "Visit local Ewe village and interact with community members",
            location: "Nearby Village",
          },
          {
            time: "5:00 PM",
            activity: "Lake Volta Sunset",
            description: "Relax by Lake Volta and enjoy the sunset",
            location: "Lake Volta Shore",
          },
        ],
      },
      {
        day: 3,
        title: "Cultural Immersion",
        activities: [
          {
            time: "8:00 AM",
            activity: "Traditional Drumming & Dancing",
            description: "Learn traditional Ewe drumming and dance with local performers",
            location: "Cultural Center",
          },
          {
            time: "11:00 AM",
            activity: "Local Craft Shopping",
            description: "Shop for authentic local crafts and souvenirs",
            location: "Craft Market",
          },
          {
            time: "2:00 PM",
            activity: "Cross-Border Experience",
            description: "Optional visit to Lomé, Togo (passport required)",
            location: "Aflao-Lomé Border",
          },
          {
            time: "5:00 PM",
            activity: "Farewell Dinner",
            description: "Traditional farewell meal with local family",
            location: "Local Home",
          },
        ],
      },
    ],
    Kumasi: [
      {
        day: 1,
        title: "Royal Ashanti Heritage",
        activities: [
          {
            time: "9:00 AM",
            activity: "Manhyia Palace Museum",
            description: "Explore the official residence of the Asantehene and learn about Ashanti royal history",
            location: "Manhyia Palace",
          },
          {
            time: "11:30 AM",
            activity: "Kejetia Market Tour",
            description: "Navigate West Africa's largest market with a local guide",
            location: "Kejetia Market",
          },
          {
            time: "2:00 PM",
            activity: "Traditional Kente Weaving",
            description: "Visit authentic kente weaving village and try weaving yourself",
            location: "Bonwire Village",
          },
          {
            time: "5:00 PM",
            activity: "Ashanti Cultural Performance",
            description: "Enjoy traditional drumming, dancing, and storytelling",
            location: "Cultural Center",
          },
        ],
      },
      {
        day: 2,
        title: "Crafts and Traditions",
        activities: [
          {
            time: "8:00 AM",
            activity: "Adinkra Cloth Making",
            description: "Learn the ancient art of Adinkra symbol printing on cloth",
            location: "Ntonso Village",
          },
          {
            time: "11:00 AM",
            activity: "Wood Carving Workshop",
            description: "Try traditional Ashanti wood carving with master craftsmen",
            location: "Ahwiaa Village",
          },
          {
            time: "2:30 PM",
            activity: "Kumasi Fort Visit",
            description: "Explore the historic British colonial fort and museum",
            location: "Kumasi Fort",
          },
          {
            time: "4:30 PM",
            activity: "Local Food Tasting",
            description: "Sample authentic Ashanti cuisine and local delicacies",
            location: "Local Restaurant",
          },
        ],
      },
      {
        day: 3,
        title: "Nature and Spirituality",
        activities: [
          {
            time: "7:30 AM",
            activity: "Lake Bosomtwe Excursion",
            description: "Visit Ghana's only natural lake, sacred to the Ashanti people",
            location: "Lake Bosomtwe",
          },
          {
            time: "10:00 AM",
            activity: "Traditional Fishing Experience",
            description: "Learn traditional fishing methods from local fishermen",
            location: "Lake Bosomtwe",
          },
          {
            time: "2:00 PM",
            activity: "Sacred Grove Visit",
            description: "Explore traditional sacred forest with spiritual significance",
            location: "Local Sacred Grove",
          },
          {
            time: "4:00 PM",
            activity: "Souvenir Shopping",
            description: "Final shopping for authentic Ashanti crafts and souvenirs",
            location: "Central Market",
          },
        ],
      },
    ],
  }

  // Default itinerary for unlisted locations
  const defaultItinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Arrival and Local Exploration",
      activities: [
        {
          time: "9:00 AM",
          activity: "Local Market Visit",
          description: `Explore the vibrant local market in ${location} and experience daily life`,
          location: "Central Market",
        },
        {
          time: "11:00 AM",
          activity: "Cultural Site Tour",
          description: "Visit important cultural and historical sites in the area",
          location: "Local Cultural Sites",
        },
        {
          time: "2:00 PM",
          activity: "Traditional Craft Workshop",
          description: "Participate in local craft making with community artisans",
          location: "Artisan Workshop",
        },
        {
          time: "5:00 PM",
          activity: "Local Cuisine Experience",
          description: "Enjoy authentic local dishes and regional specialties",
          location: "Local Restaurant",
        },
      ],
    },
    {
      day: 2,
      title: "Nature and Adventure",
      activities: [
        {
          time: "8:00 AM",
          activity: "Nature Walk/Hike",
          description: "Explore the natural beauty surrounding the area",
          location: "Local Nature Area",
        },
        {
          time: "11:00 AM",
          activity: "Community Visit",
          description: "Visit local community and learn about traditional lifestyle",
          location: "Local Village",
        },
        {
          time: "2:00 PM",
          activity: "Cultural Performance",
          description: "Enjoy traditional music, dance, and storytelling",
          location: "Community Center",
        },
        {
          time: "4:30 PM",
          activity: "Sunset Viewing",
          description: "Relax and enjoy beautiful sunset views",
          location: "Scenic Viewpoint",
        },
      ],
    },
  ]

  return itineraries[location] || defaultItinerary
}

function generateTips(location: string): string[] {
  const tips: { [key: string]: string[] } = {
    Aflao: [
      "Bring your passport if you plan to cross into Togo",
      "The border market is busiest in the morning",
      "Learn basic Ewe greetings to connect with locals",
      "Try the local palm wine and traditional dishes",
      "Bargaining is expected in markets",
      "Respect local customs and dress modestly",
    ],
    Kumasi: [
      "Visit during the week to avoid weekend crowds at markets",
      "Dress respectfully when visiting the palace",
      "Learn about Adinkra symbols and their meanings",
      "Try fufu and light soup, a local specialty",
      "Bargain respectfully in markets",
      "Book kente weaving workshops in advance",
    ],
    "Cape Coast": [
      "Book castle tours in advance, especially on weekends",
      "Bring comfortable walking shoes for castle exploration",
      "The castle tours can be emotionally intense",
      "Try fresh seafood at local restaurants",
      "Visit early morning or late afternoon to avoid heat",
      "Respect the historical significance of the sites",
    ],
  }

  const defaultTips = [
    "Learn basic local greetings in the regional language",
    "Dress modestly and respect local customs",
    "Try local cuisine and specialties",
    "Bargain respectfully in markets",
    "Bring comfortable walking shoes",
    "Stay hydrated and use sun protection",
  ]

  return tips[location] || defaultTips
}

function generateEstimatedCost(location: string): EstimatedCost {
  const costs: { [key: string]: EstimatedCost } = {
    Aflao: {
      accommodation: 300,
      meals: 180,
      transport: 150,
      total: 630,
    },
    Kumasi: {
      accommodation: 450,
      meals: 240,
      transport: 200,
      total: 890,
    },
    "Cape Coast": {
      accommodation: 400,
      meals: 220,
      transport: 180,
      total: 800,
    },
    Accra: {
      accommodation: 600,
      meals: 300,
      transport: 250,
      total: 1150,
    },
  }

  const defaultCost: EstimatedCost = {
    accommodation: 350,
    meals: 200,
    transport: 150,
    total: 700,
  }

  return costs[location] || defaultCost
}
