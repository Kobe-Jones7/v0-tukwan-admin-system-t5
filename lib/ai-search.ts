export interface LocationFactors {
  accessibility: number // 1-5 scale (1 = very remote, 5 = easily accessible)
  touristDemand: number // 1-5 scale (1 = low demand, 5 = high demand)
  accommodationLevel: number // 1-5 scale (1 = basic, 5 = luxury)
  distanceFromAccra: number // kilometers
  culturalSignificance: number // 1-5 scale
  naturalAttractions: number // 1-5 scale
}

export interface PricingBreakdown {
  basePrice: number
  accessibilityAdjustment: number
  demandAdjustment: number
  accommodationAdjustment: number
  distanceAdjustment: number
  culturalAdjustment: number
  attractionsAdjustment: number
  seasonalMultiplier: number
  finalPrice: number
}

export interface AISearchResult {
  location: string
  overview: string
  keyFacts: string[]
  packageTitle: string
  duration: string
  pricing: PricingBreakdown
  itinerary: {
    day: number
    title: string
    activities: string[]
    meals: string[]
  }[]
  included: string[]
  notIncluded: string[]
  travelTips: string[]
  bestTimeToVisit: string
  lastUpdated: string
}

// Location database with pricing factors
const locationFactors: Record<string, LocationFactors> = {
  "aflao border": {
    accessibility: 3,
    touristDemand: 2,
    accommodationLevel: 2,
    distanceFromAccra: 180,
    culturalSignificance: 4,
    naturalAttractions: 2,
  },
  wa: {
    accessibility: 2,
    touristDemand: 2,
    accommodationLevel: 3,
    distanceFromAccra: 630,
    culturalSignificance: 5,
    naturalAttractions: 3,
  },
  kumasi: {
    accessibility: 5,
    touristDemand: 5,
    accommodationLevel: 4,
    distanceFromAccra: 270,
    culturalSignificance: 5,
    naturalAttractions: 3,
  },
  "cape coast": {
    accessibility: 4,
    touristDemand: 5,
    accommodationLevel: 4,
    distanceFromAccra: 165,
    culturalSignificance: 5,
    naturalAttractions: 4,
  },
  tamale: {
    accessibility: 3,
    touristDemand: 3,
    accommodationLevel: 3,
    distanceFromAccra: 560,
    culturalSignificance: 4,
    naturalAttractions: 3,
  },
}

function calculateDynamicPricing(location: string): PricingBreakdown {
  const factors = locationFactors[location.toLowerCase()] || {
    accessibility: 3,
    touristDemand: 3,
    accommodationLevel: 3,
    distanceFromAccra: 300,
    culturalSignificance: 3,
    naturalAttractions: 3,
  }

  // Base price for 3-day tour
  const basePrice = 600

  // Calculate adjustments
  const accessibilityAdjustment = (6 - factors.accessibility) * 50 // Remote locations cost more
  const demandAdjustment = factors.touristDemand * 80 // Popular destinations cost more
  const accommodationAdjustment = factors.accommodationLevel * 60 // Better accommodation costs more
  const distanceAdjustment = Math.floor(factors.distanceFromAccra / 100) * 40 // Distance from Accra
  const culturalAdjustment = factors.culturalSignificance * 30 // Cultural significance adds value
  const attractionsAdjustment = factors.naturalAttractions * 25 // More attractions = higher price

  // Calculate subtotal
  const subtotal =
    basePrice +
    accessibilityAdjustment +
    demandAdjustment +
    accommodationAdjustment +
    distanceAdjustment +
    culturalAdjustment +
    attractionsAdjustment

  // Seasonal multiplier (dry season Nov-Mar is peak)
  const currentMonth = new Date().getMonth()
  const isPeakSeason = currentMonth >= 10 || currentMonth <= 2 // Nov-Mar
  const seasonalMultiplier = isPeakSeason ? 1.3 : 1.0

  const finalPrice = Math.round(subtotal * seasonalMultiplier)

  return {
    basePrice,
    accessibilityAdjustment,
    demandAdjustment,
    accommodationAdjustment,
    distanceAdjustment,
    culturalAdjustment,
    attractionsAdjustment,
    seasonalMultiplier,
    finalPrice,
  }
}

export async function generateAISearchResult(query: string): Promise<AISearchResult> {
  const location = query.toLowerCase()
  const pricing = calculateDynamicPricing(location)

  // Location-specific content
  const locationData = getLocationData(location)

  return {
    location: query,
    overview: locationData.overview,
    keyFacts: locationData.keyFacts,
    packageTitle: `${query} Cultural Discovery Tour`,
    duration: "3 Days, 2 Nights",
    pricing,
    itinerary: locationData.itinerary,
    included: [
      "Professional tour guide",
      "All entrance fees",
      "Transportation in air-conditioned vehicle",
      "2 nights accommodation",
      "Daily breakfast",
      "Cultural activities",
      "Travel insurance",
    ],
    notIncluded: [
      "International flights",
      "Lunch and dinner (unless specified)",
      "Personal expenses",
      "Tips and gratuities",
      "Visa fees",
    ],
    travelTips: locationData.travelTips,
    bestTimeToVisit: "November to March (dry season) for best weather conditions",
    lastUpdated: new Date().toISOString(),
  }
}

function getLocationData(location: string) {
  const locationMap: Record<string, any> = {
    "aflao border": {
      overview:
        "Aflao is Ghana's largest border town with Togo, offering a unique cross-border cultural experience. This bustling commercial hub showcases the vibrant Ewe culture and serves as a gateway between two nations. Experience the dynamic border market atmosphere, traditional Ewe customs, and the fascinating blend of Ghanaian and Togolese influences.",
      keyFacts: [
        "Population: ~67,000 people",
        "Primary Language: Ewe, English",
        "Currency: Ghana Cedis (GH₵) & CFA Francs",
        "Climate: Tropical savanna",
        "Notable: Largest Ghana-Togo border crossing",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Border Culture",
          activities: [
            "Arrival and check-in",
            "Border market exploration",
            "Ewe cultural center visit",
            "Traditional drumming session",
          ],
          meals: ["Welcome dinner with local Ewe cuisine"],
        },
        {
          day: 2,
          title: "Cross-Border Experience",
          activities: [
            "Guided border crossing experience",
            "Togo day trip",
            "Traditional craft workshops",
            "Local family visit",
          ],
          meals: ["Breakfast", "Traditional lunch"],
        },
        {
          day: 3,
          title: "Cultural Immersion & Departure",
          activities: [
            "Traditional Ewe dance performance",
            "Local market shopping",
            "Cultural storytelling session",
            "Departure",
          ],
          meals: ["Breakfast", "Farewell lunch"],
        },
      ],
      travelTips: [
        "Bring valid passport for border crossing",
        "Both Ghana Cedis and CFA Francs are useful",
        "Learn basic Ewe greetings",
        "Respect local customs and traditions",
        "Best visited during market days (Tuesday & Friday)",
      ],
    },
    wa: {
      overview:
        "Wa is the capital of the Upper West Region, known for its rich Islamic heritage and traditional Sudano-Sahelian architecture. This historic town offers authentic northern Ghanaian culture, traditional mud-brick mosques, and warm hospitality. Experience the unique blend of Islamic and traditional African cultures in one of Ghana's most culturally preserved regions.",
      keyFacts: [
        "Population: ~102,000 people",
        "Primary Language: Waali, English",
        "Climate: Sudan savanna",
        "Architecture: Sudano-Sahelian style",
        "Notable: Ancient Islamic trading center",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Islamic Heritage",
          activities: [
            "Arrival and orientation",
            "Wa Naa's Palace visit",
            "Ancient mosque tour",
            "Traditional architecture walk",
          ],
          meals: ["Welcome dinner with northern cuisine"],
        },
        {
          day: 2,
          title: "Cultural Immersion",
          activities: [
            "Traditional craft workshops",
            "Local market exploration",
            "Cultural dance performance",
            "Storytelling with elders",
          ],
          meals: ["Breakfast", "Traditional lunch"],
        },
        {
          day: 3,
          title: "Nature & Departure",
          activities: [
            "Wechiau Hippo Sanctuary visit",
            "Traditional weaving demonstration",
            "Souvenir shopping",
            "Departure",
          ],
          meals: ["Breakfast", "Farewell lunch"],
        },
      ],
      travelTips: [
        "Respect Islamic customs and dress modestly",
        "Learn basic Waali greetings",
        "Bring sun protection for hot climate",
        "Try local shea butter products",
        "Visit during harmattan season for cooler weather",
      ],
    },
  }

  return (
    locationMap[location] || {
      overview: `${location} is a fascinating destination in Ghana offering unique cultural experiences and natural beauty. This location provides visitors with authentic Ghanaian hospitality and memorable adventures.`,
      keyFacts: [
        "Rich cultural heritage",
        "Friendly local community",
        "Beautiful natural scenery",
        "Traditional crafts and arts",
        "Authentic Ghanaian experience",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Exploration",
          activities: [
            "Arrival and check-in",
            "Local orientation tour",
            "Cultural site visits",
            "Traditional welcome ceremony",
          ],
          meals: ["Welcome dinner"],
        },
        {
          day: 2,
          title: "Cultural Immersion",
          activities: [
            "Traditional craft workshops",
            "Local market visit",
            "Cultural performances",
            "Community interaction",
          ],
          meals: ["Breakfast", "Traditional lunch"],
        },
        {
          day: 3,
          title: "Nature & Departure",
          activities: ["Natural attractions visit", "Souvenir shopping", "Cultural exchange", "Departure"],
          meals: ["Breakfast", "Farewell lunch"],
        },
      ],
      travelTips: [
        "Respect local customs and traditions",
        "Learn basic local greetings",
        "Bring appropriate clothing",
        "Try local cuisine specialties",
        "Engage with community members",
      ],
    }
  )
}
