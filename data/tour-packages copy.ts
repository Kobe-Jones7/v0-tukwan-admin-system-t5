import { TourPackages } from "@/app/generated/prisma";

export const tourPackages: Omit<
	TourPackages,
	"id" | "createdAt" | "updatedAt"
>[] = [
	{
		"name": "Cape Coast Heritage Tour",
		"slug": "cape-coast-heritage-tour",
		"region": "Central Region",
		"duration": 3,
		"group_size": 15,
		"description":
			"Embark on a profound journey through Ghana's complex history with our Cape Coast Heritage Tour. This immersive experience takes you to the heart of the transatlantic slave trade, where you'll explore the UNESCO World Heritage Site of Cape Coast Castle and gain deep insights into this pivotal period in world history. Our expert guides, many of whom are descendants of the local communities, provide authentic narratives that bring the past to life while honoring the memory of those who suffered. Beyond the castle, you'll discover the vibrant culture of the Central Region, from traditional fishing communities to bustling markets filled with local crafts and delicacies.",
		"minimum_age": 12,
		"best_time":
			"November to March (dry season), July to August (cooler temperatures)",
		"tour_highlights": [
			"Guided tour of Cape Coast Castle with expert historians",
			"Visit to Elmina Castle, another UNESCO World Heritage Site",
			"Traditional canoe ride with local fishermen",
			"Explore vibrant Elmina fishing harbor",
			"Cultural performance by local dance troupe",
			"Visit to traditional bead-making workshop",
			"Sunset viewing from castle ramparts",
			"Interaction with local community elders"
		],
		what_to_bring: [
			"Comfortable walking shoes",
			"Light, breathable clothing",
			"Hat and sunglasses",
			"Sunscreen (SPF 30+)",
			"Camera (photography allowed in most areas)",
			"Insect repellent",
			"Light jacket for evening",
			"Respectful attire for castle visits"
		],
		"price": 850,
		"images": [
			"/images/cape-coast-castle-oceanview.webp",
			"/cape-coast-castle-interior.png",
			"/cape-coast-castle-ghana.png",
			"/ghana-beach-sunset.png"
		],
		"whats_included": [
			"Professional English-speaking guide",
			"All entrance fees to castles and museums",
			"2 nights accommodation in heritage hotel",
			"All meals as specified in itinerary",
			"Transportation in air-conditioned vehicle",
			"Cultural performance tickets",
			"Traditional canoe experience",
			"Bottled water throughout the tour"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages",
			"Tips for guides and drivers",
			"Optional activities not mentioned",
			"Visa fees",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Cape Coast Castle Lodge - Heritage rooms with ocean views",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and Cape Coast Castle",
				"timeline": [
					{
						"description": "Departure from Accra",
						"time": "9:00 AM",
						"title": "Departure from Accra",
						"type": "road"
					},
					{
						"description": "Arrival in Cape Coast and check-in",
						"time": "11:30 AM",
						"title": "Arrival in Cape Coast and check-in",
						"type": "time"
					},
					{
						"description": "Welcome lunch at heritage restaurant",
						"time": "12:30 PM",
						"title": "Welcome lunch at heritage restaurant",
						"type": "food"
					},
					{
						"description": "Guided tour of Cape Coast Castle",
						"time": "2:00 PM",
						"title": "Guided tour of Cape Coast Castle",
						"type": "tour"
					},
					{
						"description": "Visit to castle museum and exhibitions",
						"time": "4:30 PM",
						"title": "Visit to castle museum and exhibitions",
						"type": "tour"
					},
					{
						"description": "Sunset viewing from castle ramparts",
						"time": "6:00 PM",
						"title": "Sunset viewing from castle ramparts",
						"type": "time"
					},
					{
						"description":
							"Traditional dinner with cultural performance",
						"time": "7:30 PM",
						"title": "Traditional dinner with cultural performance",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Cape Coast Castle Lodge",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Elmina Castle and Fishing Community",
				"timeline": [
					{
						"description": "Breakfast at hotel",
						"time": "7:00 AM",
						"title": "Breakfast at hotel",
						"type": "food"
					},
					{
						"description": "Drive to Elmina (30 minutes)",
						"time": "8:30 AM",
						"title": "Drive to Elmina (30 minutes)",
						"type": "road"
					},
					{
						"description": "Guided tour of Elmina Castle",
						"time": "9:00 AM",
						"title": "Guided tour of Elmina Castle",
						"type": "tour"
					},
					{
						"description": "Explore Elmina fishing harbor",
						"time": "11:30 AM",
						"title": "Explore Elmina fishing harbor",
						"type": "tour"
					},
					{
						"description": "Traditional canoe ride with fishermen",
						"time": "12:30 PM",
						"title": "Traditional canoe ride with fishermen",
						"type": "tour"
					},
					{
						"description": "Lunch at local seafood restaurant",
						"time": "1:30 PM",
						"title": "Lunch at local seafood restaurant",
						"type": "food"
					},
					{
						"description": "Visit traditional bead-making workshop",
						"time": "3:00 PM",
						"title": "Visit traditional bead-making workshop",
						"type": "tour"
					},
					{
						"description": "Free time to explore Elmina town",
						"time": "4:30 PM",
						"title": "Free time to explore Elmina town",
						"type": "time"
					},
					{
						"description": "Return to Cape Coast",
						"time": "6:00 PM",
						"title": "Return to Cape Coast",
						"type": "road"
					},
					{
						"description": "Dinner at hotel",
						"time": "7:30 PM",
						"title": "Dinner at hotel",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Cultural Immersion and Departure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "8:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description": "Visit to local market with guide",
						"time": "9:30 AM",
						"title": "Visit to local market with guide",
						"type": "tour"
					},
					{
						"description": "Meet with community elders",
						"time": "11:00 AM",
						"title": "Meet with community elders",
						"type": "tour"
					},
					{
						"description": "Farewell lunch at beachside restaurant",
						"time": "12:30 PM",
						"title": "Farewell lunch at beachside restaurant",
						"type": "food"
					},
					{
						"description": "Departure to Accra",
						"time": "2:00 PM",
						"title": "Departure to Accra",
						"type": "road"
					},
					{
						"description": "Arrival in Accra",
						"time": "4:30 PM",
						"title": "Arrival in Accra",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Mole National Park Safari",
		"slug": "mole-national-park-safari",
		"region": "Northern Region",
		"duration": 4,
		"group_size": 12,
		"description":
			"Embark on an unforgettable safari adventure at Mole National Park, Ghana's largest and most prestigious wildlife reserve. Spanning over 4,840 square kilometers in the Northern Region, Mole is home to over 90 mammal species including the majestic African elephant, which serves as the park's flagship species. Our expert guides will take you on thrilling game drives and walking safaris where you'll encounter elephants, various antelope species, warthogs, baboons, and if you're lucky, the elusive leopard. The park is also a birdwatcher's paradise with over 300 recorded bird species. Experience the authentic African savanna landscape, from grasslands to gallery forests, while staying at the historic Mole Motel with its famous watering hole viewpoint.",
		"minimum_age": 8,
		"best_time":
			"November to April (dry season), December to February (peak wildlife viewing)",
		"tour_highlights": [
			"Close encounters with African elephants",
			"Game drives in open savanna landscapes",
			"Walking safari with experienced rangers",
			"Bird watching with over 300 species",
			"Visit to the famous Mole Motel watering hole",
			"Traditional village cultural experience",
			"Sunset viewing from park's highest points",
			"Photography opportunities with wildlife"
		],
		"what_to_bring": [
			"Comfortable safari clothing in neutral colors",
			"Sturdy walking boots",
			"Wide-brimmed hat",
			"High SPF sunscreen",
			"Binoculars for wildlife viewing",
			"Camera with extra batteries",
			"Insect repellent",
			"Light jacket for early mornings"
		],
		"price": 1200,
		"images": [
			"/images/mole-national-park-elephant.jpg",
			"/images/mole-national-park-elephant.jpg",
			"/images/mole-national-park-elephant.jpg",
			"/images/mole-national-park-elephant.jpg"
		],
		"whats_included": [
			"Professional safari guide and ranger",
			"All park entrance fees and permits",
			"3 nights accommodation at Mole Motel",
			"All meals as specified in itinerary",
			"Game drives in 4WD safari vehicle",
			"Walking safari experiences",
			"Airport transfers from Tamale",
			"Bottled water during activities"
		],
		"whats_not_included": [
			"Flights to Tamale Airport",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages",
			"Tips for guides and rangers",
			"Optional village visits",
			"Camera permits (if required)",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Mole Motel - Rooms overlooking the watering hole",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and First Game Drive",
				"timeline": [
					{
						"description": "Arrival at Tamale Airport",
						"time": "10:00 AM",
						"title": "Arrival at Tamale Airport",
						"type": "time"
					},
					{
						"description":
							"Transfer to Mole National Park (2.5 hours)",
						"time": "11:00 AM",
						"title": "Transfer to Mole National Park (2.5 hours)",
						"type": "road"
					},
					{
						"description": "Check-in at Mole Motel and lunch",
						"time": "1:30 PM",
						"title": "Check-in at Mole Motel and lunch",
						"type": "food"
					},
					{
						"description": "Park orientation and briefing",
						"time": "3:00 PM",
						"title": "Park orientation and briefing",
						"type": "tour"
					},
					{
						"description": "First game drive in the park",
						"time": "4:00 PM",
						"title": "First game drive in the park",
						"type": "tour"
					},
					{
						"description": "Sunset viewing and return to motel",
						"time": "6:30 PM",
						"title": "Sunset viewing and return to motel",
						"type": "time"
					},
					{
						"description": "Dinner at motel restaurant",
						"time": "7:30 PM",
						"title": "Dinner at motel restaurant",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Mole Motel",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Full Day Safari Experience",
				"timeline": [
					{
						"description": "Early morning game drive",
						"time": "6:00 AM",
						"title": "Early morning game drive",
						"type": "tour"
					},
					{
						"description": "Return to motel for breakfast",
						"time": "8:30 AM",
						"title": "Return to motel for breakfast",
						"type": "food"
					},
					{
						"description": "Walking safari with armed ranger",
						"time": "10:00 AM",
						"title": "Walking safari with armed ranger",
						"type": "tour"
					},
					{
						"description": "Lunch and rest at motel",
						"time": "12:30 PM",
						"title": "Lunch and rest at motel",
						"type": "food"
					},
					{
						"description": "Afternoon game drive",
						"time": "3:30 PM",
						"title": "Afternoon game drive",
						"type": "tour"
					},
					{
						"description":
							"Visit to watering hole for elephant viewing",
						"time": "5:30 PM",
						"title": "Visit to watering hole for elephant viewing",
						"type": "tour"
					},
					{
						"description": "Return to motel",
						"time": "7:00 PM",
						"title": "Return to motel",
						"type": "time"
					},
					{
						"description": "Dinner and evening relaxation",
						"time": "7:30 PM",
						"title": "Dinner and evening relaxation",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Mole Motel",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Cultural Experience and Wildlife",
				"timeline": [
					{
						"description": "Breakfast at motel",
						"time": "7:00 AM",
						"title": "Breakfast at motel",
						"type": "food"
					},
					{
						"description": "Visit to nearby traditional village",
						"time": "8:30 AM",
						"title": "Visit to nearby traditional village",
						"type": "tour"
					},
					{
						"description": "Cultural exchange and local crafts",
						"time": "11:00 AM",
						"title": "Cultural exchange and local crafts",
						"type": "tour"
					},
					{
						"description": "Lunch in the village",
						"time": "12:30 PM",
						"title": "Lunch in the village",
						"type": "food"
					},
					{
						"description": "Return to park for final game drive",
						"time": "2:00 PM",
						"title": "Return to park for final game drive",
						"type": "road"
					},
					{
						"description": "Bird watching session",
						"time": "4:30 PM",
						"title": "Bird watching session",
						"type": "tour"
					},
					{
						"description": "Farewell sunset viewing",
						"time": "6:00 PM",
						"title": "Farewell sunset viewing",
						"type": "time"
					},
					{
						"description": "Farewell dinner at motel",
						"time": "7:30 PM",
						"title": "Farewell dinner at motel",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast"],
				"name": "Departure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "8:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description": "Final wildlife viewing opportunity",
						"time": "9:00 AM",
						"title": "Final wildlife viewing opportunity",
						"type": "tour"
					},
					{
						"description": "Departure to Tamale Airport",
						"time": "10:30 AM",
						"title": "Departure to Tamale Airport",
						"type": "road"
					},
					{
						"description": "Arrival at Tamale Airport",
						"time": "1:00 PM",
						"title": "Arrival at Tamale Airport",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Cape Coast & Elmina Historical Tour",
		"slug": "cape-coast-elmina-historical-tour",
		"region": "Central Region",
		"duration": 3,
		"group_size": 10,
		"description":
			"Delve into the poignant history of the transatlantic slave trade with visits to Cape Coast Castle and Elmina Castle. Witness the imposing colonial architecture and learn about the harrowing stories of those who were held captive within these walls.",
		"minimum_age": 12,
		"best_time": "November to March",
		"tour_highlights": ["Visit Cape Coast Castle", "Visit Elmina Castle"],
		"what_to_bring": ["Comfortable shoes", "Sunscreen"],
		"price": 500,
		"images": [
			"/images/elmina-castle.jpg",
			"/images/cape-coast-castle-oceanview.webp"
		],
		"whats_included": ["Transportation", "Accommodation", "Entrance fees"],
		"whats_not_included": ["Flights", "Insurance"],
		"itinerary": [
			{
				"accommodation": "Hotel in Cape Coast",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["dinner"],
				"name": "Arrival and Cape Coast",
				"timeline": [
					{
						"description": "Arrive in Accra",
						"time": "",
						"title": "Arrive in Accra",
						"type": "time"
					},
					{
						"description": "Transfer to Cape Coast",
						"time": "",
						"title": "Transfer to Cape Coast",
						"type": "road"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Hotel in Cape Coast",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Cape Coast Castle",
				"timeline": [
					{
						"description": "Visit Cape Coast Castle",
						"time": "",
						"title": "Visit Cape Coast Castle",
						"type": "tour"
					},
					{
						"description": "Explore the town",
						"time": "",
						"title": "Explore the town",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Elmina Castle and Departure",
				"timeline": [
					{
						"description": "Visit Elmina Castle",
						"time": "",
						"title": "Visit Elmina Castle",
						"type": "tour"
					},
					{
						"description": "Return to Accra",
						"time": "",
						"title": "Return to Accra",
						"type": "road"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Northern Ghana Adventure",
		"slug": "northern-ghana-adventure",
		"region": "Northern Region",
		"duration": 5,
		"group_size": 8,
		"description":
			"Embark on an adventure to Northern Ghana, exploring the unique landscapes and cultural heritage of this region. Visit Mole National Park, Larabanga Mosque, and the ancient trade routes of the Sahel.",
		"minimum_age": 10,
		"best_time": "October to April",
		"tour_highlights": ["Mole National Park", "Larabanga Mosque"],
		"what_to_bring": ["Hiking boots", "Binoculars"],
		"price": 900,
		"images": [
			"/images/mole-national-park-elephant.jpg",
			"/images/larabanga-mosque.jpg"
		],
		"whats_included": ["Transportation", "Accommodation", "Park fees"],
		"whats_not_included": ["Flights", "Insurance"],
		"itinerary": [
			{
				"accommodation": "Hotel near Mole National Park",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["dinner"],
				"name": "Arrival in Tamale",
				"timeline": [
					{
						"description": "Fly to Tamale",
						"time": "",
						"title": "Fly to Tamale",
						"type": "road"
					},
					{
						"description": "Transfer to Mole National Park",
						"time": "",
						"title": "Transfer to Mole National Park",
						"type": "road"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Hotel near Mole National Park",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Mole National Park",
				"timeline": [
					{
						"description": "Game drive in Mole National Park",
						"time": "",
						"title": "Game drive in Mole National Park",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Hotel in Tamale",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Larabanga Mosque",
				"timeline": [
					{
						"description": "Visit Larabanga Mosque",
						"time": "",
						"title": "Visit Larabanga Mosque",
						"type": "tour"
					},
					{
						"description": "Mystic Stone",
						"time": "",
						"title": "Mystic Stone",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Hotel in Tamale",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Ancient Trade Routes",
				"timeline": [
					{
						"description": "Explore the ancient trade routes",
						"time": "",
						"title": "Explore the ancient trade routes",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast"],
				"name": "Departure",
				"timeline": [
					{
						"description": "Return to Accra",
						"time": "",
						"title": "Return to Accra",
						"type": "road"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Accra City Break",
		"slug": "accra-city-break",
		"region": "Greater Accra",
		"duration": 3,
		"group_size": 12,
		"description":
			"Experience the vibrant energy of Accra with a city break that takes you to the heart of Ghana's capital. Visit Independence Square, the National Museum, and Makola Market, and enjoy the city's bustling nightlife.",
		"minimum_age": 8,
		"best_time": "All year round",
		"tour_highlights": [
			"Independence Square",
			"National Museum",
			"Makola Market"
		],
		"what_to_bring": ["Comfortable shoes", "Camera"],
		"price": 400,
		"images": [
			"/images/accra-skyline.jpg",
			"/images/makola-market-accra.jpg"
		],
		"whats_included": ["Transportation", "Accommodation", "Entrance fees"],
		"whats_not_included": ["Flights", "Insurance"],
		"itinerary": [
			{
				"accommodation": "Hotel in Accra",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["dinner"],
				"name": "Arrival in Accra",
				"timeline": [
					{
						"description": "Arrive in Accra",
						"time": "",
						"title": "Arrive in Accra",
						"type": "time"
					},
					{
						"description": "Check-in to hotel",
						"time": "",
						"title": "Check-in to hotel",
						"type": "time"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Hotel in Accra",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Accra City Tour",
				"timeline": [
					{
						"description": "City tour of Accra",
						"time": "",
						"title": "City tour of Accra",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast"],
				"name": "Departure",
				"timeline": [
					{
						"description": "Departure from Accra",
						"time": "",
						"title": "Departure from Accra",
						"type": "road"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Volta Lake Cruise & Resort Experience",
		"slug": "volta-lake-cruise",
		"region": "Eastern Region",
		"duration": 4,
		"group_size": 16,
		"description":
			"Experience the tranquil beauty of Lake Volta, the world's largest artificial lake by surface area, on this luxurious cruise and resort getaway. Spanning over 8,500 square kilometers, Lake Volta offers breathtaking scenery, rich cultural heritage, and unique water-based adventures. Stay at the prestigious Royal Senchi Resort, enjoy sunset cruises, visit traditional fishing communities, and explore the historic Akosombo Dam. This package combines relaxation with cultural immersion, offering guests the chance to experience Ghana's engineering marvel while enjoying world-class hospitality. The lake's numerous islands, each with their own stories and traditions, provide endless opportunities for exploration and photography.",
		"minimum_age": 6,
		"best_time":
			"November to March (dry season), July to September (moderate rainfall)",
		"tour_highlights": [
			"Luxury accommodation at Royal Senchi Resort",
			"Sunset cruise on Lake Volta",
			"Visit to Akosombo Dam and Hydroelectric Plant",
			"Traditional fishing village cultural experience",
			"Island hopping adventure",
			"Water sports and recreational activities",
			"Scenic helicopter tour over the lake",
			"Traditional Ewe cultural performances"
		],
		"what_to_bring": [
			"Comfortable resort wear",
			"Swimwear and water shoes",
			"Light jacket for evening cruises",
			"Sunscreen and sunglasses",
			"Camera for scenic photography",
			"Insect repellent",
			"Comfortable walking shoes",
			"Hat for sun protection"
		],
		"price": 1100,
		"images": [
			"/images/adome-bridge-volta-lake.jpeg",
			"/images/volta-lake.png",
			"/images/royal-senchi-resort.png",
			"/images/adome-bridge-volta-lake.jpeg"
		],
		"whats_included": [
			"3 nights at Royal Senchi Resort (lake view rooms)",
			"All meals at resort restaurants",
			"Daily sunset cruise experiences",
			"Akosombo Dam guided tour",
			"Island hopping boat trips",
			"Cultural village visits",
			"Water sports equipment rental",
			"Airport transfers from Accra",
			"Professional tour guide",
			"All entrance fees and permits"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Travel insurance",
			"Helicopter tour (optional extra)",
			"Alcoholic beverages",
			"Spa treatments at resort",
			"Personal expenses and souvenirs",
			"Tips for guides and staff",
			"Optional excursions not mentioned"
		],
		"itinerary": [
			{
				"accommodation":
					"Royal Senchi Resort - Lake view suites with private balconies",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and Resort Check-in",
				"timeline": [
					{
						"description": "Departure from Accra",
						"time": "9:00 AM",
						"title": "Departure from Accra",
						"type": "road"
					},
					{
						"description": "Arrival at Royal Senchi Resort",
						"time": "11:30 AM",
						"title": "Arrival at Royal Senchi Resort",
						"type": "time"
					},
					{
						"description": "Check-in and welcome refreshments",
						"time": "12:00 PM",
						"title": "Check-in and welcome refreshments",
						"type": "time"
					},
					{
						"description": "Lunch at resort's lakeside restaurant",
						"time": "1:00 PM",
						"title": "Lunch at resort's lakeside restaurant",
						"type": "food"
					},
					{
						"description": "Resort orientation and facilities tour",
						"time": "3:00 PM",
						"title": "Resort orientation and facilities tour",
						"type": "tour"
					},
					{
						"description": "First sunset cruise on Lake Volta",
						"time": "4:30 PM",
						"title": "First sunset cruise on Lake Volta",
						"type": "tour"
					},
					{
						"description": "Return to resort",
						"time": "6:30 PM",
						"title": "Return to resort",
						"type": "time"
					},
					{
						"description": "Welcome dinner with traditional music",
						"time": "7:30 PM",
						"title": "Welcome dinner with traditional music",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Royal Senchi Resort",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Akosombo Dam and Cultural Experience",
				"timeline": [
					{
						"description": "Breakfast at resort",
						"time": "8:00 AM",
						"title": "Breakfast at resort",
						"type": "food"
					},
					{
						"description":
							"Visit to Akosombo Dam and Hydroelectric Plant",
						"time": "9:30 AM",
						"title":
							"Visit to Akosombo Dam and Hydroelectric Plant",
						"type": "tour"
					},
					{
						"description": "Guided tour of dam facilities",
						"time": "11:30 AM",
						"title": "Guided tour of dam facilities",
						"type": "tour"
					},
					{
						"description": "Lunch at local restaurant",
						"time": "1:00 PM",
						"title": "Lunch at local restaurant",
						"type": "food"
					},
					{
						"description": "Visit to traditional fishing village",
						"time": "2:30 PM",
						"title": "Visit to traditional fishing village",
						"type": "tour"
					},
					{
						"description":
							"Cultural exchange with local Ewe community",
						"time": "4:00 PM",
						"title": "Cultural exchange with local Ewe community",
						"type": "tour"
					},
					{
						"description": "Traditional craft workshop",
						"time": "5:30 PM",
						"title": "Traditional craft workshop",
						"type": "tour"
					},
					{
						"description": "Return to resort",
						"time": "7:00 PM",
						"title": "Return to resort",
						"type": "time"
					},
					{
						"description": "Dinner and cultural performance",
						"time": "8:00 PM",
						"title": "Dinner and cultural performance",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Royal Senchi Resort",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Island Hopping and Water Activities",
				"timeline": [
					{
						"description": "Early breakfast",
						"time": "7:30 AM",
						"title": "Early breakfast",
						"type": "food"
					},
					{
						"description": "Island hopping boat expedition",
						"time": "9:00 AM",
						"title": "Island hopping boat expedition",
						"type": "tour"
					},
					{
						"description": "Visit to Dodi Island",
						"time": "10:30 AM",
						"title": "Visit to Dodi Island",
						"type": "tour"
					},
					{
						"description": "Picnic lunch on secluded island",
						"time": "12:00 PM",
						"title": "Picnic lunch on secluded island",
						"type": "food"
					},
					{
						"description": "Swimming and water sports",
						"time": "1:30 PM",
						"title": "Swimming and water sports",
						"type": "tour"
					},
					{
						"description": "Visit to another island community",
						"time": "3:00 PM",
						"title": "Visit to another island community",
						"type": "tour"
					},
					{
						"description":
							"Photography session at scenic viewpoints",
						"time": "4:30 PM",
						"title": "Photography session at scenic viewpoints",
						"type": "tour"
					},
					{
						"description": "Final sunset cruise",
						"time": "6:00 PM",
						"title": "Final sunset cruise",
						"type": "tour"
					},
					{
						"description": "Farewell dinner at resort",
						"time": "7:30 PM",
						"title": "Farewell dinner at resort",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast"],
				"name": "Leisure and Departure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "8:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description":
							"Optional spa treatment or resort activities",
						"time": "9:30 AM",
						"title": "Optional spa treatment or resort activities",
						"type": "time"
					},
					{
						"description": "Final lake viewing and photography",
						"time": "11:00 AM",
						"title": "Final lake viewing and photography",
						"type": "tour"
					},
					{
						"description": "Departure to Accra",
						"time": "12:00 PM",
						"title": "Departure to Accra",
						"type": "road"
					},
					{
						"description": "Arrival in Accra",
						"time": "2:30 PM",
						"title": "Arrival in Accra",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Kumasi Cultural Experience",
		"slug": "kumasi-cultural-experience",
		"region": "Ashanti Region",
		"duration": 3,
		"group_size": 14,
		"description":
			"Discover the rich cultural heritage of the Ashanti people in Kumasi, the traditional and spiritual heart of Ghana. As the seat of the Ashanti Kingdom, Kumasi offers an unparalleled opportunity to experience one of Africa's most sophisticated traditional societies. Visit the magnificent Manhyia Palace, home to the Asantehene (Ashanti King), explore traditional Kente weaving villages where master craftsmen create the world-famous colorful cloth, and immerse yourself in the bustling atmosphere of Kejetia Market, one of West Africa's largest open-air markets. This cultural journey includes traditional ceremonies, craft workshops, storytelling sessions, and authentic Ashanti cuisine, providing deep insights into a culture that has maintained its traditions for over 300 years.",
		"minimum_age": 8,
		"best_time":
			"November to March (dry season), July to August (festival season)",
		"tour_highlights": [
			"Private audience at Manhyia Palace Museum",
			"Traditional Kente weaving workshop in Bonwire village",
			"Guided tour of Kejetia Market with local expert",
			"Adinkra cloth printing hands-on experience",
			"Traditional Ashanti drumming and dancing performance",
			"Visit to traditional goldsmith workshop",
			"Authentic Ashanti cuisine cooking class",
			"Storytelling session with traditional griots"
		],
		"what_to_bring": [
			"Comfortable walking shoes",
			"Light, breathable clothing",
			"Respectful attire for palace visits",
			"Hat and sunglasses",
			"Sunscreen (SPF 30+)",
			"Camera for cultural photography",
			"Notebook for cultural learning",
			"Cash for market purchases"
		],
		"price": 750,
		"images": [
			"/images/kente-cloth.png",
			"/images/adinkra-fabric.png",
			"/images/wooden-mask.png",
			"/images/kente-cloth.png"
		],
		"whats_included": [
			"Professional cultural guide fluent in Twi",
			"2 nights accommodation in cultural heritage hotel",
			"All meals featuring traditional Ashanti cuisine",
			"Transportation in air-conditioned vehicle",
			"All entrance fees and cultural site permits",
			"Traditional craft workshops and materials",
			"Cultural performance tickets",
			"Airport transfers from Kumasi Airport",
			"Bottled water and refreshments",
			"Traditional welcome ceremony"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Domestic flights to Kumasi",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages",
			"Tips for guides and artisans",
			"Optional cultural ceremonies",
			"Photography permits for palace",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Ashanti Cultural Heritage Hotel - Traditional-style rooms with modern amenities",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and Palace Introduction",
				"timeline": [
					{
						"description": "Arrival at Kumasi Airport",
						"time": "10:00 AM",
						"title": "Arrival at Kumasi Airport",
						"type": "time"
					},
					{
						"description": "Transfer to cultural heritage hotel",
						"time": "11:00 AM",
						"title": "Transfer to cultural heritage hotel",
						"type": "road"
					},
					{
						"description":
							"Check-in and traditional welcome ceremony",
						"time": "12:00 PM",
						"title": "Check-in and traditional welcome ceremony",
						"type": "tour"
					},
					{
						"description":
							"Lunch featuring authentic Ashanti dishes",
						"time": "1:00 PM",
						"title": "Lunch featuring authentic Ashanti dishes",
						"type": "food"
					},
					{
						"description": "Visit to Manhyia Palace Museum",
						"time": "2:30 PM",
						"title": "Visit to Manhyia Palace Museum",
						"type": "tour"
					},
					{
						"description": "Private audience with palace officials",
						"time": "4:00 PM",
						"title": "Private audience with palace officials",
						"type": "tour"
					},
					{
						"description":
							"Exploration of palace grounds and gardens",
						"time": "5:30 PM",
						"title": "Exploration of palace grounds and gardens",
						"type": "tour"
					},
					{
						"description":
							"Traditional dinner with cultural briefing",
						"time": "7:00 PM",
						"title": "Traditional dinner with cultural briefing",
						"type": "food"
					},
					{
						"description": "Evening storytelling session",
						"time": "8:30 PM",
						"title": "Evening storytelling session",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Ashanti Cultural Heritage Hotel",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Traditional Crafts and Market Experience",
				"timeline": [
					{
						"description": "Breakfast at hotel",
						"time": "7:30 AM",
						"title": "Breakfast at hotel",
						"type": "food"
					},
					{
						"description": "Drive to Bonwire village (45 minutes)",
						"time": "8:30 AM",
						"title": "Drive to Bonwire village (45 minutes)",
						"type": "road"
					},
					{
						"description": "Traditional Kente weaving workshop",
						"time": "9:15 AM",
						"title": "Traditional Kente weaving workshop",
						"type": "tour"
					},
					{
						"description":
							"Meet with master weavers and learn techniques",
						"time": "11:30 AM",
						"title":
							"Meet with master weavers and learn techniques",
						"type": "tour"
					},
					{
						"description": "Lunch in the village with local family",
						"time": "12:30 PM",
						"title": "Lunch in the village with local family",
						"type": "food"
					},
					{
						"description": "Return to Kumasi",
						"time": "2:00 PM",
						"title": "Return to Kumasi",
						"type": "road"
					},
					{
						"description": "Guided tour of Kejetia Market",
						"time": "3:00 PM",
						"title": "Guided tour of Kejetia Market",
						"type": "tour"
					},
					{
						"description": "Adinkra cloth printing workshop",
						"time": "5:00 PM",
						"title": "Adinkra cloth printing workshop",
						"type": "tour"
					},
					{
						"description": "Return to hotel",
						"time": "6:30 PM",
						"title": "Return to hotel",
						"type": "time"
					},
					{
						"description":
							"Dinner and traditional drumming performance",
						"time": "7:30 PM",
						"title": "Dinner and traditional drumming performance",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Goldsmithing and Culinary Arts",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "8:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description":
							"Visit to traditional goldsmith workshop",
						"time": "9:00 AM",
						"title": "Visit to traditional goldsmith workshop",
						"type": "tour"
					},
					{
						"description":
							"Hands-on gold jewelry making experience",
						"time": "10:30 AM",
						"title": "Hands-on gold jewelry making experience",
						"type": "tour"
					},
					{
						"description": "Ashanti cuisine cooking class",
						"time": "12:00 PM",
						"title": "Ashanti cuisine cooking class",
						"type": "tour"
					},
					{
						"description": "Enjoy the meal you prepared",
						"time": "1:30 PM",
						"title": "Enjoy the meal you prepared",
						"type": "food"
					},
					{
						"description":
							"Final cultural performance and farewell ceremony",
						"time": "2:30 PM",
						"title":
							"Final cultural performance and farewell ceremony",
						"type": "tour"
					},
					{
						"description":
							"Shopping for authentic crafts and souvenirs",
						"time": "3:30 PM",
						"title": "Shopping for authentic crafts and souvenirs",
						"type": "time"
					},
					{
						"description": "Departure to Kumasi Airport",
						"time": "4:30 PM",
						"title": "Departure to Kumasi Airport",
						"type": "road"
					},
					{
						"description": "Arrival at airport for onward journey",
						"time": "5:30 PM",
						"title": "Arrival at airport for onward journey",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Accra City & Beach Experience",
		"slug": "accra-city-beach-tour",
		"region": "Greater Accra",
		"duration": 4,
		"group_size": 18,
		"description":
			"Experience the best of both worlds with our comprehensive Accra City & Beach tour that combines the dynamic energy of Ghana's capital with the serene beauty of its stunning coastline. Start your journey exploring Accra's rich history at Independence Square and the Kwame Nkrumah Memorial Park, dive into the vibrant atmosphere of Makola Market, and discover contemporary Ghanaian art at local galleries. Then unwind at the pristine beaches of Labadi and Kokrobite, where you can enjoy water sports, beachside dining, and traditional fishing village experiences. This tour perfectly balances cultural immersion with relaxation, offering insights into modern Ghanaian life while providing opportunities to enjoy the country's beautiful Atlantic coastline.",
		"minimum_age": 6,
		"best_time":
			"November to March (dry season), July to August (cooler temperatures)",
		"tour_highlights": [
			"Guided tour of Independence Square and Black Star Gate",
			"Visit to Kwame Nkrumah Memorial Park and Mausoleum",
			"Immersive experience at bustling Makola Market",
			"Relaxation at beautiful Labadi Beach Resort",
			"Cultural visit to Kokrobite fishing village",
			"Contemporary art exploration at local galleries",
			"Traditional drumming and dance performance",
			"Sunset beach horseback riding experience"
		],
		"what_to_bring": [
			"Comfortable walking shoes",
			"Beach wear and swimwear",
			"Light, breathable clothing",
			"Hat and sunglasses",
			"High SPF sunscreen",
			"Camera for city and beach photography",
			"Light jacket for evening",
			"Waterproof bag for beach activities"
		],
		"price": 650,
		"images": [
			"/images/independence-arch-ghana.jpg",
			"/images/makola-market-accra.jpg",
			"/ghana-beach-sunset.png",
			"/images/labadi-beach-hotel.png"
		],
		"whats_included": [
			"Professional English-speaking city guide",
			"3 nights accommodation in beachfront hotel",
			"All meals as specified in itinerary",
			"Transportation in air-conditioned vehicle",
			"All entrance fees to museums and attractions",
			"Beach activities and water sports equipment",
			"Cultural performance tickets",
			"Airport transfers from Kotoka International Airport",
			"Bottled water throughout the tour",
			"Traditional welcome drink"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages (except welcome drink)",
			"Tips for guides and hotel staff",
			"Optional spa treatments",
			"Beach equipment rental beyond included items",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Labadi Beach Hotel - Ocean view rooms with modern amenities",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and City Introduction",
				"timeline": [
					{
						"description":
							"Arrival at Kotoka International Airport",
						"time": "10:00 AM",
						"title": "Arrival at Kotoka International Airport",
						"type": "time"
					},
					{
						"description": "Transfer to beachfront hotel in Accra",
						"time": "11:00 AM",
						"title": "Transfer to beachfront hotel in Accra",
						"type": "road"
					},
					{
						"description": "Check-in and welcome refreshments",
						"time": "12:00 PM",
						"title": "Check-in and welcome refreshments",
						"type": "time"
					},
					{
						"description": "Lunch at hotel restaurant",
						"time": "1:00 PM",
						"title": "Lunch at hotel restaurant",
						"type": "food"
					},
					{
						"description":
							"Visit to Independence Square and Black Star Gate",
						"time": "2:30 PM",
						"title":
							"Visit to Independence Square and Black Star Gate",
						"type": "tour"
					},
					{
						"description":
							"Guided tour of Kwame Nkrumah Memorial Park",
						"time": "4:00 PM",
						"title": "Guided tour of Kwame Nkrumah Memorial Park",
						"type": "tour"
					},
					{
						"description":
							"Exploration of nearby Arts Centre for crafts",
						"time": "5:30 PM",
						"title": "Exploration of nearby Arts Centre for crafts",
						"type": "tour"
					},
					{
						"description":
							"Welcome dinner with city overview briefing",
						"time": "7:00 PM",
						"title": "Welcome dinner with city overview briefing",
						"type": "food"
					},
					{
						"description":
							"Evening stroll along Accra's waterfront",
						"time": "8:30 PM",
						"title": "Evening stroll along Accra's waterfront",
						"type": "time"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Labadi Beach Hotel",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Cultural Immersion and Market Experience",
				"timeline": [
					{
						"description": "Breakfast at hotel",
						"time": "8:00 AM",
						"title": "Breakfast at hotel",
						"type": "food"
					},
					{
						"description": "Guided tour of vibrant Makola Market",
						"time": "9:00 AM",
						"title": "Guided tour of vibrant Makola Market",
						"type": "tour"
					},
					{
						"description": "Visit to National Museum of Ghana",
						"time": "11:00 AM",
						"title": "Visit to National Museum of Ghana",
						"type": "tour"
					},
					{
						"description":
							"Lunch at local restaurant featuring Ghanaian cuisine",
						"time": "12:30 PM",
						"title":
							"Lunch at local restaurant featuring Ghanaian cuisine",
						"type": "food"
					},
					{
						"description": "Contemporary art gallery tour",
						"time": "2:00 PM",
						"title": "Contemporary art gallery tour",
						"type": "tour"
					},
					{
						"description": "Visit to W.E.B. Du Bois Centre",
						"time": "3:30 PM",
						"title": "Visit to W.E.B. Du Bois Centre",
						"type": "tour"
					},
					{
						"description": "Relaxation time at Labadi Beach",
						"time": "5:00 PM",
						"title": "Relaxation time at Labadi Beach",
						"type": "time"
					},
					{
						"description": "Beach volleyball and water sports",
						"time": "6:30 PM",
						"title": "Beach volleyball and water sports",
						"type": "tour"
					},
					{
						"description": "Beachside dinner with live music",
						"time": "7:30 PM",
						"title": "Beachside dinner with live music",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Labadi Beach Hotel",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Beach Adventure and Fishing Village",
				"timeline": [
					{
						"description": "Early breakfast",
						"time": "7:30 AM",
						"title": "Early breakfast",
						"type": "food"
					},
					{
						"description": "Drive to Kokrobite Beach (45 minutes)",
						"time": "8:30 AM",
						"title": "Drive to Kokrobite Beach (45 minutes)",
						"type": "road"
					},
					{
						"description": "Visit to traditional fishing village",
						"time": "9:15 AM",
						"title": "Visit to traditional fishing village",
						"type": "tour"
					},
					{
						"description": "Canoe ride with local fishermen",
						"time": "10:30 AM",
						"title": "Canoe ride with local fishermen",
						"type": "tour"
					},
					{
						"description": "Beach picnic lunch",
						"time": "12:00 PM",
						"title": "Beach picnic lunch",
						"type": "food"
					},
					{
						"description": "Swimming and beach relaxation",
						"time": "1:30 PM",
						"title": "Swimming and beach relaxation",
						"type": "time"
					},
					{
						"description":
							"Traditional drumming and dance workshop",
						"time": "3:00 PM",
						"title": "Traditional drumming and dance workshop",
						"type": "tour"
					},
					{
						"description": "Sunset horseback riding on the beach",
						"time": "4:30 PM",
						"title": "Sunset horseback riding on the beach",
						"type": "tour"
					},
					{
						"description": "Return to Accra",
						"time": "6:00 PM",
						"title": "Return to Accra",
						"type": "road"
					},
					{
						"description": "Farewell dinner at rooftop restaurant",
						"time": "7:30 PM",
						"title": "Farewell dinner at rooftop restaurant",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Final Exploration and Departure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "8:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description": "Visit to Osu Castle (exterior viewing)",
						"time": "9:30 AM",
						"title": "Visit to Osu Castle (exterior viewing)",
						"type": "tour"
					},
					{
						"description":
							"Shopping at Oxford Street for souvenirs",
						"time": "10:30 AM",
						"title": "Shopping at Oxford Street for souvenirs",
						"type": "time"
					},
					{
						"description": "Lunch at popular local restaurant",
						"time": "12:00 PM",
						"title": "Lunch at popular local restaurant",
						"type": "food"
					},
					{
						"description": "Final beach time at Labadi Beach",
						"time": "1:30 PM",
						"title": "Final beach time at Labadi Beach",
						"type": "time"
					},
					{
						"description":
							"Departure to Kotoka International Airport",
						"time": "3:00 PM",
						"title": "Departure to Kotoka International Airport",
						"type": "road"
					},
					{
						"description": "Arrival at airport for onward journey",
						"time": "4:00 PM",
						"title": "Arrival at airport for onward journey",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Wli Waterfalls Adventure",
		"slug": "wli-waterfalls-adventure",
		"region": "Volta Region",
		"duration": 3,
		"group_size": 12,
		"description":
			"Embark on an exhilarating adventure to Wli Waterfalls, Ghana's tallest waterfall cascading 60 meters down from the Agumatsa Wildlife Sanctuary. Located in the Volta Region near the Togo border, this spectacular natural wonder offers an unforgettable hiking experience through pristine tropical rainforest teeming with exotic wildlife including over 200 bird species, butterflies, and monkeys. The journey combines physical adventure with cultural immersion as you explore traditional Ewe villages, learn about local customs, and witness the harmonious relationship between communities and nature. Whether you choose the moderate hike to the lower falls or challenge yourself with the demanding trek to the upper falls, you'll be rewarded with stunning views, refreshing natural pools, and the thunderous roar of cascading water in one of West Africa's most pristine natural environments.",
		"minimum_age": 10,
		"best_time":
			"November to March (dry season), May to July (lush vegetation)",
		"tour_highlights": [
			"Hike to Ghana's highest waterfall (60 meters)",
			"Trek through pristine Agumatsa Wildlife Sanctuary",
			"Swimming in natural pools beneath the falls",
			"Bird watching with over 200 species",
			"Traditional Ewe village cultural experience",
			"Monkey sanctuary visit and wildlife spotting",
			"Canopy walk through tropical rainforest",
			"Traditional drumming and storytelling sessions"
		],
		"what_to_bring": [
			"Sturdy hiking boots with good grip",
			"Quick-dry hiking clothing",
			"Waterproof jacket and pants",
			"Swimming attire",
			"Wide-brimmed hat",
			"High SPF waterproof sunscreen",
			"Insect repellent (DEET recommended)",
			"Camera in waterproof case",
			"Personal water bottle",
			"Energy snacks",
			"First aid kit",
			"Headlamp or flashlight"
		],
		"price": 580,
		"images": [
			"/placeholder.svg?height=400&width=600&query=Wli+Waterfalls+Ghana+cascading+water+tropical+forest",
			"/placeholder.svg?height=400&width=600&query=hiking+trail+tropical+rainforest+Ghana+Volta+region",
			"/placeholder.svg?height=400&width=600&query=traditional+Ewe+village+Ghana+cultural+experience",
			"/placeholder.svg?height=400&width=600&query=natural+swimming+pool+waterfall+Ghana+adventure"
		],
		"whats_included": [
			"Professional nature guide and local Ewe guide",
			"2 nights accommodation in eco-lodge",
			"All meals featuring local Ewe cuisine",
			"Transportation in 4WD vehicle",
			"All park entrance fees and permits",
			"Hiking equipment and safety gear",
			"Cultural village visit and activities",
			"Bottled water and energy snacks during hikes",
			"Traditional welcome ceremony",
			"Airport transfers from Ho Airport"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Domestic flights to Ho",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages",
			"Tips for guides and porters",
			"Optional helicopter tour",
			"Photography permits for villages",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Wli Eco-Lodge - Traditional-style rooms with forest views",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and Village Introduction",
				"timeline": [
					{
						"description": "Departure from Accra to Volta Region",
						"time": "9:00 AM",
						"title": "Departure from Accra to Volta Region",
						"type": "road"
					},
					{
						"description": "Arrival in Wli village and check-in",
						"time": "12:30 PM",
						"title": "Arrival in Wli village and check-in",
						"type": "time"
					},
					{
						"description":
							"Welcome lunch with traditional Ewe dishes",
						"time": "1:00 PM",
						"title": "Welcome lunch with traditional Ewe dishes",
						"type": "food"
					},
					{
						"description":
							"Village orientation and cultural briefing",
						"time": "2:30 PM",
						"title": "Village orientation and cultural briefing",
						"type": "tour"
					},
					{
						"description":
							"Easy nature walk to lower Wli Waterfalls",
						"time": "3:30 PM",
						"title": "Easy nature walk to lower Wli Waterfalls",
						"type": "tour"
					},
					{
						"description":
							"Swimming and relaxation at natural pools",
						"time": "5:00 PM",
						"title": "Swimming and relaxation at natural pools",
						"type": "tour"
					},
					{
						"description": "Return to eco-lodge",
						"time": "6:30 PM",
						"title": "Return to eco-lodge",
						"type": "time"
					},
					{
						"description":
							"Traditional dinner and cultural performance",
						"time": "7:30 PM",
						"title": "Traditional dinner and cultural performance",
						"type": "food"
					},
					{
						"description":
							"Evening storytelling session with village elders",
						"time": "8:30 PM",
						"title":
							"Evening storytelling session with village elders",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Wli Eco-Lodge",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Upper Falls Adventure and Wildlife",
				"timeline": [
					{
						"description": "Early breakfast and hiking preparation",
						"time": "6:00 AM",
						"title": "Early breakfast and hiking preparation",
						"type": "food"
					},
					{
						"description":
							"Challenging hike to upper Wli Waterfalls",
						"time": "7:00 AM",
						"title": "Challenging hike to upper Wli Waterfalls",
						"type": "tour"
					},
					{
						"description":
							"Wildlife spotting and bird watching en route",
						"time": "9:30 AM",
						"title": "Wildlife spotting and bird watching en route",
						"type": "tour"
					},
					{
						"description": "Arrival at upper falls and exploration",
						"time": "11:00 AM",
						"title": "Arrival at upper falls and exploration",
						"type": "tour"
					},
					{
						"description": "Picnic lunch with waterfall views",
						"time": "12:30 PM",
						"title": "Picnic lunch with waterfall views",
						"type": "food"
					},
					{
						"description":
							"Swimming and photography at upper pools",
						"time": "2:00 PM",
						"title": "Swimming and photography at upper pools",
						"type": "tour"
					},
					{
						"description": "Descent through different forest trail",
						"time": "3:30 PM",
						"title": "Descent through different forest trail",
						"type": "tour"
					},
					{
						"description": "Visit to local monkey sanctuary",
						"time": "5:00 PM",
						"title": "Visit to local monkey sanctuary",
						"type": "tour"
					},
					{
						"description": "Return to lodge",
						"time": "6:30 PM",
						"title": "Return to lodge",
						"type": "time"
					},
					{
						"description":
							"Dinner and traditional drumming workshop",
						"time": "7:30 PM",
						"title": "Dinner and traditional drumming workshop",
						"type": "food"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Canopy Walk and Departure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "7:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description":
							"Canopy walk through rainforest treetops",
						"time": "8:00 AM",
						"title": "Canopy walk through rainforest treetops",
						"type": "tour"
					},
					{
						"description":
							"Final wildlife spotting and photography",
						"time": "10:00 AM",
						"title": "Final wildlife spotting and photography",
						"type": "tour"
					},
					{
						"description": "Visit to traditional craft workshop",
						"time": "11:30 AM",
						"title": "Visit to traditional craft workshop",
						"type": "tour"
					},
					{
						"description": "Farewell lunch in the village",
						"time": "12:30 PM",
						"title": "Farewell lunch in the village",
						"type": "food"
					},
					{
						"description": "Departure to Accra",
						"time": "1:30 PM",
						"title": "Departure to Accra",
						"type": "road"
					},
					{
						"description": "Arrival in Accra",
						"time": "5:00 PM",
						"title": "Arrival in Accra",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	},
	{
		"name": "Surfing Adventure in Ghana",
		"slug": "surfing-in-ghana",
		"region": "Western & Central Regions",
		"duration": 5,
		"group_size": 10,
		"description":
			"Discover Ghana's incredible surfing scene on this comprehensive surf adventure that takes you to the country's premier wave-riding destinations. Ghana's 550-kilometer coastline offers consistent year-round swells, warm tropical waters, and a laid-back beach culture that's perfect for both beginner and experienced surfers. Start your journey at the famous Busua Beach, known for its gentle, learner-friendly waves and vibrant surf community, then progress to more challenging breaks at Cape Coast and Kokrobite. This package combines professional surf instruction with cultural immersion, allowing you to experience traditional fishing communities, local cuisine, and the unique Ghanaian beach lifestyle. Whether you're catching your first wave or perfecting your technique, you'll be guided by experienced local surf instructors who know these waters intimately.",
		"minimum_age": 12,
		"best_time":
			"March to October (best swells), November to February (smaller waves, good for beginners)",
		"tour_highlights": [
			"Professional surf lessons at Busua Beach",
			"Surfing at multiple world-class breaks",
			"All surfboard and wetsuit equipment included",
			"Traditional fishing village cultural experiences",
			"Beachside accommodation with ocean views",
			"Local surf guide and safety instruction",
			"Beach bonfire sessions with local surfers",
			"Fresh seafood dining experiences"
		],
		"what_to_bring": [
			"Swimwear and board shorts",
			"Rash guard or surf shirt",
			"Reef-safe sunscreen (SPF 50+)",
			"Waterproof camera or GoPro",
			"Quick-dry towels",
			"Flip-flops or water shoes",
			"Hat and sunglasses",
			"Light beach clothing",
			"Personal first aid kit",
			"Waterproof bag for valuables"
		],
		"price": 890,
		"images": [
			"/placeholder.svg?height=400&width=600&query=surfing+Ghana+beach+waves+tropical+coastline",
			"/placeholder.svg?height=400&width=600&query=Busua+Beach+Ghana+surfboard+sunset+palm+trees",
			"/placeholder.svg?height=400&width=600&query=surf+lesson+Ghana+instructor+beginner+waves",
			"/placeholder.svg?height=400&width=600&query=fishing+village+Ghana+colorful+boats+beach"
		],
		"whats_included": [
			"Professional surf instructor and guide",
			"4 nights beachfront accommodation",
			"All meals featuring fresh seafood",
			"Surfboard rental for entire duration",
			"Wetsuit and safety equipment",
			"Transportation between surf spots",
			"Cultural village visits",
			"Airport transfers from Takoradi",
			"Surf photography sessions",
			"Beach equipment (chairs, umbrellas)"
		],
		"whats_not_included": [
			"International flights to Ghana",
			"Domestic flights to Takoradi",
			"Travel insurance",
			"Personal expenses and souvenirs",
			"Alcoholic beverages",
			"Tips for instructors and guides",
			"Optional massage treatments",
			"Personal surf equipment purchase",
			"Medical expenses"
		],
		"itinerary": [
			{
				"accommodation":
					"Busua Beach Surf Lodge - Oceanfront rooms with surf views",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["lunch", "dinner"],
				"name": "Arrival and Surf Introduction",
				"timeline": [
					{
						"description": "Arrival at Takoradi Airport",
						"time": "10:00 AM",
						"title": "Arrival at Takoradi Airport",
						"type": "time"
					},
					{
						"description": "Transfer to Busua Beach (1 hour)",
						"time": "11:30 AM",
						"title": "Transfer to Busua Beach (1 hour)",
						"type": "road"
					},
					{
						"description": "Check-in at beachfront surf lodge",
						"time": "12:30 PM",
						"title": "Check-in at beachfront surf lodge",
						"type": "time"
					},
					{
						"description": "Welcome lunch with ocean views",
						"time": "1:00 PM",
						"title": "Welcome lunch with ocean views",
						"type": "food"
					},
					{
						"description":
							"Surf equipment fitting and beach orientation",
						"time": "2:30 PM",
						"title": "Surf equipment fitting and beach orientation",
						"type": "tour"
					},
					{
						"description": "First surf lesson - basics and safety",
						"time": "3:30 PM",
						"title": "First surf lesson - basics and safety",
						"type": "tour"
					},
					{
						"description": "Sunset session and wave reading",
						"time": "5:30 PM",
						"title": "Sunset session and wave reading",
						"type": "tour"
					},
					{
						"description": "Traditional Ghanaian dinner",
						"time": "7:00 PM",
						"title": "Traditional Ghanaian dinner",
						"type": "food"
					},
					{
						"description":
							"Beach bonfire with local surf community",
						"time": "8:30 PM",
						"title": "Beach bonfire with local surf community",
						"type": "time"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Busua Beach Surf Lodge",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Busua Beach Surf Mastery",
				"timeline": [
					{
						"description": "Dawn patrol surf session",
						"time": "6:30 AM",
						"title": "Dawn patrol surf session",
						"type": "tour"
					},
					{
						"description": "Breakfast at lodge",
						"time": "8:30 AM",
						"title": "Breakfast at lodge",
						"type": "food"
					},
					{
						"description": "Advanced surf techniques lesson",
						"time": "10:00 AM",
						"title": "Advanced surf techniques lesson",
						"type": "tour"
					},
					{
						"description": "Lunch break and rest",
						"time": "12:00 PM",
						"title": "Lunch break and rest",
						"type": "food"
					},
					{
						"description": "Afternoon surf practice session",
						"time": "2:00 PM",
						"title": "Afternoon surf practice session",
						"type": "tour"
					},
					{
						"description": "Visit to traditional fishing village",
						"time": "4:00 PM",
						"title": "Visit to traditional fishing village",
						"type": "tour"
					},
					{
						"description": "Learn about local fishing techniques",
						"time": "5:30 PM",
						"title": "Learn about local fishing techniques",
						"type": "tour"
					},
					{
						"description": "Fresh seafood dinner",
						"time": "7:00 PM",
						"title": "Fresh seafood dinner",
						"type": "food"
					},
					{
						"description": "Surf video analysis and tips",
						"time": "8:30 PM",
						"title": "Surf video analysis and tips",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Cape Coast Beach Resort - Ocean view rooms",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Cape Coast Surf Adventure",
				"timeline": [
					{
						"description": "Breakfast and check-out",
						"time": "7:00 AM",
						"title": "Breakfast and check-out",
						"type": "food"
					},
					{
						"description": "Drive to Cape Coast (2 hours)",
						"time": "8:00 AM",
						"title": "Drive to Cape Coast (2 hours)",
						"type": "road"
					},
					{
						"description": "Surf session at Cape Coast beach break",
						"time": "10:00 AM",
						"title": "Surf session at Cape Coast beach break",
						"type": "tour"
					},
					{
						"description": "Lunch at beachside restaurant",
						"time": "12:00 PM",
						"title": "Lunch at beachside restaurant",
						"type": "food"
					},
					{
						"description": "Visit to Cape Coast Castle (optional)",
						"time": "1:30 PM",
						"title": "Visit to Cape Coast Castle (optional)",
						"type": "tour"
					},
					{
						"description": "Afternoon surf session",
						"time": "3:30 PM",
						"title": "Afternoon surf session",
						"type": "tour"
					},
					{
						"description": "Check-in at Cape Coast accommodation",
						"time": "5:30 PM",
						"title": "Check-in at Cape Coast accommodation",
						"type": "time"
					},
					{
						"description": "Dinner with local surf community",
						"time": "7:00 PM",
						"title": "Dinner with local surf community",
						"type": "food"
					},
					{
						"description": "Beach walk and surf spot planning",
						"time": "8:30 PM",
						"title": "Beach walk and surf spot planning",
						"type": "tour"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "Cape Coast Beach Resort",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch", "dinner"],
				"name": "Kokrobite Beach Experience",
				"timeline": [
					{
						"description": "Early breakfast",
						"time": "7:00 AM",
						"title": "Early breakfast",
						"type": "food"
					},
					{
						"description": "Drive to Kokrobite Beach (1.5 hours)",
						"time": "8:00 AM",
						"title": "Drive to Kokrobite Beach (1.5 hours)",
						"type": "road"
					},
					{
						"description": "Surf session at Kokrobite point break",
						"time": "9:30 AM",
						"title": "Surf session at Kokrobite point break",
						"type": "tour"
					},
					{
						"description": "Beach relaxation and photography",
						"time": "11:30 AM",
						"title": "Beach relaxation and photography",
						"type": "time"
					},
					{
						"description": "Lunch at famous beachside café",
						"time": "12:30 PM",
						"title": "Lunch at famous beachside café",
						"type": "food"
					},
					{
						"description": "Cultural drumming and dance workshop",
						"time": "2:00 PM",
						"title": "Cultural drumming and dance workshop",
						"type": "tour"
					},
					{
						"description": "Final surf session of the day",
						"time": "4:00 PM",
						"title": "Final surf session of the day",
						"type": "tour"
					},
					{
						"description": "Return to Cape Coast",
						"time": "6:00 PM",
						"title": "Return to Cape Coast",
						"type": "road"
					},
					{
						"description": "Farewell dinner with surf instructors",
						"time": "7:30 PM",
						"title": "Farewell dinner with surf instructors",
						"type": "food"
					},
					{
						"description": "Beach party with local musicians",
						"time": "9:00 PM",
						"title": "Beach party with local musicians",
						"type": "time"
					}
				],
				"travel_tips": []
			},
			{
				"accommodation": "",
				"categories": [],
				"description": "",
				"images": [],
				"included_meals": ["breakfast", "lunch"],
				"name": "Final Surf and Departure",
				"timeline": [
					{
						"description": "Final dawn surf session",
						"time": "7:00 AM",
						"title": "Final dawn surf session",
						"type": "tour"
					},
					{
						"description": "Breakfast and equipment return",
						"time": "9:00 AM",
						"title": "Breakfast and equipment return",
						"type": "food"
					},
					{
						"description": "Surf progress review and certificates",
						"time": "10:30 AM",
						"title": "Surf progress review and certificates",
						"type": "tour"
					},
					{
						"description": "Shopping for surf souvenirs",
						"time": "11:30 AM",
						"title": "Shopping for surf souvenirs",
						"type": "time"
					},
					{
						"description": "Farewell lunch",
						"time": "12:30 PM",
						"title": "Farewell lunch",
						"type": "food"
					},
					{
						"description": "Departure to Takoradi Airport",
						"time": "2:00 PM",
						"title": "Departure to Takoradi Airport",
						"type": "road"
					},
					{
						"description": "Arrival at airport for onward journey",
						"time": "3:30 PM",
						"title": "Arrival at airport for onward journey",
						"type": "time"
					}
				],
				"travel_tips": []
			}
		]
	}
];
