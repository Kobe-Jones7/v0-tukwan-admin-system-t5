export interface Attraction {
  id: string
  name: string
  description: string
  region: string
  images: string[]
  coordinates: {
    lat: number
    lng: number
  }
  tags: string[]
  highlights: string[]
  history: string
  practicalInfo: {
    openingHours: string
    entryFee: string
    accessibility: string
    bestTimeToVisit: string
  }
  category: string
  visitingInfo?: {
    openingHours: string
    entryFee: string
    bestTimeToVisit?: string
    accessibility?: string
  }
  culturalSignificance?: string
  location?: {
    address: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  tips?: string[]
  nearbyAttractions?: string[]
  wildlife?: {
    mammals?: string[]
    birds?: string[]
  }
  events?: string[]
}

export const attractions: Attraction[] = [
  // Add numeric ID attractions for testing
  {
    id: "1",
    name: "Cape Coast Castle",
    description:
      "A UNESCO World Heritage site and former slave trading post, Cape Coast Castle stands as a powerful reminder of Ghana's complex history and the transatlantic slave trade.",
    region: "Central",
    images: [
      "/images/cape-coast-castle-oceanview.webp",
      "/cape-coast-castle-ghana.png",
      "/cape-coast-castle-interior.png",
    ],
    coordinates: { lat: 5.1053, lng: -1.2466 },
    tags: ["Historical", "UNESCO", "Castle", "Museum"],
    category: "Historical",
    highlights: [
      "UNESCO World Heritage Site",
      "Door of No Return",
      "Museum of slavery and colonial history",
      "Guided tours available",
      "Stunning ocean views",
    ],
    history:
      "Built by the Swedish Africa Company in 1653, Cape Coast Castle became the headquarters of British colonial administration in the Gold Coast. It served as a major hub for the transatlantic slave trade for over 200 years.",
    practicalInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "GH₵ 40 (Adults), GH₵ 20 (Students)",
      accessibility: "Partially accessible",
      bestTimeToVisit: "November to March (dry season)",
    },
    visitingInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "GH₵ 40 (Adults), GH₵ 20 (Students)",
    },
    culturalSignificance:
      "Cape Coast Castle represents one of the most tangible reminders of Europe's early contact with Africa and the subsequent exploitation through the slave trade. For Ghanaians, it symbolizes both historical trauma and resilience in the face of colonization.",
    tips: [
      "Take a guided tour to fully understand the historical context",
      "Allow at least 2-3 hours for your visit",
      "The dungeons can be emotionally challenging - prepare yourself",
      "Photography is permitted in most areas but be respectful",
      "Visit the museum section before touring the dungeons",
    ],
    nearbyAttractions: ["Elmina Castle", "Kakum National Park", "Hans Cottage Botel"],
  },
  {
    id: "2",
    name: "Kakum National Park",
    description:
      "A tropical rainforest reserve spanning 375 square kilometers in Ghana's Central Region. The park is famous for its canopy walkway, suspended 30 meters above the forest floor.",
    region: "Central",
    images: ["/kakum-canopy-walk.png", "/placeholder.svg?height=400&width=600"],
    coordinates: { lat: 5.3833, lng: -1.3833 },
    tags: ["Nature", "Rainforest", "Wildlife", "Adventure"],
    category: "Nature",
    highlights: [
      "Famous canopy walkway 30 meters high",
      "Tropical rainforest ecosystem",
      "Diverse wildlife and bird species",
      "Forest elephants and monkeys",
      "Conservation and education center",
    ],
    history:
      "Kakum National Park was established in 1932 as a timber reserve but was redesignated as a national park in 1992 to protect the area's unique ecosystem. The iconic canopy walkway was built in 1995.",
    practicalInfo: {
      openingHours: "8:30 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150 (additional fee for canopy walkway)",
      accessibility: "Limited accessibility for those with mobility issues; canopy walkway requires physical ability",
      bestTimeToVisit: "Early morning for wildlife viewing and smaller crowds",
    },
    culturalSignificance:
      "Beyond its ecological importance, Kakum National Park holds cultural significance for surrounding communities who have traditional connections to the forest.",
    tips: [
      "Arrive early to avoid long queues for the canopy walkway",
      "Wear comfortable clothing and closed shoes suitable for hiking",
      "Bring insect repellent and water",
      "Consider hiring a guide for the nature trail",
      "The canopy walkway may not be suitable for those with a fear of heights",
    ],
    nearbyAttractions: ["Cape Coast Castle", "Elmina Castle", "Hans Cottage Botel"],
  },
  {
    id: "3",
    name: "Mole National Park",
    description:
      "Ghana's largest wildlife refuge and premier safari destination, encompassing over 4,800 square kilometers of pristine savanna ecosystem in the northern part of the country.",
    region: "Northern",
    images: [
      "/images/mole-national-park-elephant.jpg",
      "/images/mole-elephants-pair.jpg",
      "/placeholder.svg?height=400&width=600",
    ],
    coordinates: { lat: 9.75, lng: -1.75 },
    tags: ["Nature", "Wildlife", "Safari", "Elephants", "Conservation"],
    category: "Nature",
    highlights: [
      "Ghana's largest wildlife refuge with over 4,800 sq km",
      "Home to 300+ elephants and diverse wildlife",
      "Authentic African safari experiences",
      "Walking safaris and jeep tours available",
      "Over 300 bird species for birdwatching",
      "Mole River ecosystem and water holes",
      "Community-based conservation model",
    ],
    history:
      "Mole National Park was established in 1958 as a wildlife reserve and later upgraded to a national park in 1971. The area was traditionally used by local communities for hunting and farming before becoming a protected area.",
    practicalInfo: {
      openingHours: "6:00 AM - 6:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 50 (additional fees for guided tours and activities)",
      accessibility: "Limited accessibility due to unpaved roads and rugged terrain; 4WD vehicles recommended",
      bestTimeToVisit:
        "Dry season (November-March) for optimal wildlife viewing when animals gather around water sources",
    },
    culturalSignificance:
      "Mole National Park represents Ghana's commitment to preserving its natural heritage and promoting ecotourism as a sustainable development strategy.",
    wildlife: {
      mammals: ["African Elephants", "Buffalo", "Kob Antelope", "Bushbuck", "Warthog", "Baboons"],
      birds: ["Hornbills", "Kingfishers", "Bee-eaters", "Eagles", "Vultures", "Guinea Fowl"],
    },
    tips: [
      "Book guided tours and accommodation well in advance",
      "Wear neutral-colored clothing and comfortable closed shoes",
      "Bring binoculars, camera with zoom lens, insect repellent",
      "Respect wildlife by maintaining safe distances",
      "Visit during early morning or late afternoon when animals are most active",
    ],
    nearbyAttractions: ["Larabanga Mosque", "Mognori Eco-Village", "Wechiau Community Hippo Sanctuary"],
  },
  {
    id: "4",
    name: "Lake Volta",
    description:
      "Lake Volta is one of the world's largest artificial lakes by surface area, created by the construction of the Akosombo Dam on the Volta River. This massive reservoir spans over 8,500 square kilometers and offers stunning scenery, fishing opportunities, and boat cruises through picturesque landscapes dotted with islands and traditional fishing villages.",
    region: "Volta",
    images: ["/images/volta-lake.png", "/images/adome-bridge-volta-lake.jpeg"],
    coordinates: { lat: 6.2667, lng: 0.0833 },
    tags: ["Nature", "Lake", "Boating", "Fishing", "Scenic"],
    category: "Nature",
    highlights: [
      "One of the world's largest artificial lakes",
      "Stunning scenic boat cruises",
      "Traditional fishing villages",
      "Akosombo Dam engineering marvel",
      "Island hopping opportunities",
      "Rich birdlife and aquatic ecosystem",
      "Cultural interactions with local communities",
    ],
    history:
      "Lake Volta was created between 1961 and 1965 following the construction of the Akosombo Dam as part of Ghana's Volta River Project. The project was initiated by Ghana's first President, Dr. Kwame Nkrumah, as part of his industrialization vision for the newly independent nation. The dam was built to generate hydroelectric power and support aluminum smelting operations. The creation of the lake required the relocation of over 80,000 people from 700 villages, making it one of the largest resettlement projects in Africa at the time.",
    practicalInfo: {
      openingHours: "Boat tours typically available 8:00 AM - 5:00 PM daily",
      entryFee: "Boat tours: GHS 100-300 per person depending on duration and route",
      accessibility: "Limited accessibility; boat boarding may be challenging for those with mobility issues",
      bestTimeToVisit: "Dry season (November-March) for calm waters and clear skies",
    },
    culturalSignificance:
      "Lake Volta represents both Ghana's industrial ambitions and the sacrifices made for development. The lake has become integral to the livelihoods of surrounding communities through fishing, transportation, and tourism. It serves as a vital transportation route connecting northern and southern Ghana, and supports a thriving fishing industry that provides protein and income for thousands of families. The lake also holds spiritual significance for many local communities who perform traditional ceremonies on its waters.",
    tips: [
      "Book boat tours in advance, especially during peak season",
      "Bring sunscreen, hat, and sunglasses for protection on the water",
      "Consider overnight stays on houseboats for a unique experience",
      "Visit local fishing villages to learn about traditional fishing methods",
      "Bring a camera for spectacular sunset and sunrise views",
      "Pack light snacks and water for longer boat trips",
    ],
    nearbyAttractions: ["Akosombo Dam", "Shai Hills Resource Reserve", "Aburi Botanical Gardens", "Adomi Bridge"],
    location: {
      address: "Lake Volta, Eastern and Volta Regions, Ghana",
      coordinates: {
        latitude: 6.2667,
        longitude: 0.0833,
      },
    },
  },
  // Keep the original string ID attractions as well
  {
    id: "cape-coast-castle",
    name: "Cape Coast Castle",
    description:
      "A UNESCO World Heritage site and former slave trading post, Cape Coast Castle stands as a powerful reminder of Ghana's complex history and the transatlantic slave trade.",
    region: "Central",
    images: [
      "/images/cape-coast-castle-oceanview.webp",
      "/cape-coast-castle-ghana.png",
      "/cape-coast-castle-interior.png",
    ],
    coordinates: { lat: 5.1053, lng: -1.2466 },
    tags: ["Historical", "UNESCO", "Castle", "Museum"],
    category: "Historical",
    highlights: [
      "UNESCO World Heritage Site",
      "Door of No Return",
      "Museum of slavery and colonial history",
      "Guided tours available",
      "Stunning ocean views",
    ],
    history:
      "Built by the Swedish Africa Company in 1653, Cape Coast Castle became the headquarters of British colonial administration in the Gold Coast. It served as a major hub for the transatlantic slave trade for over 200 years.",
    practicalInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "GH₵ 40 (Adults), GH₵ 20 (Students)",
      accessibility: "Partially accessible",
      bestTimeToVisit: "November to March (dry season)",
    },
    visitingInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "GH₵ 40 (Adults), GH₵ 20 (Students)",
    },
  },
  {
    id: "independence-arch",
    name: "Independence Arch",
    description:
      "The Independence Arch, also known as Black Star Gate, is a monument in Accra that marks Ghana's independence from British colonial rule in 1957.",
    region: "Greater Accra",
    images: ["/images/independence-arch-ghana.jpg", "/independence-square-accra.png"],
    coordinates: { lat: 5.5502, lng: -0.2175 },
    tags: ["Historical", "Monument", "Independence", "Memorial"],
    category: "Historical",
    highlights: [
      "Symbol of Ghana's independence",
      "Black Star monument",
      "Independence Square",
      "Historical significance",
      "Photo opportunities",
    ],
    history:
      "Built in 1961 to commemorate Ghana's independence in 1957, the Independence Arch stands as a symbol of African liberation and Ghana's emergence as the first sub-Saharan African country to gain independence.",
    practicalInfo: {
      openingHours: "8:00 AM - 6:00 PM daily",
      entryFee: "Free",
      accessibility: "Fully accessible",
      bestTimeToVisit: "Year-round",
    },
    visitingInfo: {
      openingHours: "8:00 AM - 6:00 PM daily",
      entryFee: "Free",
    },
  },
  {
    id: "kwame-nkrumah-mausoleum",
    name: "Kwame Nkrumah Mausoleum",
    description:
      "The final resting place of Ghana's first President, Dr. Kwame Nkrumah, featuring a museum dedicated to his life and Ghana's independence struggle.",
    region: "Greater Accra",
    images: ["/kwame-nkrumah-mausoleum.png", "/kwame-nkrumah-memorial-park.png"],
    coordinates: { lat: 5.5502, lng: -0.2175 },
    tags: ["Historical", "Museum", "Independence", "Memorial"],
    category: "Historical",
    highlights: [
      "Tomb of Ghana's first President",
      "Museum with personal artifacts",
      "Beautiful memorial park",
      "Independence Square nearby",
      "Educational exhibits",
    ],
    history:
      "Established in 1992, the mausoleum honors Dr. Kwame Nkrumah, who led Ghana to independence in 1957. The site includes his tomb, a museum, and memorial park.",
    practicalInfo: {
      openingHours: "9:00 AM - 5:00 PM (Closed Mondays)",
      entryFee: "GH₵ 20 (Adults), GH₵ 10 (Students)",
      accessibility: "Fully accessible",
      bestTimeToVisit: "Year-round",
    },
    visitingInfo: {
      openingHours: "9:00 AM - 5:00 PM (Closed Mondays)",
      entryFee: "GH₵ 20 (Adults), GH₵ 10 (Students)",
    },
  },
  {
    id: "shai-hills",
    name: "Shai Hills Resource Reserve",
    region: "Greater Accra",
    category: "Nature",
    description:
      "Shai Hills Resource Reserve is a wildlife reserve and the closest safari destination to Accra. The reserve features savanna and forest habitats, rocky outcrops, and diverse wildlife including baboons, kobs, and numerous bird species.",
    history:
      "The Shai Hills area was originally home to the Shai people, who were forcibly relocated by the British colonial administration in 1892. The area was designated as a resource reserve in 1971 to protect its unique ecosystem and cultural heritage.",
    culturalSignificance:
      "The reserve has significant cultural importance as the ancestral home of the Shai people. The caves within the hills were used for various cultural and religious practices, including initiation ceremonies.",
    visitingInfo: {
      openingHours: "6:00 AM - 6:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 50",
      bestTimeToVisit: "Early morning or late afternoon for wildlife viewing",
      accessibility: "Limited accessibility for those with mobility issues due to rocky terrain",
    },
    location: {
      address: "Shai Hills Resource Reserve, Doryumu, Ghana",
      coordinates: {
        latitude: 5.9167,
        longitude: 0.05,
      },
    },
    images: ["/shai-hills-caves-ghana.png"],
    tips: [
      "Hire a guide for the best experience and to learn about the history and wildlife",
      "Wear comfortable shoes for hiking",
      "Bring binoculars for bird watching",
      "Don't feed or approach the baboons",
      "Visit early in the day when animals are most active",
    ],
    nearbyAttractions: ["Krobo Mountain", "Akosombo Dam", "Aburi Botanical Gardens"],
    coordinates: {
      lat: 5.9167,
      lng: 0.05,
    },
    wildlife: {
      mammals: ["Olive Baboons", "Kob Antelope", "Bushbuck", "Maxwell's Duiker", "Green Monkeys"],
      birds: ["Stone Partridge", "African Grey Hornbill", "Violet Turaco", "White-crowned Cliff Chat"],
    },
    highlights: [
      "Closest safari destination to Accra",
      "Ancient caves with historical significance",
      "Diverse wildlife including baboons and antelopes",
      "Sacred baobab trees",
      "Rocky outcrops and scenic views",
    ],
    practicalInfo: {
      openingHours: "6:00 AM - 6:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 50",
      accessibility: "Limited accessibility due to rocky terrain",
      bestTimeToVisit: "Early morning or late afternoon for wildlife viewing",
    },
  },
]

export function getAllAttractions(): Attraction[] {
  return attractions
}

export function getAttractionById(id: string): Attraction | undefined {
  return attractions.find((attraction) => attraction.id === id)
}

export function getAttractionsByRegion(region: string): Attraction[] {
  return attractions.filter((attraction) => attraction.region === region)
}

export function getAttractionsByTag(tag: string): Attraction[] {
  return attractions.filter((attraction) => attraction.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const categories = new Set<string>()
  attractions.forEach((attraction) => {
    categories.add(attraction.category)
  })
  return Array.from(categories).sort()
}

export function getAllRegions(): string[] {
  const regions = new Set<string>()
  attractions.forEach((attraction) => {
    regions.add(attraction.region)
  })
  return Array.from(regions).sort()
}
