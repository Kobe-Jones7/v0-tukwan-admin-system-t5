interface TourPackage {
  title: string
  location: string
  description: string
  duration: string
  price: number
  rating: number
  maxGroupSize: number
  image: string
  highlights: string[]
}

interface Attraction {
  name: string
  location: string
  description: string
  image: string
}

export async function generateAISearchResults(query: string) {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate contextual response based on query
  const response = generateContextualResponse(query)

  // Generate tour packages based on query
  const packages = generateTourPackages(query)

  // Generate related attractions
  const attractions = generateAttractions(query)

  return {
    response,
    packages,
    attractions,
  }
}

function generateContextualResponse(query: string): string {
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.includes("beach") || lowerQuery.includes("coast")) {
    return "Ghana's coastline offers stunning beaches perfect for relaxation and water activities. The Central and Western regions have the most beautiful beaches, with Cape Coast and Elmina offering historical significance alongside coastal beauty. I've found some great beach and coastal tour packages for you!"
  }

  if (
    lowerQuery.includes("culture") ||
    lowerQuery.includes("traditional") ||
    lowerQuery.includes("ashanti") ||
    lowerQuery.includes("kumasi")
  ) {
    return "Ghana is rich in cultural heritage, especially in the Ashanti region around Kumasi. You can experience traditional Kente weaving, visit royal palaces, and participate in authentic cultural ceremonies. The packages below offer immersive cultural experiences with local communities."
  }

  if (
    lowerQuery.includes("wildlife") ||
    lowerQuery.includes("safari") ||
    lowerQuery.includes("mole") ||
    lowerQuery.includes("elephant")
  ) {
    return "Mole National Park is Ghana's premier wildlife destination, home to elephants, antelopes, and over 300 bird species. The best time for wildlife viewing is during the dry season (November-April) when animals gather around water sources."
  }

  if (lowerQuery.includes("accra") || lowerQuery.includes("city")) {
    return "Accra, Ghana's vibrant capital, offers a perfect blend of modern city life and rich history. From Independence Square to bustling markets like Makola, there's plenty to explore. The city also serves as a great base for day trips to nearby attractions."
  }

  if (lowerQuery.includes("history") || lowerQuery.includes("castle") || lowerQuery.includes("slave")) {
    return "Ghana's historical sites, particularly the slave castles at Cape Coast and Elmina, offer profound insights into the transatlantic slave trade. These UNESCO World Heritage sites provide educational and emotional experiences that are essential for understanding Ghana's history."
  }

  // Default response for location-specific queries
  if (lowerQuery.includes("aflao") || lowerQuery.includes("border")) {
    return "Aflao is Ghana's main border town with Togo, offering unique cross-border cultural experiences. While primarily a transit point, the area provides opportunities to experience Ewe culture and explore the Volta Region's attractions like Wli Waterfalls and Lake Volta."
  }

  return `Based on your search for "${query}", I've curated some excellent tour packages and attractions that match your interests. Ghana offers incredible diversity in experiences, from cultural immersion to natural wonders. These recommendations will help you discover the authentic beauty of Ghana!`
}

function generateTourPackages(query: string): TourPackage[] {
  const lowerQuery = query.toLowerCase()

  // Base packages that can be customized
  const basePackages: TourPackage[] = [
    {
      title: "Cape Coast Heritage Experience",
      location: "Central Region, Ghana",
      description:
        "Explore Ghana's rich history at Cape Coast Castle and surrounding historical sites with expert guides.",
      duration: "3 days, 2 nights",
      price: 850,
      rating: 4.8,
      maxGroupSize: 15,
      image: "/images/cape-coast-castle-oceanview.webp",
      highlights: ["UNESCO World Heritage Sites", "Historical guided tours", "Cultural performances", "Local cuisine"],
    },
    {
      title: "Mole National Park Safari",
      location: "Northern Region, Ghana",
      description:
        "Experience Ghana's premier wildlife destination with elephants, antelopes, and diverse bird species.",
      duration: "4 days, 3 nights",
      price: 1200,
      rating: 4.7,
      maxGroupSize: 12,
      image: "/images/mole-national-park-elephant.jpg",
      highlights: ["Elephant encounters", "Game drives", "Bird watching", "Walking safaris"],
    },
    {
      title: "Kumasi Cultural Immersion",
      location: "Ashanti Region, Ghana",
      description:
        "Immerse yourself in Ashanti culture with traditional crafts, palace visits, and authentic experiences.",
      duration: "3 days, 2 nights",
      price: 750,
      rating: 4.9,
      maxGroupSize: 14,
      image: "/images/kente-cloth.png",
      highlights: ["Kente weaving workshop", "Manhyia Palace", "Traditional ceremonies", "Local markets"],
    },
  ]

  // Customize packages based on query
  if (lowerQuery.includes("aflao") || lowerQuery.includes("border") || lowerQuery.includes("volta")) {
    return [
      {
        title: "Aflao Border & Volta Region Explorer",
        location: "Volta Region, Ghana",
        description:
          "Discover the unique border culture of Aflao and explore the stunning Volta Region with its waterfalls and lake.",
        duration: "4 days, 3 nights",
        price: 680,
        rating: 4.5,
        maxGroupSize: 16,
        image: "/images/adome-bridge-volta-lake.jpeg",
        highlights: [
          "Cross-border cultural experience",
          "Wli Waterfalls hike",
          "Lake Volta cruise",
          "Ewe traditional culture",
        ],
      },
      {
        title: "Volta Lake & Waterfalls Adventure",
        location: "Eastern & Volta Regions",
        description:
          "Experience the beauty of Lake Volta and Ghana's highest waterfall in this nature-focused adventure.",
        duration: "5 days, 4 nights",
        price: 920,
        rating: 4.6,
        maxGroupSize: 12,
        image: "/images/volta-lake.png",
        highlights: [
          "Wli Waterfalls trek",
          "Lake Volta boat cruise",
          "Traditional fishing villages",
          "Mountain hiking",
        ],
      },
      {
        title: "Eastern Region Cultural Trail",
        location: "Eastern Region, Ghana",
        description:
          "Explore the cultural diversity of the Eastern Region including traditional festivals and craft centers.",
        duration: "3 days, 2 nights",
        price: 580,
        rating: 4.4,
        maxGroupSize: 18,
        image: "/placeholder.svg?height=300&width=400",
        highlights: ["Traditional festivals", "Craft workshops", "Mountain communities", "Local cuisine"],
      },
    ]
  }

  if (lowerQuery.includes("beach") || lowerQuery.includes("coast")) {
    return [
      {
        title: "Ghana Coastal Paradise",
        location: "Central & Western Regions",
        description: "Relax on pristine beaches while exploring historical coastal towns and fishing communities.",
        duration: "5 days, 4 nights",
        price: 890,
        rating: 4.6,
        maxGroupSize: 16,
        image: "/ghana-beach-sunset.png",
        highlights: ["Beautiful beaches", "Fishing village visits", "Water sports", "Coastal cuisine"],
      },
      ...basePackages.slice(0, 2),
    ]
  }

  if (lowerQuery.includes("culture") || lowerQuery.includes("traditional")) {
    return [
      basePackages[2], // Kumasi Cultural
      basePackages[0], // Cape Coast Heritage
      {
        title: "Northern Ghana Cultural Safari",
        location: "Northern Region, Ghana",
        description: "Experience the unique cultures of Northern Ghana with traditional architecture and customs.",
        duration: "6 days, 5 nights",
        price: 1100,
        rating: 4.5,
        maxGroupSize: 14,
        image: "/placeholder.svg?height=300&width=400",
        highlights: ["Traditional architecture", "Cultural ceremonies", "Local crafts", "Community visits"],
      },
    ]
  }

  if (lowerQuery.includes("wildlife") || lowerQuery.includes("safari")) {
    return [
      basePackages[1], // Mole Safari
      {
        title: "Kakum Canopy Walk & Wildlife",
        location: "Central Region, Ghana",
        description: "Experience the famous canopy walk and diverse wildlife in Ghana's tropical rainforest.",
        duration: "2 days, 1 night",
        price: 450,
        rating: 4.4,
        maxGroupSize: 20,
        image: "/kakum-canopy-walk.png",
        highlights: ["Canopy walk experience", "Rainforest wildlife", "Bird watching", "Nature photography"],
      },
      {
        title: "Shai Hills Wildlife Adventure",
        location: "Greater Accra Region",
        description: "Explore the unique landscape and wildlife of Shai Hills, including baboons and antelopes.",
        duration: "1 day",
        price: 180,
        rating: 4.2,
        maxGroupSize: 25,
        image: "/shai-hills-caves-ghana.png",
        highlights: ["Wildlife spotting", "Cave exploration", "Rock climbing", "Cultural sites"],
      },
    ]
  }

  // Default packages for general queries
  return basePackages
}

function generateAttractions(query: string): Attraction[] {
  const lowerQuery = query.toLowerCase()

  const baseAttractions: Attraction[] = [
    {
      name: "Cape Coast Castle",
      location: "Cape Coast, Central Region",
      description: "UNESCO World Heritage Site and former slave trading post with deep historical significance.",
      image: "/images/cape-coast-castle-oceanview.webp",
    },
    {
      name: "Mole National Park",
      location: "Northern Region",
      description: "Ghana's largest wildlife park, home to elephants, antelopes, and over 300 bird species.",
      image: "/images/mole-national-park-elephant.jpg",
    },
    {
      name: "Kakum National Park",
      location: "Central Region",
      description: "Famous for its canopy walkway suspended 30 meters above the forest floor.",
      image: "/kakum-canopy-walk.png",
    },
  ]

  if (lowerQuery.includes("aflao") || lowerQuery.includes("volta")) {
    return [
      {
        name: "Wli Waterfalls",
        location: "Volta Region",
        description: "Ghana's highest waterfall, cascading 60 meters down in a beautiful forest setting.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Lake Volta",
        location: "Eastern & Volta Regions",
        description: "One of the world's largest man-made lakes, perfect for boat cruises and fishing.",
        image: "/images/volta-lake.png",
      },
      {
        name: "Adome Bridge",
        location: "Volta Region",
        description: "Scenic bridge over the Volta River offering beautiful views and photo opportunities.",
        image: "/images/adome-bridge-volta-lake.jpeg",
      },
    ]
  }

  if (lowerQuery.includes("accra")) {
    return [
      {
        name: "Independence Square",
        location: "Accra, Greater Accra",
        description: "Historic square commemorating Ghana's independence with the iconic Black Star Gate.",
        image: "/independence-square-accra.png",
      },
      {
        name: "Kwame Nkrumah Memorial Park",
        location: "Accra, Greater Accra",
        description: "Memorial dedicated to Ghana's first president and independence leader.",
        image: "/kwame-nkrumah-memorial-park.png",
      },
      {
        name: "Makola Market",
        location: "Accra, Greater Accra",
        description: "Vibrant traditional market offering local goods, textiles, and authentic Ghanaian culture.",
        image: "/makola-market-ghana.png",
      },
    ]
  }

  return baseAttractions
}
