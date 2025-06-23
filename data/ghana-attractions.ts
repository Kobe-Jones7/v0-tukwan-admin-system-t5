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
  }
}

export const attractions: Attraction[] = [
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
      "Shai Hills Resource Reserve is a wildlife reserve and the closest safari destination to Accra. The reserve features savanna and forest habitats, rocky outcrops, and diverse wildlife including baboons, kobs, and numerous bird species. It also contains caves and ancient baobab trees with historical and cultural significance.",
    history:
      "The Shai Hills area was originally home to the Shai people, who were forcibly relocated by the British colonial administration in 1892. The hills contain caves that were used by the Shai people for shelter, storage, and religious ceremonies. The area was designated as a resource reserve in 1971 to protect its unique ecosystem and cultural heritage. Archaeological remains of the Shai settlements can still be found within the reserve.",
    culturalSignificance:
      "The reserve has significant cultural importance as the ancestral home of the Shai people. The caves within the hills were used for various cultural and religious practices, including initiation ceremonies and as hiding places during conflicts. The Shai people still maintain strong spiritual connections to the area and occasionally perform traditional ceremonies at sacred sites within the reserve. The baobab trees found in the reserve are also considered sacred in many Ghanaian cultures.",
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
    images: ["/shai-hills-baboons.png", "/shai-hills-caves-ghana.png"],
    tips: [
      "Hire a guide for the best experience and to learn about the history and wildlife",
      "Wear comfortable shoes for hiking",
      "Bring binoculars for bird watching",
      "Don't feed or approach the baboons",
      "Visit early in the day when animals are most active",
    ],
    nearbyAttractions: ["Krobo Mountain", "Akosombo Dam", "Aburi Botanical Gardens"],
    coordinates: {
      latitude: 5.9167,
      longitude: 0.05,
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
  {
    id: "christiansborg-castle",
    name: "Christiansborg Castle (Osu Castle)",
    region: "Greater Accra",
    category: "Historical",
    description:
      "Christiansborg Castle, also known as Osu Castle, is a historic fortress located in Accra. Built by the Danes in the 17th century, it served as a trading post, slave fort, and later as the seat of Ghana's government until 2013. The castle stands as a powerful reminder of Ghana's colonial past and the transatlantic slave trade.",
    history:
      "Christiansborg Castle was originally built by the Danes in 1661 as a trading post. Over the centuries, it changed hands multiple times among various European powers including the Portuguese, Swedes, and British. The castle played a significant role in the transatlantic slave trade, serving as a holding facility for enslaved Africans before they were shipped to the Americas. After Ghana's independence in 1957, it became the seat of government and presidential residence until 2013, when government operations moved to Jubilee House.",
    culturalSignificance:
      "The castle represents both the painful history of colonialism and the slave trade in Ghana, as well as the country's journey to independence and self-governance. As a former seat of government, it witnessed key moments in Ghana's post-independence history. The castle's dual role as both a symbol of oppression and later of governance makes it a complex cultural landmark that embodies Ghana's historical journey.",
    visitingInfo: {
      openingHours: "9:00 AM - 4:30 PM, Tuesday to Sunday (Closed on Mondays)",
      entryFee: "Locals: GHS 30, Foreigners: GHS 100",
      bestTimeToVisit: "Weekday mornings to avoid crowds",
      accessibility: "Partially wheelchair accessible",
    },
    location: {
      address: "Castle Road, Osu, Accra, Ghana",
      coordinates: {
        latitude: 5.5459,
        longitude: -0.1808,
      },
    },
    images: [
      "/christiansborg-castle-osu-ghana.png",
      "/placeholder.svg?height=400&width=600&query=Osu+Castle+historical+Ghana",
    ],
    tips: [
      "Book a guided tour to fully understand the historical significance",
      "Photography restrictions may apply in certain areas",
      "Visit early in the day to avoid the afternoon heat",
      "Combine with a visit to nearby Independence Square",
      "Dress respectfully as it is a historical site",
    ],
    nearbyAttractions: ["Independence Arch", "Kwame Nkrumah Memorial Park", "Osu Oxford Street"],
    highlights: [
      "Former seat of Ghana's government",
      "Danish colonial architecture",
      "Historical significance in slave trade",
      "Museum and guided tours",
      "Coastal fortress location",
    ],
    coordinates: { lat: 5.5459, lng: -0.1808 },
    tags: ["Historical", "Castle", "Colonial", "Museum"],
    practicalInfo: {
      openingHours: "9:00 AM - 4:30 PM, Tuesday to Sunday (Closed on Mondays)",
      entryFee: "Locals: GHS 30, Foreigners: GHS 100",
      accessibility: "Partially wheelchair accessible",
      bestTimeToVisit: "Weekday mornings to avoid crowds",
    },
  },
  {
    id: "kwame-nkrumah-museum",
    name: "Kwame Nkrumah Memorial Park and Museum",
    region: "Greater Accra",
    category: "Historical",
    description:
      "The Kwame Nkrumah Memorial Park and Museum honors Ghana's first president and foremost pan-Africanist. The park contains the mausoleum where Nkrumah and his wife are buried, surrounded by fountains and sculptures. The museum houses personal artifacts, photographs, and manuscripts that tell the story of Nkrumah's life and Ghana's independence struggle.",
    history:
      "The memorial park was built on the site where Nkrumah declared Ghana's independence on March 6, 1957. It was opened in 1992 to commemorate Nkrumah's role in Ghana's independence and his contributions to pan-Africanism. The park underwent significant renovation in 2022-2023 to enhance its facilities and exhibits. Kwame Nkrumah led Ghana to become the first sub-Saharan African country to gain independence from colonial rule and was a key figure in the formation of the Organization of African Unity (now African Union).",
    culturalSignificance:
      "The memorial park is a symbol of Ghana's independence and the pan-African movement. Nkrumah's famous declaration, 'The independence of Ghana is meaningless unless it is linked up with the total liberation of Africa,' encapsulates his vision that resonated throughout the continent. The site serves as an educational center about Ghana's struggle for freedom and Nkrumah's philosophy of African unity and self-determination. It is a place of pilgrimage for those interested in African liberation movements and pan-Africanism.",
    visitingInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 30, Foreigners: GHS 100",
      bestTimeToVisit: "Weekday mornings",
      accessibility: "Wheelchair accessible",
    },
    location: {
      address: "Barnes Road, Accra, Ghana",
      coordinates: {
        latitude: 5.5495,
        longitude: -0.2008,
      },
    },
    images: ["/kwame-nkrumah-mausoleum.png", "/kwame-nkrumah-memorial-park.png"],
    tips: [
      "Take advantage of guided tours offered by knowledgeable staff",
      "Visit the museum first to understand Nkrumah's life before seeing the mausoleum",
      "The park is a solemn place, so maintain appropriate decorum",
      "Check if any special exhibitions are taking place during your visit",
      "Plan at least 1-2 hours to fully appreciate the site",
    ],
    nearbyAttractions: ["Independence Arch", "National Museum", "Jamestown Lighthouse"],
    highlights: [
      "Mausoleum of Ghana's first President",
      "Museum with personal artifacts",
      "Beautiful memorial park",
      "Independence Square nearby",
      "Educational exhibits",
    ],
    coordinates: { lat: 5.5495, lng: -0.2008 },
    tags: ["Historical", "Museum", "Independence", "Memorial"],
    practicalInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 30, Foreigners: GHS 100",
      accessibility: "Wheelchair accessible",
      bestTimeToVisit: "Weekday mornings",
    },
  },
  {
    id: "tsenku-waterfalls",
    name: "Tsenku Waterfalls",
    region: "Greater Accra",
    category: "Nature",
    description:
      "Tsenku Waterfalls (also spelled Chenku) is a hidden natural gem located in the Dodowa Forest in the Shai Hills. The waterfall cascades down rocky outcrops into a refreshing pool surrounded by lush vegetation. It offers visitors a peaceful retreat from the bustling city of Accra and an opportunity to connect with nature.",
    history:
      "The waterfall has been known to local communities for generations and holds spiritual significance for some indigenous groups. The area around Tsenku was traditionally used for spiritual rituals and ceremonies by local priests and priestesses. In recent years, it has been developed as an ecotourism destination, with efforts to preserve its natural beauty while making it accessible to visitors.",
    culturalSignificance:
      "For the local communities, Tsenku Waterfalls is more than just a natural attraction; it is a sacred site with spiritual importance. Traditional beliefs hold that the waterfall has healing properties and is home to nature spirits. Some local customs involve offering libations at the waterfall before major community events. The site represents the deep connection between Ghanaian cultural practices and natural landmarks.",
    visitingInfo: {
      openingHours: "8:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 15, Foreigners: GHS 30",
      bestTimeToVisit: "Rainy season (May-October) for maximum water flow",
      accessibility: "Moderate hiking required, not suitable for those with mobility issues",
    },
    location: {
      address: "Tsenku Waterfalls, Dodowa, Greater Accra Region, Ghana",
      coordinates: {
        latitude: 5.8833,
        longitude: 0.0833,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Tsenku+Waterfalls+Ghana+cascade",
      "/placeholder.svg?height=400&width=600&query=Chenku+Waterfalls+forest+Ghana",
    ],
    tips: [
      "Wear comfortable footwear suitable for hiking",
      "Bring swimwear if you plan to swim in the pool",
      "Pack insect repellent and sunscreen",
      "Consider hiring a local guide who can share cultural insights",
      "Visit on weekdays to avoid crowds",
    ],
    nearbyAttractions: ["Shai Hills Resource Reserve", "Dodowa Forest", "Aburi Botanical Gardens"],
    highlights: [
      "Hidden natural gem in Dodowa Forest",
      "Refreshing pool for swimming",
      "Spiritual significance to local communities",
      "Peaceful retreat from city life",
      "Lush vegetation and rocky outcrops",
    ],
    coordinates: { lat: 5.8833, lng: 0.0833 },
    tags: ["Nature", "Waterfall", "Hiking", "Swimming"],
    practicalInfo: {
      openingHours: "8:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 15, Foreigners: GHS 30",
      accessibility: "Moderate hiking required, not suitable for those with mobility issues",
      bestTimeToVisit: "Rainy season (May-October) for maximum water flow",
    },
  },
  {
    id: "national-museum",
    name: "Ghana National Museum",
    region: "Greater Accra",
    category: "Cultural",
    description:
      "The Ghana National Museum is the country's premier museum showcasing Ghana's rich cultural heritage and history. The museum houses an extensive collection of artifacts, including traditional crafts, historical relics, archaeological findings, and contemporary art. It offers visitors a comprehensive overview of Ghana's diverse cultures, from pre-colonial times to the present day.",
    history:
      "The Ghana National Museum was established in 1957, the same year Ghana gained independence from British colonial rule. It was part of Dr. Kwame Nkrumah's vision to preserve and promote Ghana's cultural heritage. The museum initially focused on archaeological and ethnographic collections but has expanded over the years to include contemporary art and historical documents. After being closed for renovation for several years, it reopened with modernized facilities and expanded exhibitions.",
    culturalSignificance:
      "The museum serves as a repository of Ghana's collective memory and cultural identity. It plays a crucial role in preserving tangible aspects of Ghana's heritage and educating both citizens and visitors about the country's rich cultural diversity. The exhibits highlight the artistic achievements, technological innovations, and social organizations of various Ghanaian ethnic groups. The museum also addresses Ghana's experience with colonialism, the transatlantic slave trade, and the struggle for independence.",
    visitingInfo: {
      openingHours: "9:00 AM - 4:00 PM, Tuesday to Sunday (Closed on Mondays)",
      entryFee: "Locals: GHS 20, Foreigners: GHS 40",
      bestTimeToVisit: "Weekday mornings for a quieter experience",
      accessibility: "Wheelchair accessible",
    },
    location: {
      address: "Barnes Road, Accra, Ghana",
      coordinates: {
        latitude: 5.556,
        longitude: -0.2057,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Ghana+National+Museum+artifacts",
      "/placeholder.svg?height=400&width=600&query=Ghana+National+Museum+building+Accra",
    ],
    tips: [
      "Allow at least 2-3 hours to fully explore the exhibitions",
      "Check if guided tours are available during your visit",
      "Photography may be restricted in certain areas",
      "Visit the museum shop for authentic Ghanaian crafts and books",
      "Combine with a visit to the nearby Kwame Nkrumah Memorial Park",
    ],
    nearbyAttractions: ["Kwame Nkrumah Memorial Park", "Independence Arch", "Jamestown Lighthouse"],
    highlights: [
      "Premier museum showcasing Ghana's heritage",
      "Extensive collection of artifacts",
      "Traditional crafts and contemporary art",
      "Archaeological findings",
      "Educational exhibits",
    ],
    coordinates: { lat: 5.556, lng: -0.2057 },
    tags: ["Cultural", "Museum", "Heritage", "Art"],
    practicalInfo: {
      openingHours: "9:00 AM - 4:00 PM, Tuesday to Sunday (Closed on Mondays)",
      entryFee: "Locals: GHS 20, Foreigners: GHS 40",
      accessibility: "Wheelchair accessible",
      bestTimeToVisit: "Weekday mornings for a quieter experience",
    },
  },
  {
    id: "oxford-street",
    name: "Oxford Street (Osu)",
    region: "Greater Accra",
    category: "Cultural",
    description:
      "Oxford Street in Osu is Accra's most vibrant commercial district, often compared to London's Oxford Street. This bustling thoroughfare is lined with shops, boutiques, restaurants, bars, and nightclubs, offering everything from traditional Ghanaian goods to international brands. It's the heart of Accra's nightlife and a popular gathering place for both locals and tourists.",
    history:
      "The area known as Osu has a rich history dating back to the 17th century when Danish colonizers built Christiansborg Castle (Osu Castle) nearby. The street developed as a commercial center during the colonial period and continued to grow after independence. In the 1990s and 2000s, it experienced significant development and became known as 'Oxford Street' due to its commercial importance, similar to its London namesake. The area has transformed from a primarily residential neighborhood to a commercial and entertainment hub.",
    culturalSignificance:
      "Oxford Street represents modern Ghana's cosmopolitan character and its integration into global consumer culture. It showcases the blend of traditional Ghanaian elements with international influences that characterizes contemporary urban life in Accra. The street is a social melting pot where different classes, ethnicities, and nationalities interact. It also reflects Ghana's growing middle class and changing consumption patterns. For many young Ghanaians, Oxford Street is a symbol of aspiration and modern urban identity.",
    visitingInfo: {
      openingHours: "Most shops: 9:00 AM - 9:00 PM; Restaurants and bars: until late",
      entryFee: "Free (individual establishments may have cover charges)",
      bestTimeToVisit: "Afternoons for shopping, evenings for nightlife",
      accessibility: "Generally accessible, though sidewalks may be crowded",
    },
    location: {
      address: "Cantonments Road (Oxford Street), Osu, Accra, Ghana",
      coordinates: {
        latitude: 5.5577,
        longitude: -0.187,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Oxford+Street+Osu+Accra+nightlife",
      "/placeholder.svg?height=400&width=600&query=Osu+shopping+district+Ghana",
    ],
    tips: [
      "Be prepared to bargain in smaller shops and with street vendors",
      "Try the street food, especially at Republic Bar & Grill",
      "Visit both during the day for shopping and at night for the vibrant atmosphere",
      "Be aware of your belongings in crowded areas",
      "Some establishments may require ID for entry",
    ],
    nearbyAttractions: ["Osu Castle", "Independence Arch", "Labadi Beach"],
    highlights: [
      "Accra's most vibrant commercial district",
      "Heart of Accra's nightlife",
      "Traditional and international goods",
      "Restaurants and entertainment",
      "Social melting pot",
    ],
    coordinates: { lat: 5.5577, lng: -0.187 },
    tags: ["Cultural", "Shopping", "Nightlife", "Entertainment"],
    practicalInfo: {
      openingHours: "Most shops: 9:00 AM - 9:00 PM; Restaurants and bars: until late",
      entryFee: "Free (individual establishments may have cover charges)",
      accessibility: "Generally accessible, though sidewalks may be crowded",
      bestTimeToVisit: "Afternoons for shopping, evenings for nightlife",
    },
  },
  {
    id: "accra-arts-center",
    name: "Accra Arts Centre (Centre for National Culture)",
    region: "Greater Accra",
    category: "Cultural",
    description:
      "The Accra Arts Centre, officially known as the Centre for National Culture, is Ghana's largest craft market and cultural center. It features hundreds of stalls selling traditional crafts, including Kente cloth, wood carvings, beads, drums, masks, and paintings. The center also hosts cultural performances, workshops, and exhibitions that showcase Ghana's diverse artistic traditions.",
    history:
      "The Centre for National Culture was established in the 1960s as part of Ghana's post-independence cultural policy to preserve and promote indigenous arts and crafts. Under President Kwame Nkrumah's vision, cultural centers were built in each regional capital to serve as hubs for artistic expression and cultural preservation. The Accra Arts Centre has grown over the decades from a small collection of artisans to a sprawling market that attracts craftspeople from across Ghana and neighboring countries.",
    culturalSignificance:
      "The Arts Centre serves as a vital space for the preservation and evolution of Ghana's material culture. It supports thousands of artisans who maintain traditional craft techniques passed down through generations. The center plays an important role in Ghana's cultural economy, connecting artisans directly with local and international buyers. For many visitors, it provides an authentic introduction to Ghana's diverse artistic traditions and offers opportunities for cultural exchange through workshops and demonstrations.",
    visitingInfo: {
      openingHours: "8:00 AM - 6:00 PM daily",
      entryFee: "Free entry (performances may have separate fees)",
      bestTimeToVisit: "Weekday mornings for a less crowded experience",
      accessibility: "Mostly accessible but with some uneven surfaces",
    },
    location: {
      address: "28th February Road, Accra, Ghana",
      coordinates: {
        latitude: 5.5429,
        longitude: -0.2147,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Accra+Arts+Centre+crafts+market",
      "/placeholder.svg?height=400&width=600&query=Ghana+Centre+for+National+Culture+wood+carvings",
    ],
    tips: [
      "Bargaining is expected and part of the experience",
      "Take time to explore the entire market as prices and quality vary",
      "Ask permission before taking photos of people or their crafts",
      "Be prepared for persistent vendors",
      "Check if any cultural performances are scheduled during your visit",
    ],
    nearbyAttractions: ["Kwame Nkrumah Memorial Park", "National Museum", "Jamestown Fishing Harbor"],
    highlights: [
      "Ghana's largest craft market",
      "Traditional crafts and artwork",
      "Cultural performances and workshops",
      "Kente cloth and wood carvings",
      "Authentic artistic traditions",
    ],
    coordinates: { lat: 5.5429, lng: -0.2147 },
    tags: ["Cultural", "Market", "Crafts", "Art"],
    practicalInfo: {
      openingHours: "8:00 AM - 6:00 PM daily",
      entryFee: "Free entry (performances may have separate fees)",
      accessibility: "Mostly accessible but with some uneven surfaces",
      bestTimeToVisit: "Weekday mornings for a less crowded experience",
    },
  },
  {
    id: "makola-market",
    name: "Makola Market",
    region: "Greater Accra",
    category: "Market",
    description:
      "Makola Market is Accra's largest and most famous market, a sprawling commercial hub where you can find virtually anything from fresh produce and traditional medicines to textiles, electronics, and household goods. This vibrant marketplace offers an authentic glimpse into everyday Ghanaian life and commerce, with thousands of vendors and shoppers creating a colorful, dynamic atmosphere.",
    history:
      "Makola Market was established in the 1920s during the colonial era and has been the commercial heart of Accra ever since. In 1979, the original market building was demolished during political unrest, but the market quickly rebuilt itself. Over the decades, it has expanded beyond its original boundaries to encompass surrounding streets and buildings. The market has survived fires, political upheavals, and economic changes, demonstrating the resilience of Ghana's informal economy and the entrepreneurial spirit of its people, particularly women who dominate the trading activities.",
    culturalSignificance:
      "Makola Market represents the backbone of Ghana's informal economy and showcases the crucial role of market women in the country's commercial life. These female traders, known as 'market queens,' have significant economic and social influence. The market embodies traditional West African trading practices while adapting to modern commerce. It serves as a social institution where information is exchanged, relationships are formed, and cultural practices are maintained. For many Ghanaians, Makola is not just a place to shop but a cultural landmark that reflects national identity and economic self-reliance.",
    visitingInfo: {
      openingHours: "6:00 AM - 6:00 PM, Monday to Saturday (limited operations on Sundays)",
      entryFee: "Free",
      bestTimeToVisit: "Early morning for the freshest produce and less heat",
      accessibility: "Challenging for those with mobility issues due to crowded, narrow pathways",
    },
    location: {
      address: "Kimberly Avenue, Accra Central, Ghana",
      coordinates: {
        latitude: 5.5461,
        longitude: -0.2169,
      },
    },
    images: ["/images/makola-market-accra.jpg", "/makola-market-ghana.png"],
    tips: [
      "Go with a local guide if it's your first visit",
      "Wear comfortable shoes and light clothing",
      "Keep valuables secure and be aware of your surroundings",
      "Bargaining is essential - start at about half the initial asking price",
      "Bring small denominations of local currency",
      "Stay hydrated in the heat and crowds",
    ],
    nearbyAttractions: ["Jamestown", "Kwame Nkrumah Memorial Park", "Accra Arts Centre"],
    highlights: [
      "Accra's largest and most famous market",
      "Authentic glimpse into Ghanaian life",
      "Thousands of vendors and diverse goods",
      "Traditional West African trading practices",
      "Economic and cultural significance",
    ],
    coordinates: { lat: 5.5461, lng: -0.2169 },
    tags: ["Market", "Cultural", "Shopping", "Traditional"],
    practicalInfo: {
      openingHours: "6:00 AM - 6:00 PM, Monday to Saturday (limited operations on Sundays)",
      entryFee: "Free",
      accessibility: "Challenging for those with mobility issues due to crowded, narrow pathways",
      bestTimeToVisit: "Early morning for the freshest produce and less heat",
    },
  },
  {
    id: "fort-prampram",
    name: "Fort Vernon (Prampram)",
    region: "Greater Accra",
    category: "Historical",
    description:
      "Fort Vernon is a small historical fort located in the coastal town of Prampram, east of Accra. Built by the British in the 18th century, it served as a trading post and played a role in the transatlantic slave trade. Though smaller and less visited than other forts along Ghana's coast, it offers an intimate glimpse into the country's colonial past without the crowds of more famous sites.",
    history:
      "Fort Vernon was constructed in 1742 by the British Royal African Company as a trading post for gold, ivory, and slaves. It was named after Admiral Edward Vernon of the British Navy. Unlike the larger castles at Cape Coast and Elmina, Fort Vernon was primarily a commercial outpost rather than a major administrative center. The fort changed hands several times between the British and local authorities before being abandoned as a military installation in the late 19th century. After Ghana's independence, it was designated as a historical monument, though it has received less restoration attention than other colonial structures.",
    culturalSignificance:
      "Fort Vernon stands as a reminder of Britain's colonial presence in Ghana and the complex trading relationships that existed along the Gold Coast. Like other forts and castles in Ghana, it represents the painful history of the transatlantic slave trade and European exploitation. For the local community in Prampram, the fort is part of their heritage and identity, connecting them to historical global trade networks. The fort's relatively untouched state offers visitors a less curated, more authentic experience of a colonial trading post.",
    visitingInfo: {
      openingHours: "9:00 AM - 4:00 PM daily (arrangements sometimes needed in advance)",
      entryFee: "Locals: GHS 10, Foreigners: GHS 20",
      bestTimeToVisit: "Weekday mornings",
      accessibility: "Limited accessibility due to uneven surfaces and stairs",
    },
    location: {
      address: "Prampram, Greater Accra Region, Ghana",
      coordinates: {
        latitude: 5.7167,
        longitude: 0.1,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Fort+Vernon+Prampram+Ghana+colonial",
      "/placeholder.svg?height=400&width=600&query=Prampram+fort+historical+structure",
    ],
    tips: [
      "Call ahead to ensure the fort is open for visitors",
      "Consider hiring a local guide for historical context",
      "Combine with a visit to the nearby beaches",
      "Bring water as facilities are limited",
      "Wear comfortable shoes for walking on uneven surfaces",
    ],
    nearbyAttractions: ["Prampram Beach", "Ningo-Prampram Salt Ponds", "Shai Hills Resource Reserve"],
    highlights: [
      "Small historical fort from 18th century",
      "Intimate glimpse into colonial past",
      "Less crowded than major castles",
      "British Royal African Company heritage",
      "Authentic colonial trading post experience",
    ],
    coordinates: { lat: 5.7167, lng: 0.1 },
    tags: ["Historical", "Colonial", "Fort", "Trading Post"],
    practicalInfo: {
      openingHours: "9:00 AM - 4:00 PM daily (arrangements sometimes needed in advance)",
      entryFee: "Locals: GHS 10, Foreigners: GHS 20",
      accessibility: "Limited accessibility due to uneven surfaces and stairs",
      bestTimeToVisit: "Weekday mornings",
    },
  },
  {
    id: "accra-beaches",
    name: "Beaches of Accra",
    region: "Greater Accra",
    category: "Beach",
    description:
      "Accra's coastline features several popular beaches that offer relaxation, water activities, and vibrant social scenes. From the famous Labadi Beach with its restaurants and entertainment to the more peaceful Kokrobite and Bojo beaches, Accra's shores provide diverse experiences for both locals and tourists seeking sun, sand, and sea along the Gulf of Guinea.",
    history:
      "Accra's beaches have long been important to local communities for fishing and cultural practices. During the colonial era, some beaches were segregated, with Europeans using different areas than locals. After independence, beaches became important public spaces and symbols of freedom. In recent decades, tourism development has transformed many beaches, particularly Labadi (officially La Pleasure Beach), which emerged as a major recreational destination in the 1980s. Other beaches like Kokrobite became popular with international travelers seeking a more laid-back atmosphere, while newer private beaches have developed to cater to upscale tourism.",
    culturalSignificance:
      "Beaches in Ghana hold cultural significance beyond recreation. Many coastal communities perform traditional ceremonies at the shoreline, where the ocean is revered as a deity in some traditional belief systems. Beaches serve as important social gathering spaces where Ghanaians celebrate holidays, hold family events, and enjoy weekend relaxation. The fishing activities visible at many beaches connect visitors to Ghana's maritime traditions and the livelihoods that have sustained coastal communities for generations. Beach parties and live music events showcase contemporary Ghanaian culture and music scenes.",
    visitingInfo: {
      openingHours: "Most public beaches are accessible 24/7; private beaches typically 8:00 AM - 6:00 PM",
      entryFee: "Public beaches: Free to GHS 10; Private beaches: GHS 20-50",
      bestTimeToVisit: "Weekday mornings for tranquility; weekends for the vibrant atmosphere",
      accessibility: "Varies by beach; some have paved walkways while others are only accessible via sand",
    },
    location: {
      address: "Various locations along Accra's coastline",
      coordinates: {
        latitude: 5.5526,
        longitude: -0.1663,
      },
    },
    images: ["/ghana-beach-sunset.png", "/placeholder.svg?height=400&width=600&query=Kokrobite+Beach+sunset+Ghana"],
    tips: [
      "Labadi Beach is best for entertainment and facilities",
      "Kokrobite and Bojo beaches offer a more relaxed atmosphere",
      "Be cautious of strong currents when swimming",
      "Weekends are very crowded at popular beaches",
      "Bring cash as card facilities are limited",
      "Consider visiting beaches further from the city center for cleaner conditions",
    ],
    nearbyAttractions: ["Labadi Beach Hotel", "Kokrobite Reggae Lodge", "Jamestown Fishing Harbor"],
    highlights: [
      "Diverse beach experiences along coastline",
      "Famous Labadi Beach entertainment",
      "Peaceful Kokrobite and Bojo beaches",
      "Traditional fishing activities",
      "Vibrant social scenes and beach parties",
    ],
    coordinates: { lat: 5.5526, lng: -0.1663 },
    tags: ["Beach", "Recreation", "Cultural", "Entertainment"],
    practicalInfo: {
      openingHours: "Most public beaches are accessible 24/7; private beaches typically 8:00 AM - 6:00 PM",
      entryFee: "Public beaches: Free to GHS 10; Private beaches: GHS 20-50",
      accessibility: "Varies by beach; some have paved walkways while others are only accessible via sand",
      bestTimeToVisit: "Weekday mornings for tranquility; weekends for the vibrant atmosphere",
    },
  },
  {
    id: "tema-harbour",
    name: "Tema Harbour (Port Tour)",
    region: "Greater Accra",
    category: "Infrastructure",
    description:
      "Tema Harbour is Ghana's largest seaport and a vital economic hub handling over 80% of the country's import and export trade. Visitors can take guided tours to observe massive cargo ships, container terminals, and fishing harbors. Some tours extend to the Greenwich Meridian (0° longitude) which passes nearby, allowing visitors to stand in both the Eastern and Western hemispheres simultaneously.",
    history:
      "Tema Harbour was constructed in the 1950s as part of President Kwame Nkrumah's industrialization plan for newly independent Ghana. The port was officially opened in 1962, replacing Accra's old harbor at Jamestown which had limited capacity. The development of the harbor led to the creation of Tema as a planned industrial city. Over the decades, the port has undergone several expansions to accommodate growing trade volumes and larger vessels. In recent years, significant investments have been made to modernize the port's infrastructure and increase its capacity to handle container traffic.",
    culturalSignificance:
      "Tema Harbour represents Ghana's ambitions for economic development and international trade. It embodies Nkrumah's vision of industrialization and self-sufficiency. The port has transformed Ghana's economy and created a cosmopolitan community in Tema, where workers from various backgrounds and nationalities interact. The fishing harbor section showcases traditional fishing practices alongside industrial operations, highlighting the coexistence of traditional and modern economic activities. The proximity to the Greenwich Meridian adds geographical significance, connecting Ghana to global navigation and time-keeping systems.",
    visitingInfo: {
      openingHours: "Tours typically available 9:00 AM - 3:00 PM, Monday to Friday (by prior arrangement)",
      entryFee: "Varies by tour operator, approximately GHS 50-100 per person",
      bestTimeToVisit: "Weekday mornings when the port is active",
      accessibility: "Limited accessibility due to industrial environment",
    },
    location: {
      address: "Tema Harbour, Tema, Greater Accra Region, Ghana",
      coordinates: {
        latitude: 5.6333,
        longitude: 0.0167,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Tema+Harbour+Ghana+container+ships",
      "/placeholder.svg?height=400&width=600&query=Greenwich+Meridian+marker+Tema+Ghana",
    ],
    tips: [
      "Book tours well in advance through approved operators",
      "Bring identification documents as they may be required for security",
      "Wear closed-toe shoes and weather-appropriate clothing",
      "Photography may be restricted in certain areas",
      "Consider combining with a visit to the Greenwich Meridian monument",
      "Tours may be cancelled due to port operations or security concerns",
    ],
    nearbyAttractions: ["Greenwich Meridian Monument", "Tema Fishing Harbor", "Sakumono Lagoon"],
    highlights: [
      "Ghana's largest seaport",
      "Vital economic hub for trade",
      "Greenwich Meridian proximity",
      "Industrial and fishing operations",
      "Economic development showcase",
    ],
    coordinates: { lat: 5.6333, lng: 0.0167 },
    tags: ["Infrastructure", "Economic", "Port", "Industrial"],
    practicalInfo: {
      openingHours: "Tours typically available 9:00 AM - 3:00 PM, Monday to Friday (by prior arrangement)",
      entryFee: "Varies by tour operator, approximately GHS 50-100 per person",
      accessibility: "Limited accessibility due to industrial environment",
      bestTimeToVisit: "Weekday mornings when the port is active",
    },
  },

  // Central Region
  {
    id: "cape-coast-castle-central",
    name: "Cape Coast Castle",
    region: "Central",
    category: "Historical",
    description:
      "Cape Coast Castle is one of Ghana's most significant historical sites, a UNESCO World Heritage monument that served as a key transit point in the transatlantic slave trade. This imposing white fortress on the coast contains dungeons where enslaved Africans were held before being shipped to the Americas, as well as administrative quarters, a museum, and the infamous 'Door of No Return' through which captives took their final steps on African soil.",
    history:
      "Originally built by the Swedes in 1653 as a trading post for timber and gold, the castle changed hands multiple times among European powers before the British took final control in 1664. Under British administration, it became a major hub for the transatlantic slave trade, with thousands of enslaved Africans passing through its dungeons. After the abolition of the slave trade, the castle served as the seat of British colonial administration until Ghana's independence in 1957. In 1979, it was designated a UNESCO World Heritage Site, and today it stands as a powerful memorial to the atrocities of the slave trade and colonialism.",
    culturalSignificance:
      "Cape Coast Castle is a place of profound historical trauma and remembrance, representing the brutal history of the slave trade and its devastating impact on African societies. For people of African descent in the diaspora, it has become an important site of pilgrimage and reconnection with ancestral heritage. The castle serves as an educational center about the history of slavery and colonialism, helping visitors understand this painful chapter in global history. It also symbolizes resilience and survival, as many African Americans, including prominent figures like Barack Obama, have visited to honor their ancestors who passed through similar castles.",
    visitingInfo: {
      openingHours: "9:00 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150",
      bestTimeToVisit: "Early morning to avoid crowds and heat",
      accessibility: "Limited accessibility for those with mobility issues",
    },
    location: {
      address: "Cape Coast Castle, Cape Coast, Central Region, Ghana",
      coordinates: {
        latitude: 5.1033,
        longitude: -1.2414,
      },
    },
    images: ["/images/cape-coast-castle.png", "/cape-coast-castle-interior.png"],
    tips: [
      "Take a guided tour to fully understand the historical context",
      "Allow at least 2-3 hours for your visit",
      "The dungeons can be emotionally challenging - prepare yourself",
      "Photography is permitted in most areas but be respectful",
      "Visit the museum section before touring the dungeons",
      "Wear comfortable shoes as there is considerable walking",
    ],
    nearbyAttractions: ["Elmina Castle", "Kakum National Park", "Hans Cottage Botel"],
    highlights: [
      "UNESCO World Heritage Site",
      "Door of No Return",
      "Museum of slavery and colonial history",
      "Guided tours available",
      "Stunning ocean views",
    ],
    coordinates: { lat: 5.1033, lng: -1.2414 },
    tags: ["Historical", "UNESCO", "Castle", "Museum"],
    practicalInfo: {
      openingHours: "9:00 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150",
      accessibility: "Limited accessibility for those with mobility issues",
      bestTimeToVisit: "Early morning to avoid crowds and heat",
    },
  },
  {
    id: "elmina-castle",
    name: "St. George's Castle (Elmina Castle)",
    region: "Central",
    category: "Historical",
    description:
      "Elmina Castle, officially known as St. George's Castle, is the oldest European structure in sub-Saharan Africa and a UNESCO World Heritage Site. Built by the Portuguese in 1482, this massive white fortress overlooking the Atlantic Ocean served as a trading post, slave dungeon, and colonial administrative center. Today, it stands as a powerful memorial to the transatlantic slave trade and European colonization in Africa.",
    history:
      "Elmina Castle was built in 1482 by Portuguese traders under the orders of King John II of Portugal. Originally named São Jorge da Mina (St. George of the Mine), it was established to protect Portuguese gold trade interests. In 1637, the Dutch captured the castle and controlled it for 274 years before ceding it to the British in 1872. Throughout its history, the castle served various functions: initially as a trading post for gold and ivory, then as a major hub in the transatlantic slave trade, and later as an administrative center during colonial rule. After Ghana's independence in 1957, the castle was transferred to the Ghanaian government and subsequently designated a UNESCO World Heritage Site in 1979.",
    culturalSignificance:
      "Elmina Castle represents one of the most tangible reminders of Europe's early contact with Africa and the subsequent exploitation through the slave trade. For Ghanaians, it symbolizes both historical trauma and resilience in the face of colonization. For people of African descent in the diaspora, particularly those whose ancestors may have passed through such castles, it serves as a site of pilgrimage and reconnection with ancestral heritage. The castle has become an important educational center about the history of slavery and colonialism, helping visitors confront this painful chapter in global history. It also plays a significant role in Ghana's 'Year of Return' and 'Beyond the Return' initiatives, which invite the African diaspora to reconnect with their roots.",
    visitingInfo: {
      openingHours: "9:00 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150",
      bestTimeToVisit: "Weekday mornings to avoid crowds",
      accessibility: "Limited accessibility for those with mobility issues due to stairs and uneven surfaces",
    },
    location: {
      address: "Elmina Castle Road, Elmina, Central Region, Ghana",
      coordinates: {
        latitude: 5.0847,
        longitude: -1.3485,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Elmina+Castle+Ghana+fortress",
      "/placeholder.svg?height=400&width=600&query=St+Georges+Castle+Elmina+historical",
    ],
    tips: [
      "Take a guided tour to fully understand the historical context",
      "Allow at least 2-3 hours for your visit",
      "The dungeons can be emotionally challenging - prepare yourself",
      "Combine with a visit to nearby Cape Coast Castle for a comprehensive historical experience",
      "Visit the adjacent fishing harbor to see traditional fishing practices",
      "Wear comfortable shoes and bring water",
    ],
    nearbyAttractions: ["Cape Coast Castle", "Elmina Fishing Harbor", "Fort St. Jago", "Kakum National Park"],
    highlights: [
      "Oldest European structure in sub-Saharan Africa",
      "UNESCO World Heritage Site",
      "Portuguese colonial architecture",
      "Museum and guided tours",
      "Atlantic Ocean views",
    ],
    coordinates: { lat: 5.0847, lng: -1.3485 },
    tags: ["Historical", "UNESCO", "Castle", "Portuguese"],
    practicalInfo: {
      openingHours: "9:00 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150",
      accessibility: "Limited accessibility for those with mobility issues due to stairs and uneven surfaces",
      bestTimeToVisit: "Weekday mornings to avoid crowds",
    },
  },
  {
    id: "kakum-national-park",
    name: "Kakum National Park",
    region: "Central",
    category: "Nature",
    description:
      "Kakum National Park is a tropical rainforest reserve spanning 375 square kilometers in Ghana's Central Region. The park is famous for its canopy walkway, suspended 30 meters above the forest floor, offering visitors a unique perspective of the rainforest ecosystem. Home to diverse wildlife including forest elephants, various monkey species, hundreds of bird species, and countless insects and plants, Kakum provides both adventure and education about Ghana's natural heritage.",
    history:
      "Kakum National Park was established in 1932 as a timber reserve but was redesignated as a national park in 1992 to protect the area's unique ecosystem. The iconic canopy walkway was built in 1995 as a collaborative project between local communities, the Ghana Heritage Conservation Trust, and international partners including Conservation International. The walkway was designed to provide a non-invasive way for visitors to experience the forest canopy while generating tourism revenue for conservation efforts. Before becoming a protected area, the forest was traditionally used by local communities for hunting, gathering medicinal plants, and spiritual practices.",
    culturalSignificance:
      "Beyond its ecological importance, Kakum National Park holds cultural significance for surrounding communities who have traditional connections to the forest. Many plant species in the park are used in traditional medicine, and certain areas were historically considered sacred. The park represents Ghana's commitment to conservation and sustainable tourism, balancing environmental protection with economic development. For visitors, Kakum offers an opportunity to connect with nature and understand the importance of rainforest preservation. The park has become a symbol of Ghana's natural heritage and is featured prominently in the country's tourism promotion.",
    visitingInfo: {
      openingHours: "8:30 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150 (additional fee for canopy walkway)",
      bestTimeToVisit: "Early morning for wildlife viewing and smaller crowds",
      accessibility:
        "Limited accessibility for those with mobility issues; canopy walkway requires physical ability to walk on suspended bridges",
    },
    location: {
      address: "Kakum National Park, Central Region, Ghana",
      coordinates: {
        latitude: 5.3833,
        longitude: -1.3833,
      },
    },
    images: ["/kakum-canopy-walk.png", "/placeholder.svg?height=400&width=600&query=Kakum+rainforest+Ghana+wildlife"],
    tips: [
      "Arrive early to avoid long queues for the canopy walkway",
      "Wear comfortable clothing and closed shoes suitable for hiking",
      "Bring insect repellent and water",
      "Consider hiring a guide for the nature trail to learn about the ecosystem",
      "The canopy walkway may not be suitable for those with a fear of heights",
      "Visit on weekdays to avoid weekend crowds",
    ],
    nearbyAttractions: ["Cape Coast Castle", "Elmina Castle", "Hans Cottage Botel", "Monkey Forest Resort"],
    highlights: [
      "Famous canopy walkway 30 meters high",
      "Tropical rainforest ecosystem",
      "Diverse wildlife and bird species",
      "Forest elephants and monkeys",
      "Conservation and education center",
    ],
    coordinates: { lat: 5.3833, lng: -1.3833 },
    tags: ["Nature", "Rainforest", "Wildlife", "Adventure"],
    practicalInfo: {
      openingHours: "8:30 AM - 4:30 PM daily",
      entryFee: "Locals: GHS 40, Foreigners: GHS 150 (additional fee for canopy walkway)",
      accessibility:
        "Limited accessibility for those with mobility issues; canopy walkway requires physical ability to walk on suspended bridges",
      bestTimeToVisit: "Early morning for wildlife viewing and smaller crowds",
    },
  },
  {
    id: "assin-manso-slave-river",
    name: "Assin Manso Slave River Site",
    region: "Central",
    category: "Historical",
    description:
      "The Assin Manso Slave River (Ndonkor Nsuo) is a sacred historical site where enslaved Africans took their last bath before being transported to the coastal castles and subsequently shipped to the Americas. Today, it serves as a memorial and spiritual site where visitors, particularly those of African descent from the diaspora, come to connect with their ancestral heritage and commemorate those who suffered during the transatlantic slave trade.",
    history:
      "During the transatlantic slave trade (16th-19th centuries), Assin Manso served as a significant market and transit point for enslaved Africans captured from the interior regions. The river, known as 'Ndonkor Nsuo' or 'Slave River,' was where captives were forced to bathe before continuing their journey to the coastal forts. This 'last bath' had both practical purposes (cleaning captives before sale) and symbolic significance (representing the captives' final connection with their homeland). In 1998, the remains of two former slaves from the Americas, Samuel Carson from the United States and Crystal from Jamaica, were reinterred at Assin Manso, establishing it as a symbolic ancestral burial ground for the African diaspora. The site has since become an important destination in Ghana's heritage tourism, particularly during the 'Year of Return' in 2019 marking 400 years since the first enslaved Africans arrived in Jamestown, Virginia.",
    culturalSignificance:
      "Assin Manso represents a crucial link in understanding the journey of enslaved Africans and serves as a place of remembrance, healing, and reconnection for the African diaspora. The site embodies the painful history of the slave trade while offering a space for reconciliation and spiritual connection. For many visitors of African descent, the river provides an opportunity for ritual cleansing and symbolic reversal of the 'last bath' their ancestors experienced. The memorial includes a 'Wall of Return' where visitors can record their names, symbolically completing the circle of return to ancestral lands. The site also educates visitors about the inland mechanisms of the slave trade, complementing the coastal castle experiences.",
    visitingInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 40",
      bestTimeToVisit: "Weekday mornings for a more reflective experience",
      accessibility: "Partially accessible, with some uneven terrain",
    },
    location: {
      address: "Assin Manso, Central Region, Ghana",
      coordinates: {
        latitude: 5.5167,
        longitude: -1.2333,
      },
    },
    images: [
      "/placeholder.svg?height=400&width=600&query=Assin+Manso+Slave+River+memorial+Ghana",
      "/placeholder.svg?height=400&width=600&query=Ndonkor+Nsuo+historical+site",
    ],
    tips: [
      "Approach the site with respect as it is a place of solemn remembrance",
      "Consider hiring a guide to fully understand the historical context",
      "Some visitors bring offerings or participate in libation ceremonies",
      "Allow time for reflection after visiting the river",
      "Combine with visits to Cape Coast and Elmina castles for a comprehensive understanding of the slave trade route",
    ],
    nearbyAttractions: ["Cape Coast Castle", "Elmina Castle", "Kakum National Park", "Hans Cottage Botel"],
    highlights: [
      "Sacred historical site of 'last bath'",
      "Memorial for African diaspora",
      "Wall of Return for visitors",
      "Spiritual and healing significance",
      "Educational about slave trade route",
    ],
    coordinates: { lat: 5.5167, lng: -1.2333 },
    tags: ["Historical", "Memorial", "Spiritual", "Diaspora"],
    practicalInfo: {
      openingHours: "9:00 AM - 5:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 40",
      accessibility: "Partially accessible, with some uneven terrain",
      bestTimeToVisit: "Weekday mornings for a more reflective experience",
    },
  },

  // Northern Region
  {
    id: "mole-national-park",
    name: "Mole National Park",
    region: "Northern",
    category: "Nature",
    description:
      "Mole National Park is Ghana's largest wildlife refuge and premier safari destination, encompassing over 4,800 square kilometers of pristine savanna ecosystem in the northern part of the country. Home to over 300 elephants, buffalo, antelopes, lions, leopards, and more than 300 bird species, Mole offers authentic African safari experiences with guided walking safaris, jeep tours, and exceptional wildlife viewing opportunities in their natural habitat.",
    history:
      "Mole National Park was established in 1958 as a wildlife reserve and later upgraded to a national park in 1971. The area was traditionally used by local communities for hunting and farming before becoming a protected area. The park's name comes from the Mole River, which flows through the reserve and serves as a vital water source for wildlife. Over the years, Mole National Park has faced challenges from poaching, deforestation, and encroachment by human settlements. Conservation efforts have focused on protecting the park's wildlife, promoting sustainable tourism, and working with local communities to manage natural resources. The park has become a model for community-based conservation in West Africa.",
    culturalSignificance:
      "Mole National Park represents Ghana's commitment to preserving its natural heritage and promoting ecotourism as a sustainable development strategy. The park provides economic opportunities for local communities through tourism-related jobs, guide services, and revenue sharing programs. Local communities, particularly the Mole and Gonja people, have traditional knowledge of the area's wildlife and ecosystems that contributes to conservation efforts. The park's wildlife and natural landscapes are featured prominently in Ghana's tourism promotion, attracting visitors from around the world and showcasing the country's biodiversity. For visitors, Mole offers an opportunity to experience Ghana's savanna ecosystem and observe iconic African wildlife species in their natural environment.",
    visitingInfo: {
      openingHours: "6:00 AM - 6:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 50 (additional fees for guided tours and activities)",
      bestTimeToVisit:
        "Dry season (November-March) for optimal wildlife viewing when animals gather around water sources",
      accessibility: "Limited accessibility due to unpaved roads and rugged terrain; 4WD vehicles recommended",
    },
    location: {
      address: "Mole National Park, Northern Region, Ghana",
      coordinates: {
        latitude: 9.75,
        longitude: -1.75,
      },
    },
    images: [
      "/images/mole-national-park-elephant.jpg",
      "/images/mole-elephants-pair.jpg",
      "/placeholder.svg?height=400&width=600&query=Mole+National+Park+savanna+landscape",
    ],
    tips: [
      "Book guided tours and accommodation well in advance, especially during peak season",
      "Wear neutral-colored clothing and comfortable closed shoes suitable for walking safaris",
      "Bring binoculars, camera with zoom lens, insect repellent, sunscreen, and a hat",
      "Respect wildlife by maintaining safe distances and following guide instructions",
      "Consider visiting the nearby Mognori Eco-Village for authentic cultural experiences",
      "Stay hydrated and bring plenty of water for game drives and walking safaris",
      "Visit during early morning or late afternoon when animals are most active",
    ],
    nearbyAttractions: ["Larabanga Mosque", "Mognori Eco-Village", "Wechiau Community Hippo Sanctuary", "Damongo"],
    highlights: [
      "Ghana's largest wildlife refuge with over 4,800 sq km",
      "Home to 300+ elephants and diverse wildlife",
      "Authentic African safari experiences",
      "Walking safaris and jeep tours available",
      "Over 300 bird species for birdwatching",
      "Mole River ecosystem and water holes",
      "Community-based conservation model",
    ],
    coordinates: { lat: 9.75, lng: -1.75 },
    tags: ["Nature", "Wildlife", "Safari", "Elephants", "Conservation"],
    practicalInfo: {
      openingHours: "6:00 AM - 6:00 PM daily",
      entryFee: "Locals: GHS 20, Foreigners: GHS 50 (additional fees for guided tours and activities)",
      accessibility: "Limited accessibility due to unpaved roads and rugged terrain; 4WD vehicles recommended",
      bestTimeToVisit:
        "Dry season (November-March) for optimal wildlife viewing when animals gather around water sources",
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
