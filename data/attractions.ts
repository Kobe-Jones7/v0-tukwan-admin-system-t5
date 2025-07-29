import { Attractions } from "@/app/generated/prisma";

const attractions = [
	// Greater Accra Region Attractions
	{
		id: "1",
		slug: "independence-arch",
		name: "Independence Arch",
		category: "Historical",
		overview:
			"The Independence Arch, also known as Black Star Gate, is a monument in Accra that marks Ghana's independence from British colonial rule in 1957. It stands at the center of Independence Square and features the iconic Black Star, a symbol of African freedom.",
		history:
			"The Independence Arch was built in 1961 to commemorate Ghana's independence, which was declared by Dr. Kwame Nkrumah on March 6, 1957. The monument was designed to symbolize Ghana's emergence as the first sub-Saharan African country to gain independence from colonial rule. The Black Star at the top of the arch represents African emancipation and unity.",
		cultural_significance:
			"• The iconic Black Star symbol at the top of the arch\n• The inscription 'Freedom and Justice, AD 1957'\n• The expansive Independence Square surrounding the monument\n• Panoramic views of the Atlantic Ocean from the square\n• Historical significance as a symbol of African liberation",
		images: [
			"/images/independence-arch-ghana.jpg",
			"/independence-square-accra.png",
		],
		location: {
			address: "Independence Square",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1962,
			latitude: 5.5478,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Open daily from 8:00 AM to 6:00 PM",
			entry_fee: "Free (special permission needed for photography)",
		},
	},
	{
		id: "2",
		slug: "kwame-nkrumah-museum",
		name: "Kwame Nkrumah Memorial Park & Museum",
		category: "Historical",
		overview:
			"The Kwame Nkrumah Memorial Park and Museum honors Ghana's first president and influential pan-Africanist leader. The park contains the mausoleum where Nkrumah and his wife are buried, surrounded by beautiful fountains and gardens. The museum houses a collection of Nkrumah's personal belongings and tells the story of his life and Ghana's independence struggle.",
		history:
			"The memorial park was built on the site where Nkrumah declared Ghana's independence in 1957. After Nkrumah was overthrown in 1966, he lived in exile until his death in 1972. His remains were initially buried in Guinea but were later transferred to this mausoleum in Accra in 1992, when the memorial park was officially opened.",
		cultural_significance:
			"• The marble mausoleum where Nkrumah and his wife are entombed\n• The museum containing Nkrumah's personal effects and historical artifacts\n• The statue of Nkrumah with his famous declaration 'Ghana, your beloved country is free forever'\n• Beautiful fountains that perform a synchronized water display\n• Extensive photo gallery documenting Nkrumah's life and political career",
		images: [
			"/kwame-nkrumah-memorial-park.png",
			"/kwame-nkrumah-mausoleum.png",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.2008,
			latitude: 5.5449,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Monday to Sunday, 9:00 AM to 5:00 PM",
			entry_fee: "GH₵10 for Ghanaians, GH₵30 for foreign visitors",
		},
	},
	{
		id: "3",
		slug: "christiansborg-castle",
		name: "Christiansborg Castle (Osu Castle)",
		category: "Historical",
		overview:
			"Christiansborg Castle, also known as Osu Castle, is a historic fortress located in Accra's Osu neighborhood. Built by the Danes in the 17th century, it served as a trading post, slave fort, and later as Ghana's seat of government until 2013. The castle offers a powerful glimpse into Ghana's colonial past and its journey to independence.",
		history:
			"The castle was originally built by the Danes in 1661 for trade in gold, ivory, and slaves. It changed hands multiple times between the Portuguese, Danes, British, and finally the Ghanaian government after independence. It served as the seat of government from Nkrumah's time until 2013 when government operations moved to Jubilee House. The castle was a key site in the transatlantic slave trade, with dungeons where enslaved Africans were held before being shipped to the Americas.",
		cultural_significance:
			"• The imposing white fortress structure overlooking the Gulf of Guinea\n• The former presidential office and reception rooms\n• The slave dungeons that bear witness to the brutal history of the slave trade\n• The transition from colonial fort to seat of independent government\n• The War Memorial dedicated to Ghanaian soldiers who died in World Wars I and II",
		images: [
			"/placeholder.svg?height=400&width=600&query=Christiansborg+Castle+Osu+Ghana",
			"/placeholder.svg?height=400&width=600&query=Osu+Castle+Accra+historical+building",
		],
		location: {
			address: "Osu",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1844,
			latitude: 5.5461,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Tuesday to Sunday, 9:00 AM to 4:30 PM (Closed on Mondays)",
			entry_fee: "GH₵20 for Ghanaians, GH₵40 for foreign visitors",
		},
	},
	{
		id: "4",
		slug: "national-museum",
		name: "Ghana National Museum",
		category: "Museum",
		overview:
			"The Ghana National Museum in Accra is the country's primary museum, showcasing Ghana's rich cultural heritage from prehistoric times to the present day. The museum houses a diverse collection of artifacts including archaeological finds, traditional crafts, historical documents, and contemporary art that tell the story of Ghana's cultural evolution.",
		history:
			"The National Museum was established in 1957, the year of Ghana's independence, as part of the effort to preserve and showcase the country's cultural heritage. The building itself was opened to the public in 1959. Over the decades, it has expanded its collection to include artifacts from various archaeological excavations, ethnographic research, and donations from across the country.",
		cultural_significance:
			"• Extensive collection of traditional Ghanaian crafts including kente cloth and Asante gold weights\n• Archaeological artifacts dating back to the Stone Age\n• Traditional musical instruments from various Ghanaian ethnic groups\n• Historical documents and photographs from the independence movement\n• Contemporary Ghanaian art showcasing modern cultural expressions",
		images: [
			"/placeholder.svg?height=400&width=600&query=Ghana+National+Museum+Accra",
			"/placeholder.svg?height=400&width=600&query=Ghana+cultural+artifacts+museum",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1969,
			latitude: 5.5603,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 5:00 PM",
			entry_fee: "GH₵10 for Ghanaians, GH₵30 for foreign visitors",
		},
	},
	{
		id: "5",
		slug: "makola-market",
		name: "Makola Market",
		category: "Market",
		overview:
			"Makola Market is the bustling commercial heart of Accra, a sprawling marketplace where you can find everything from fresh produce and traditional medicines to textiles, electronics, and household goods. This vibrant market offers an authentic glimpse into everyday Ghanaian life and commerce, with hundreds of stalls and thousands of traders creating a sensory explosion of colors, sounds, and scents.",
		history:
			"Makola Market was established in the 1920s during the colonial era and has grown to become one of West Africa's largest markets. It has survived fires, economic downturns, and even demolition attempts in the 1970s. The market has historically been dominated by women traders, known as 'market queens,' who control various sections and commodities. It remains a crucial economic hub for Accra and a symbol of Ghanaian entrepreneurship.",
		cultural_significance:
			"• The colorful textile section with traditional and modern fabrics\n• Fresh food section with local produce, spices, and ingredients\n• Handcrafted items including beads, baskets, and traditional crafts\n• The energetic atmosphere with traders calling out to customers\n• Opportunity to practice bargaining and experience local commerce",
		images: [
			"/images/makola-market-accra.jpg",
			"/images/makola-market-accra.jpg",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.2065,
			latitude: 5.5468,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Monday to Saturday, 6:00 AM to 7:00 PM (reduced hours on Sundays)",
			entry_fee: "Free",
		},
	},
	{
		id: "6",
		slug: "accra-arts-center",
		name: "Accra Arts Centre",
		category: "Arts",
		overview:
			"The Accra Arts Centre, also known as the Centre for National Culture, is Ghana's premier destination for traditional arts and crafts. This sprawling market and cultural center showcases the work of local artisans, offering everything from wood carvings and kente cloth to beaded jewelry, drums, and paintings. It's the perfect place to find authentic Ghanaian souvenirs and watch craftspeople at work.",
		history:
			"The Arts Centre was established in the 1960s as part of Ghana's post-independence cultural revival. It was designed to preserve traditional crafts and provide artisans with a place to showcase and sell their work. Over the decades, it has grown from a small crafts center to a major cultural institution that attracts both locals and tourists. The center has played a significant role in maintaining Ghana's artistic traditions while adapting to contemporary tastes.",
		cultural_significance:
			"• Hundreds of stalls selling authentic Ghanaian arts and crafts\n• Artisans demonstrating traditional craft techniques like wood carving and kente weaving\n• Gallery spaces showcasing contemporary Ghanaian art\n• Performance areas for traditional music and dance\n• Workshops where visitors can learn craft-making techniques",
		images: [
			"/placeholder.svg?height=400&width=600&query=Accra+Arts+Centre+crafts+Ghana",
			"/placeholder.svg?height=400&width=600&query=Ghana+traditional+crafts+market",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1977,
			latitude: 5.5433,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 6:00 PM",
			entry_fee:
				"Free (but expect to pay for any workshops or performances)",
		},
	},
	{
		id: "7",
		slug: "oxford-street",
		name: "Oxford Street (Osu)",
		category: "Shopping",
		overview:
			"Oxford Street in the Osu district is Accra's most vibrant commercial and entertainment strip. Named after London's famous shopping street, this bustling thoroughfare is lined with boutiques, electronics shops, restaurants, bars, and nightclubs. It represents modern, cosmopolitan Ghana and offers visitors a taste of Accra's contemporary urban culture.",
		history:
			"The Osu district has transformed dramatically since Ghana's independence. What was once a quiet residential area has become Accra's entertainment hub. Oxford Street (officially Cantonments Road) earned its nickname in the 1990s as it developed into a commercial center. The area reflects Ghana's economic growth and increasing international influences, while still maintaining elements of traditional Ghanaian culture in its markets and street food.",
		cultural_significance:
			"• Diverse shopping options from high-end boutiques to street vendors\n• Vibrant nightlife with numerous bars and clubs\n• International and local cuisine at various restaurants\n• Street performers and occasional cultural displays\n• Blend of traditional and modern Ghanaian urban culture",
		images: [
			"/placeholder.svg?height=400&width=600&query=Oxford+Street+Osu+Accra+night+life",
			"/placeholder.svg?height=400&width=600&query=Osu+Accra+restaurants+shopping",
		],
		location: {
			address: "Osu",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1809,
			latitude: 5.5576,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Most shops open 9:00 AM to 9:00 PM, restaurants and bars until late",
			entry_fee: "Free",
		},
	},
	{
		id: "8",
		slug: "shai-hills",
		name: "Shai Hills Resource Reserve",
		category: "Nature",
		overview:
			"Shai Hills Resource Reserve is a wildlife sanctuary and nature reserve located just outside Accra. The reserve features unique rocky outcrops, savanna grasslands, and woodland habitats that support diverse wildlife including baboons, kobs, and numerous bird species. Ancient caves within the hills contain evidence of human habitation dating back centuries, making the reserve both a natural and cultural heritage site.",
		history:
			"The area was home to the Shai people until 1892 when they were expelled by the British colonial authorities. The hills contain caves that were used for shelter, religious ceremonies, and as hiding places during conflicts. The area was designated as a resource reserve in 1971 to protect both its natural environment and cultural heritage. The reserve preserves the ancestral lands of the Shai people, who still conduct occasional traditional ceremonies at sacred sites within the hills.",
		cultural_significance:
			"• Troops of olive baboons that can be observed at close range\n• Ancient caves with historical and spiritual significance\n• Distinctive inselberg formations (rocky hills) rising from the plains\n• Over 175 bird species making it a birdwatcher's paradise\n• Hiking trails with panoramic views of the surrounding landscape",
		images: ["/shai-hills-baboons.png", "/shai-hills-caves-ghana.png"],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Shai Hills",
			longitude: 0.05,
			latitude: 5.9167,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Daily from 6:00 AM to 6:00 PM",
			entry_fee:
				"GH₵20 for Ghanaians, GH₵50 for foreign visitors (additional fee for vehicles)",
		},
	},
	{
		id: "9",
		slug: "tsenku-waterfalls",
		name: "Tsenku Waterfalls",
		category: "Nature",
		overview:
			"Tsenku Waterfalls (also spelled Chenku) is a hidden natural gem located near the town of Dodowa in the Greater Accra Region. The waterfall cascades down rocky outcrops surrounded by lush forest, creating a refreshing oasis away from the city heat. A moderate hike through the forest leads visitors to this picturesque waterfall where they can swim in the natural pool at its base.",
		history:
			"The waterfall has long been considered sacred by local communities, particularly the Shai people. Traditional priests have historically used the site for rituals and spiritual ceremonies. According to local legend, the waterfall has healing properties. During colonial times, the area remained largely untouched due to its sacred status, helping to preserve its natural beauty. Today, while it has become a tourist attraction, efforts are made to respect its cultural significance.",
		cultural_significance:
			"• The main waterfall dropping approximately 30 meters into a natural swimming pool\n• Scenic hiking trail through forest with diverse plant species\n• Bird watching opportunities with numerous forest birds\n• Natural swimming area at the base of the falls\n• Peaceful atmosphere with the constant sound of falling water",
		images: [
			"/placeholder.svg?height=400&width=600&query=Tsenku+Waterfalls+Ghana+forest",
			"/placeholder.svg?height=400&width=600&query=Chenku+Waterfall+Dodowa+Ghana",
		],
		location: {
			address: "Near Dodowa",
			country: "Ghana",
			country_code: "GH",
			city: "Greater Accra",
			longitude: 0.0667,
			latitude: 5.8833,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 5:00 PM",
			entry_fee: "GH₵15 for Ghanaians, GH₵30 for foreign visitors",
		},
	},
	{
		id: "10",
		slug: "accra-beaches",
		name: "Accra Beaches",
		category: "Beach",
		overview:
			"Accra's coastline features several beautiful beaches that offer respite from the city's hustle and bustle. From the popular Labadi Beach with its entertainment and activities to the more secluded Bojo Beach accessible only by boat, Accra's beaches provide opportunities for relaxation, swimming, and experiencing local beach culture. Each beach has its own character, from lively and energetic to peaceful and contemplative.",
		history:
			"Accra's beaches have long been important to local communities for fishing and traditional ceremonies. During colonial times, some beaches were segregated, with certain areas reserved for Europeans. After independence, beaches became fully accessible to all Ghanaians and have developed into important recreational spaces. Labadi Beach (officially La Pleasure Beach) emerged as a cultural hub in the 1970s and continues to host regular cultural performances. In recent years, efforts have increased to address coastal erosion and pollution affecting these important natural resources.",
		cultural_significance:
			"• Labadi Beach: The most popular beach with regular live music and horse riding\n• Kokrobite Beach: Known for its laid-back atmosphere and reggae culture\n• Bojo Beach: A serene island beach accessible by short boat ride\n• Tawala Beach: Quieter option with good swimming conditions\n• Local beach food including fresh grilled fish and coconut drinks",
		images: [
			"/placeholder.svg?height=400&width=600&query=Labadi+Beach+Accra+Ghana+people",
			"/placeholder.svg?height=400&width=600&query=Bojo+Beach+Accra+Ghana+boat",
		],
		location: {
			address: "Coastline",
			country: "Ghana",
			country_code: "GH",
			city: "Accra",
			longitude: -0.1664,
			latitude: 5.5526,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Generally accessible from sunrise to sunset, with some beaches like Labadi having controlled hours (8:00 AM to 6:00 PM)",
			entry_fee:
				"Varies by beach: Labadi (GH₵15-30), Bojo (GH₵15-25 including boat ride), others may be free or have minimal fees",
		},
	},
	{
		id: "11",
		slug: "tema-harbour",
		name: "Tema Harbour & Greenwich Meridian",
		category: "Infrastructure",
		overview:
			"Tema Harbour is Ghana's largest seaport and a vital economic hub handling the majority of the country's import and export trade. Visitors can observe massive cargo ships, fishing vessels, and port operations. Nearby, the Greenwich Meridian monument marks the 0° longitude line that passes through Ghana, offering the unique opportunity to stand in both the Eastern and Western hemispheres simultaneously.",
		history:
			"Tema was developed as a planned city and harbor in the 1950s under President Kwame Nkrumah's industrialization program. The port officially opened in 1962, replacing Accra's old harbor at Jamestown. The development of Tema was a significant post-independence project symbolizing Ghana's modernization and economic ambitions. The city was built around the harbor with industrial zones and residential areas for workers. The Greenwich Meridian monument was established to mark Ghana's position on the Prime Meridian, which passes through the country near Tema.",
		cultural_significance:
			"• Observation points to view the busy harbor operations\n• The Greenwich Meridian monument where visitors can stand in two hemispheres\n• Tema fishing harbor with traditional and modern fishing vessels\n• Industrial tours of selected port facilities (with advance permission)\n• Fresh seafood markets near the fishing harbor",
		images: [
			"/placeholder.svg?height=400&width=600&query=Tema+Harbour+Ghana+shipping+containers",
			"/placeholder.svg?height=400&width=600&query=Greenwich+Meridian+monument+Tema+Ghana",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Tema",
			longitude: 0.0,
			latitude: 5.6667,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Harbor viewpoints accessible daily; guided tours of port facilities require advance booking",
			entry_fee:
				"Free for general harbor views; guided tours may have fees",
		},
	},
	{
		id: "12",
		slug: "fort-prampram",
		name: "Fort Vernon (Prampram)",
		category: "Historical",
		overview:
			"Fort Vernon is a small historical fort located in the coastal town of Prampram, east of Accra. Built by the British in the 18th century, it served as a trading post and played a role in the transatlantic slave trade. Though smaller than the more famous castles, Fort Vernon offers visitors a less crowded opportunity to connect with Ghana's colonial past in an authentic coastal setting.",
		history:
			"Fort Vernon was constructed in 1742 by the British Royal African Company as a trading post for gold and later slaves. It was named after Admiral Edward Vernon of the British Navy. The fort changed hands several times during European colonial rivalries. Unlike the larger castles, Fort Vernon was primarily used as a defensive outpost and supply point rather than a major slave holding facility. After the abolition of the slave trade, it served various administrative functions during the colonial era. Today, though less preserved than other forts, it remains an important historical landmark.",
		cultural_significance:
			"• Well-preserved sections of the original fort structure\n• Panoramic views of the Gulf of Guinea coastline\n• Less crowded experience than the major castles\n• Authentic fishing village setting around the fort\n• Opportunity to learn about the smaller outposts of the colonial trading network",
		images: [
			"/placeholder.svg?height=400&width=600&query=Fort+Vernon+Prampram+Ghana+colonial",
			"/placeholder.svg?height=400&width=600&query=Prampram+coastal+fort+Ghana",
		],
		location: {
			address: "Prampram",
			country: "Ghana",
			country_code: "GH",
			city: "Greater Accra",
			longitude: 0.1,
			latitude: 5.7167,
			region: "Greater Accra",
		},
		visitingInformation: {
			opening_hours:
				"Daily from 9:00 AM to 5:00 PM (though hours can be irregular)",
			entry_fee: "GH₵10 for Ghanaians, GH₵20 for foreign visitors",
		},
	},

	// Central Region Attractions
	{
		id: "13",
		slug: "cape-coast-castle",
		name: "Cape Coast Castle",
		category: "Historical",
		overview:
			"Cape Coast Castle is one of Ghana's most significant historical sites and a UNESCO World Heritage monument. This imposing white fortress on the coast served as a major hub for the transatlantic slave trade. Today, it stands as a powerful memorial to this dark chapter of history and houses a museum that documents the slave trade and its impact on Ghana and the African diaspora.",
		history:
			"Originally built by the Swedes in 1653 as a trading post for timber and gold, the castle was later taken over by the British who expanded it into a major slave trading fortress. For over 150 years, it served as one of the largest slave-holding sites in the world, where countless Africans were imprisoned before being forced onto ships bound for the Americas. The castle also served as the British colonial headquarters in the Gold Coast (now Ghana) until 1877. Today, it is a pilgrimage site for people of African descent seeking to connect with their heritage.",
		cultural_significance:
			"• The infamous 'Door of No Return' through which enslaved Africans passed to board ships\n• The dungeons where enslaved people were held in horrific conditions\n• The governor's quarters, showing the stark contrast between European luxury and African suffering\n• The comprehensive museum with artifacts, documents, and exhibits on the slave trade\n• The castle's role in the broader history of European colonization in Africa\n• Panoramic views of the Gulf of Guinea from the upper levels",
		images: [
			"/images/cape-coast-castle-oceanview.webp",
			"/cape-coast-castle-interior.png",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Cape Coast",
			longitude: -1.2414,
			latitude: 5.1033,
			region: "Central",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 4:30 PM",
			entry_fee: "GH₵40 for Ghanaians, GH₵100 for foreign visitors",
		},
	},
	{
		id: "14",
		slug: "elmina-castle",
		name: "Elmina Castle (St. George's Castle)",
		category: "Historical",
		overview:
			"Elmina Castle, also known as St. George's Castle, is the oldest European building in sub-Saharan Africa and a UNESCO World Heritage Site. This massive white fortress on Ghana's coast was the first trading post built by Europeans in West Africa. Like Cape Coast Castle, it later became a key site in the transatlantic slave trade. Today, it serves as a museum and memorial to those who suffered during this dark period of history.",
		history:
			"Built by the Portuguese in 1482, Elmina Castle was originally established to protect the gold trade. The name 'Elmina' comes from the Portuguese 'la mina' meaning 'the mine,' referring to the gold resources. In 1637, the Dutch captured the castle and continued using it for gold trade before transitioning to slave trading. The castle remained under Dutch control until 1872 when it was transferred to the British. Throughout its history, the castle served as a commercial headquarters, military fortification, and administrative center for European powers in the region. After Ghana's independence, it was converted into a historical museum.",
		cultural_significance:
			"• The Portuguese church within the castle, later converted to a slave auction hall\n• The dungeons where enslaved Africans were imprisoned before deportation\n• The infamous 'Door of No Return'\n• The governor's quarters with views over the dungeons, symbolizing the power dynamics of colonialism\n• The museum with exhibits on the castle's history and the slave trade\n• Views of Elmina's colorful fishing harbor adjacent to the castle",
		images: [
			"/placeholder.svg?height=400&width=600&query=Elmina+Castle+Ghana+white+fortress",
			"/placeholder.svg?height=400&width=600&query=St+Georges+Castle+Elmina+Ghana+historical",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Elmina",
			longitude: -1.3485,
			latitude: 5.0847,
			region: "Central",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 4:30 PM",
			entry_fee: "GH₵40 for Ghanaians, GH₵100 for foreign visitors",
		},
	},
	{
		id: "15",
		slug: "fort-williams",
		name: "Fort William (Anomabu)",
		category: "Historical",
		overview:
			"Fort William in Anomabu is a well-preserved British colonial fort along Ghana's coast. Smaller than the major castles but historically significant, it offers visitors insight into the network of trading posts that dotted the Gold Coast during the colonial era. The fort's strategic location made it an important link in both the gold and slave trades.",
		history:
			"Fort William was built by the British between 1753 and 1760 after several previous structures at the site were destroyed during conflicts with local powers and European rivals. Named after Prince William, Duke of Cumberland, the fort served as a commercial outpost for the British Royal African Company. Anomabu was one of the largest slave-trading centers on the Gold Coast, and many thousands of enslaved Africans passed through this fort. After the abolition of the slave trade, the fort served various administrative and military functions during the colonial period. Today, it stands as a reminder of the extensive European presence along Ghana's coast.",
		cultural_significance:
			"• Well-preserved military architecture with cannons still in place\n• Dungeons where enslaved Africans were held\n• Views of Anomabu fishing village and the coastline\n• Less crowded experience than the major castles\n• Connection to the broader network of forts and castles along Ghana's coast",
		images: [
			"/placeholder.svg?height=400&width=600&query=Fort+William+Anomabu+Ghana+colonial",
			"/placeholder.svg?height=400&width=600&query=Anomabu+Fort+Ghana+historical",
		],
		location: {
			address: "Anomabu",
			country: "Ghana",
			country_code: "GH",
			city: "Central Region",
			longitude: -1.1167,
			latitude: 5.17,
			region: "Central",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 4:00 PM",
			entry_fee: "GH₵20 for Ghanaians, GH₵40 for foreign visitors",
		},
	},
	{
		id: "16",
		slug: "fort-st-jago",
		name: "Fort St. Jago (Fort Conraadsburg)",
		category: "Historical",
		overview:
			"Fort St. Jago sits on a hill overlooking Elmina Castle and the town of Elmina. Originally built by the Portuguese and later expanded by the Dutch, this fort served primarily as a military installation to protect Elmina Castle from inland attacks. Today, it offers visitors spectacular panoramic views of the coast and insight into the military aspects of European colonization.",
		history:
			"Fort St. Jago was initially constructed by the Portuguese in the 1550s as a chapel on the hill. After the Dutch captured Elmina in 1637, they recognized the strategic importance of the hill and built a proper fort on the site in 1652, naming it Fort Conraadsburg after a Dutch governor. The fort played a crucial role in the Dutch capture of Elmina Castle, as they used this elevated position to bombard the Portuguese below. Throughout its history, the fort served primarily as a military observation post and defensive structure rather than a commercial center. After Ghana's independence, it was converted into a rest house before being restored as a historical site.",
		cultural_significance:
			"• Panoramic views of Elmina Castle, the fishing harbor, and the Gulf of Guinea\n• Military architecture designed for defense and observation\n• Less commercialized and more peaceful atmosphere than the larger castles\n• Understanding of the strategic military thinking behind colonial installations\n• Opportunity to see the relationship between different colonial structures in the area",
		images: [
			"/placeholder.svg?height=400&width=600&query=Fort+St+Jago+Elmina+Ghana+hilltop",
			"/placeholder.svg?height=400&width=600&query=Fort+Conraadsburg+Ghana+view",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Elmina",
			longitude: -1.35,
			latitude: 5.0833,
			region: "Central",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 4:30 PM",
			entry_fee: "GH₵15 for Ghanaians, GH₵30 for foreign visitors",
		},
	},
	{
		id: "17",
		slug: "kakum-national-park",
		name: "Kakum National Park",
		category: "Nature",
		overview:
			"Kakum National Park is a tropical rainforest reserve that protects rare and endangered species of flora and fauna. The park is famous for its canopy walkway, suspended 30 meters above the forest floor, offering visitors a unique perspective of the rainforest ecosystem. With diverse wildlife, bird species, and plant life, Kakum provides both adventure and educational experiences about Ghana's natural heritage.",
		history:
			"The area that is now Kakum National Park was traditionally used by local communities for hunting and gathering forest products. Recognizing the need to protect Ghana's diminishing rainforest, the government established Kakum as a national park in 1992. The iconic canopy walkway was built in 1995 as a collaborative project between local and international conservation organizations. It was designed to provide a non-invasive way for visitors to experience the forest canopy while generating tourism revenue for conservation efforts. The park represents Ghana's commitment to preserving its natural resources while making them accessible for education and ecotourism.",
		cultural_significance:
			"• The famous canopy walkway consisting of seven bridges suspended 30 meters above the forest floor\n• Over 250 bird species, making it a premier birdwatching destination\n• Rare forest elephants, though they are seldom seen by visitors\n• Diverse butterfly species and other insects\n• Guided nature walks with knowledgeable rangers explaining the ecosystem\n• Visitor center with educational exhibits about rainforest conservation",
		images: [
			"/placeholder.svg?height=400&width=600&query=Kakum+National+Park+canopy+walkway+Ghana",
			"/placeholder.svg?height=400&width=600&query=Kakum+rainforest+Ghana+tropical",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Central Region",
			longitude: -1.3833,
			latitude: 5.3833,
			region: "Central",
		},
		visitingInformation: {
			opening_hours:
				"Daily from 8:30 AM to 3:30 PM (last canopy walk at 3:30 PM)",
			entry_fee:
				"GH₵60 for Ghanaians, GH₵150 for foreign visitors (includes canopy walkway)",
		},
	},
	{
		id: "18",
		slug: "assin-manso-slave-river",
		name: "Assin Manso Slave River",
		category: "Historical",
		overview:
			"Assin Manso Slave River, known as 'Ndonkor Nsuo' (Slave River), is a sacred site where enslaved Africans took their last bath before being taken to the coastal castles for deportation. Today, it serves as a memorial and spiritual pilgrimage site, especially for people of African descent seeking connection with their ancestral heritage. The site includes a river, memorial wall, and burial grounds for repatriated remains.",
		history:
			"During the transatlantic slave trade, Assin Manso was a key market and transit point where enslaved Africans from the interior were gathered before the final march to the coast. The river became known as the 'Last Bath' as captives were forced to bathe here before being presented to European buyers. In 1998, the remains of two former slaves from the Americas were repatriated and buried at Assin Manso, establishing it as a symbolic homecoming site. The 'Wall of Return' was created as a counterpoint to the 'Door of No Return' at the coastal castles, symbolizing the spiritual and physical return of the African diaspora to their ancestral homeland.",
		cultural_significance:
			"• The sacred river where enslaved Africans took their final bath in their homeland\n• The 'Wall of Return' where visitors can record their names as a symbol of reconnection\n• The Memorial Garden with burial sites of repatriated remains\n• Museum with exhibits on the slave trade and its routes through Ghana\n• Opportunity for reflection and commemorative ceremonies\n• Connection to the broader slave route that ran from northern Ghana to the coast",
		images: [
			"/placeholder.svg?height=400&width=600&query=Assin+Manso+Slave+River+Ghana+memorial",
			"/placeholder.svg?height=400&width=600&query=Slave+River+Ghana+historical+site",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Assin Manso",
			longitude: -1.2333,
			latitude: 5.5167,
			region: "Central",
		},
		visitingInformation: {
			opening_hours: "Daily from 9:00 AM to 5:00 PM",
			entry_fee: "GH₵20 for Ghanaians, GH₵40 for foreign visitors",
		},
	},

	// Eastern Region Attractions
	{
		id: "19",
		slug: "aburi-botanical-gardens",
		name: "Aburi Botanical Gardens",
		category: "Nature",
		overview:
			"Aburi Botanical Gardens is Ghana's premier botanical garden, established in 1890 and located in the cool, mountainous Akuapem Hills. The 64.8-hectare garden houses over 600 plant species from around the world, including rare indigenous Ghanaian plants, exotic tropical species, and medicinal plants. The gardens offer a peaceful retreat from the heat and humidity of Accra, with well-maintained walking trails, picnic areas, and stunning views of the surrounding hills.",
		history:
			"The Aburi Botanical Gardens was established in 1890 by the British colonial administration as an agricultural research station and botanical garden. The site was chosen for its favorable climate in the Akuapem Hills, which provided cooler temperatures suitable for growing both tropical and temperate plants. During the colonial period, the gardens served as a testing ground for cash crops like cocoa, coffee, and various fruits that could be introduced to Ghana's agricultural sector. After independence, the gardens continued to serve research and educational purposes while also becoming a popular recreational destination.",
		cultural_significance:
			"• Over 600 plant species including rare indigenous and exotic varieties\n• Palm Avenue lined with royal palms creating a stunning natural corridor\n• Medicinal plants section showcasing traditional Ghanaian healing plants\n• Cool mountain climate providing relief from coastal heat\n• Picnic areas and well-maintained walking trails\n• Beautiful views of the Akuapem Hills and surrounding valleys",
		images: [
			"/placeholder.svg?height=400&width=600&query=Aburi+Botanical+Gardens+Ghana+palm+avenue",
			"/placeholder.svg?height=400&width=600&query=Aburi+Gardens+Eastern+Region+Ghana",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Aburi",
			longitude: -0.1833,
			latitude: 5.8667,
			region: "Eastern",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 6:00 PM",
			entry_fee: "GH₵20 for Ghanaians, GH₵40 for foreign visitors",
		},
	},
	{
		id: "20",
		slug: "boti-falls",
		name: "Boti Falls",
		category: "Waterfall",
		overview:
			"Boti Falls is a spectacular twin waterfall located in the Yilo Krobo District of the Eastern Region. The falls cascade down from a height of about 30 meters, creating two separate streams that flow into a large pool below. Surrounded by lush forest and rocky outcrops, Boti Falls is considered one of Ghana's most beautiful waterfalls and holds significant cultural and spiritual importance for local communities.",
		history:
			"Boti Falls has been known to local communities for centuries and holds deep spiritual significance in traditional Ghanaian beliefs. The waterfall is associated with local deities and is considered a sacred site where traditional priests and priestesses perform rituals and ceremonies. During the colonial period, the falls became known to European administrators and missionaries. In recent decades, it has been developed as an ecotourism destination while efforts are made to preserve its cultural significance and natural environment.",
		cultural_significance:
			"• Twin waterfalls creating a spectacular natural display\n• Natural swimming pool at the base of the falls\n• Surrounding forest with diverse flora and fauna\n• Caves and rock formations around the waterfall area\n• Traditional cultural significance and occasional ceremonies\n• Hiking trails through the forest to reach the falls",
		images: [
			"/placeholder.svg?height=400&width=600&query=Boti+Falls+twin+waterfall+Ghana",
			"/placeholder.svg?height=400&width=600&query=Boti+Falls+Eastern+Region+forest",
		],
		location: {
			address: "Yilo Krobo District",
			country: "Ghana",
			country_code: "GH",
			city: "Eastern Region",
			longitude: 0.05,
			latitude: 6.1833,
			region: "Eastern",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 5:00 PM",
			entry_fee: "GH₵15 for Ghanaians, GH₵30 for foreign visitors",
		},
	},

	// Volta Region Attractions
	{
		id: "21",
		slug: "wli-waterfalls",
		name: "Wli Waterfalls",
		category: "Waterfall",
		overview:
			"Wli Waterfalls is Ghana's highest waterfall, cascading down from a height of approximately 60 meters in the Agumatsa Wildlife Sanctuary. Located near the border with Togo, this stunning waterfall is surrounded by lush tropical rainforest and offers visitors the chance to swim in its refreshing pool while observing various wildlife species including fruit bats and numerous bird species.",
		history:
			"The Wli Waterfalls area has been inhabited by the Ewe people for centuries, who consider the waterfall and surrounding forest sacred. The name 'Wli' (pronounced 'Vlee') means 'to fall down' in the local Ewe language. The area was designated as the Agumatsa Wildlife Sanctuary to protect both the waterfall and the diverse ecosystem that surrounds it. In recent years, community-based ecotourism initiatives have been developed to provide sustainable livelihoods for local communities while preserving the natural environment.",
		cultural_significance:
			"• Ghana's highest waterfall at approximately 60 meters\n• Large colony of fruit bats that can be observed in the caves behind the falls\n• Swimming in the natural pool at the base of the waterfall\n• Hiking trails through pristine tropical rainforest\n• Rich biodiversity with numerous bird species and butterflies\n• Cultural interactions with local Ewe communities",
		images: [
			"/placeholder.svg?height=400&width=600&query=Wli+Waterfalls+Ghana+highest+waterfall",
			"/placeholder.svg?height=400&width=600&query=Wli+Falls+Volta+Region+fruit+bats",
		],
		location: {
			address: "Agumatsa Wildlife Sanctuary",
			country: "Ghana",
			country_code: "GH",
			city: "Volta Region",
			longitude: 0.6,
			latitude: 7.1333,
			region: "Volta",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 5:00 PM",
			entry_fee: "GH₵25 for Ghanaians, GH₵50 for foreign visitors",
		},
	},
	{
		id: "22",
		slug: "mount-afajato",
		name: "Mount Afajato",
		category: "Mountain",
		overview:
			"Mount Afajato is Ghana's highest mountain, standing at 885 meters above sea level. Located near the border with Togo, this mountain offers challenging hiking trails and breathtaking panoramic views of the surrounding Volta Region landscape. The mountain is part of the Agumatsa Range and is covered with lush forest that supports diverse wildlife and plant species.",
		history:
			"Mount Afajato has been a landmark for the Ewe people of the region for generations. The name 'Afajato' is derived from the Ewe language, meaning 'at war with the bush,' referring to the challenging climb through dense forest to reach the summit. During the colonial period, the mountain served as a natural boundary marker. Today, it has become an important destination for eco-tourism and adventure tourism in Ghana, with local communities serving as guides and benefiting from tourism activities.",
		cultural_significance:
			"• Ghana's highest peak at 885 meters above sea level\n• Panoramic views of Ghana and Togo from the summit\n• Challenging hiking trails through tropical forest\n• Rich biodiversity with unique mountain flora and fauna\n• Butterfly sanctuary with over 350 species\n• Traditional Ewe villages along the hiking route",
		images: [
			"/placeholder.svg?height=400&width=600&query=Mount+Afajato+Ghana+highest+mountain",
			"/placeholder.svg?height=400&width=600&query=Mount+Afajato+summit+view+Volta+Region",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Volta Region",
			longitude: 0.6,
			latitude: 7.0167,
			region: "Volta",
		},
		visitingInformation: {
			opening_hours:
				"Daily from 6:00 AM to 6:00 PM (hiking recommended to start early)",
			entry_fee: "GH₵30 for Ghanaians, GH₵60 for foreign visitors",
		},
	},
	{
		id: "23",
		slug: "lake-volta",
		name: "Lake Volta",
		category: "Lake",
		overview:
			"Lake Volta is one of the world's largest artificial lakes, created by the construction of the Akosombo Dam in 1965. Covering approximately 8,502 square kilometers, the lake serves multiple purposes including hydroelectric power generation, fishing, and transportation. The lake offers various recreational activities and scenic boat cruises, while also being home to numerous islands and fishing communities.",
		history:
			"Lake Volta was created as part of the Volta River Project, a major infrastructure development initiated by Ghana's first president, Kwame Nkrumah, in the 1960s. The Akosombo Dam was constructed between 1961 and 1965, flooding a vast area and displacing approximately 80,000 people who were resettled in new communities. The project was designed to provide hydroelectric power for Ghana's industrialization and to support the aluminum smelting industry. Today, the lake continues to be a crucial source of electricity for Ghana and neighboring countries.",
		cultural_significance:
			"• One of the world's largest artificial lakes\n• Scenic boat cruises and ferry rides\n• Numerous islands with fishing communities\n• Dodi Island with its pristine beaches and wildlife\n• Akosombo Dam and hydroelectric power station tours\n• Fishing and water sports activities",
		images: [
			"/placeholder.svg?height=400&width=600&query=Lake+Volta+Ghana+largest+artificial+lake",
			"/placeholder.svg?height=400&width=600&query=Lake+Volta+boat+cruise+Akosombo",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Volta Region",
			longitude: 0.05,
			latitude: 6.3,
			region: "Volta",
		},
		visitingInformation: {
			opening_hours:
				"Lake accessible 24/7; boat tours typically 8:00 AM to 5:00 PM",
			entry_fee: "Varies by activity and operator",
		},
	},

	// Ashanti Region Attractions
	{
		id: "24",
		slug: "manhyia-palace",
		name: "Manhyia Palace Museum",
		category: "Historical",
		overview:
			"The Manhyia Palace Museum is the former official residence of the Asantehene (King of the Ashanti people) and now serves as a museum showcasing the rich history and culture of the Ashanti Kingdom. The museum displays royal regalia, historical artifacts, and tells the story of one of Africa's most powerful and sophisticated pre-colonial kingdoms.",
		history:
			"The original Manhyia Palace was built in 1925 by the British colonial administration as the official residence of the Asantehene after the return of King Prempeh I from exile. The current palace, built in 1995, serves as the residence of the current Asantehene, while the old palace was converted into a museum in 1995. The Ashanti Kingdom, with its capital in Kumasi, was one of the most powerful states in West Africa and successfully resisted British colonization for many years before being incorporated into the Gold Coast colony in 1902.",
		cultural_significance:
			"• Royal regalia including the famous Golden Stool replicas\n• Historical artifacts from the Ashanti Kingdom\n• Throne room and royal chambers\n• Exhibitions on Ashanti culture, traditions, and governance\n• Guided tours explaining the history of the Ashanti people\n• Beautiful architecture blending traditional and modern elements",
		images: [
			"/placeholder.svg?height=400&width=600&query=Manhyia+Palace+Museum+Kumasi+Ghana",
			"/placeholder.svg?height=400&width=600&query=Ashanti+royal+regalia+Golden+Stool",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Kumasi",
			longitude: -1.6167,
			latitude: 6.6833,
			region: "Ashanti",
		},
		visitingInformation: {
			opening_hours:
				"Monday to Saturday, 9:00 AM to 4:00 PM (Closed on Sundays)",
			entry_fee: "GH₵30 for Ghanaians, GH₵60 for foreign visitors",
		},
	},
	{
		id: "25",
		slug: "kumasi-cultural-center",
		name: "Kumasi Cultural Centre",
		category: "Cultural",
		overview:
			"The Kumasi Cultural Centre is a vibrant hub showcasing Ashanti arts, crafts, and cultural traditions. The center features a large craft market, museums, galleries, and performance spaces where visitors can experience the rich cultural heritage of the Ashanti people, including traditional music, dance, and craft-making demonstrations.",
		history:
			"The Kumasi Cultural Centre was established as part of Ghana's post-independence cultural policy to preserve and promote indigenous arts and culture. As the heart of the Ashanti Region, Kumasi has always been a center for traditional crafts, particularly Kente weaving, wood carving, and metalworking. The cultural center was developed to provide a dedicated space for artisans to work, display their crafts, and pass on traditional skills to younger generations.",
		cultural_significance:
			"• Large craft market with authentic Ashanti handicrafts\n• Kente weaving demonstrations by master weavers\n• Traditional music and dance performances\n• Wood carving workshops and exhibitions\n• Adinkra cloth printing demonstrations\n• Museum of Ashanti cultural artifacts",
		images: [
			"/placeholder.svg?height=400&width=600&query=Kumasi+Cultural+Centre+Kente+weaving",
			"/placeholder.svg?height=400&width=600&query=Ashanti+crafts+Kumasi+Ghana",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Kumasi",
			longitude: -1.6167,
			latitude: 6.6833,
			region: "Ashanti",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 6:00 PM",
			entry_fee:
				"Free entry to market; additional fees for workshops and performances",
		},
	},

	// Northern Region Attractions
	{
		id: "26",
		slug: "mole-national-park",
		name: "Mole National Park",
		category: "Wildlife",
		overview:
			"Mole National Park is Ghana's largest wildlife reserve, covering 4,577 square kilometers of pristine savanna landscape in the Northern Region. The park is home to over 93 mammal species and 300+ bird species, including elephants, buffalo, warthogs, various antelope species, and numerous predators. It offers excellent game viewing opportunities and is considered Ghana's premier safari destination.",
		history:
			"Mole National Park was established in 1958 as a wildlife reserve and upgraded to national park status in 1971. The area was traditionally used by local communities for hunting and farming, but was designated as a protected area to conserve Ghana's wildlife heritage. The park has faced challenges including poaching and human-wildlife conflict, but conservation efforts and community involvement have helped protect its diverse ecosystems and wildlife populations.",
		cultural_significance:
			"• Over 93 mammal species including elephants and buffalo\n• Game drives and walking safaris with experienced guides\n• Mole River and waterholes attracting diverse wildlife\n• Over 300 bird species making it a birder's paradise\n• Overnight camping and lodge accommodation\n• Cultural interactions with local communities",
		images: [
			"/images/mole-national-park-elephant.jpg",
			"/placeholder.svg?height=400&width=600&query=Mole+National+Park+savanna+wildlife",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Mole",
			longitude: -1.85,
			latitude: 9.3,
			region: "Northern",
		},
		visitingInformation: {
			opening_hours: "Daily from 6:00 AM to 6:00 PM",
			entry_fee: "GH₵40 for Ghanaians, GH₵100 for foreign visitors",
		},
	},
	{
		id: "27",
		slug: "larabanga-mosque",
		name: "Larabanga Mosque",
		category: "Religious",
		overview:
			"The Larabanga Mosque is one of the oldest mosques in West Africa, dating back to the 15th century. Built in the traditional Sudano-Sahelian architectural style with mud and timber, this historic mosque serves as an important center of Islamic learning and worship. The mosque and surrounding village of Larabanga offer insight into the spread of Islam in West Africa and traditional Sudanese architecture.",
		history:
			"The Larabanga Mosque was built in 1421 by an Islamic trader named Ayuba, who was traveling through the area and decided to settle in Larabanga. According to local tradition, the location was chosen after Ayuba's prayer mat miraculously moved to the site during his prayers. The mosque has been continuously maintained and renovated by the local community using traditional building techniques and materials. It represents the early spread of Islam along trans-Saharan trade routes and serves as a center for Islamic education in the region.",
		cultural_significance:
			"• One of West Africa's oldest mosques dating to the 15th century\n• Traditional Sudano-Sahelian mud and timber architecture\n• Ancient Quran manuscripts and Islamic artifacts\n• Traditional Islamic learning center\n• Cultural significance in the spread of Islam in West Africa\n• Nearby sacred Mystic Stone with local legends",
		images: [
			"/placeholder.svg?height=400&width=600&query=Larabanga+Mosque+Ghana+oldest+West+Africa",
			"/placeholder.svg?height=400&width=600&query=Sudano+Sahelian+architecture+Larabanga",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Larabanga",
			longitude: -1.8333,
			latitude: 9.2167,
			region: "Northern",
		},
		visitingInformation: {
			opening_hours:
				"Daily from 8:00 AM to 5:00 PM (outside prayer times)",
			entry_fee: "GH₵10 for Ghanaians, GH₵20 for foreign visitors",
		},
	},

	// Western Region Attractions
	{
		id: "28",
		slug: "nzulezo-stilt-village",
		name: "Nzulezo Stilt Village",
		category: "Cultural",
		overview:
			"Nzulezo is a unique stilt village built entirely over Lake Tadane in Ghana's Western Region. This UNESCO World Heritage site is home to about 500 people who live in houses constructed on wooden stilts above the water. The village offers a fascinating glimpse into a traditional way of life that has adapted to the wetland environment over several centuries.",
		history:
			"According to oral tradition, the ancestors of Nzulezo's current inhabitants migrated from present-day Côte d'Ivoire in the 16th century, following a snail that led them to this location over the lake. The name 'Nzulezo' means 'surface of water' in the local Nzema language. The village has maintained its traditional lifestyle and governance structures while adapting to modern challenges. In 2000, Nzulezo was inscribed on UNESCO's World Heritage Tentative List in recognition of its unique cultural and architectural significance.",
		cultural_significance:
			"• Unique stilt village built entirely over a lake\n• Traditional houses constructed with local materials\n• Canoe transportation to and within the village\n• Traditional fishing and farming practices\n• Cultural performances and storytelling\n• Peaceful lake environment with diverse birdlife",
		images: [
			"/placeholder.svg?height=400&width=600&query=Nzulezo+stilt+village+Ghana+lake",
			"/placeholder.svg?height=400&width=600&query=Nzulezo+traditional+houses+stilts",
		],
		location: {
			address: "Lake Tadane",
			country: "Ghana",
			country_code: "GH",
			city: "Nzulezo",
			longitude: -2.5,
			latitude: 5.1,
			region: "Western",
		},
		visitingInformation: {
			opening_hours:
				"Daily from 8:00 AM to 5:00 PM (canoe trips required)",
			entry_fee:
				"GH₵50 for Ghanaians, GH₵100 for foreign visitors (includes canoe ride)",
		},
	},
	{
		id: "29",
		slug: "ankasa-national-park",
		name: "Ankasa National Park",
		category: "Rainforest",
		overview:
			"Ankasa National Park is part of Ghana's largest remaining tropical rainforest, covering 500 square kilometers in the Western Region. The park protects part of the Upper Guinea Forest ecosystem and is home to diverse wildlife including forest elephants, bongo antelope, and over 190 bird species. It offers excellent opportunities for forest walks, canopy viewing, and experiencing pristine rainforest ecology.",
		history:
			"Ankasa was originally established as a forest reserve in 1976 and was upgraded to national park status in 2000 to provide greater protection for its unique ecosystem. The park is part of a larger forest block that extends into Côte d'Ivoire, forming a transboundary conservation area. Local communities have traditional connections to the forest and continue to use some areas for sustainable resource collection under park management guidelines.",
		cultural_significance:
			"• Pristine tropical rainforest with ancient trees\n• Diverse wildlife including forest elephants and bongo\n• Over 190 bird species including several endemics\n• Canopy walkway offering views of the forest canopy\n• Butterfly watching with numerous colorful species\n• Research station and educational facilities",
		images: [
			"/placeholder.svg?height=400&width=600&query=Ankasa+National+Park+rainforest+Ghana",
			"/placeholder.svg?height=400&width=600&query=Ankasa+canopy+walkway+forest",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Ankasa",
			longitude: -2.65,
			latitude: 5.2667,
			region: "Western",
		},
		visitingInformation: {
			opening_hours: "Daily from 6:00 AM to 6:00 PM",
			entry_fee: "GH₵30 for Ghanaians, GH₵80 for foreign visitors",
		},
	},

	// Upper East Region Attractions
	{
		id: "30",
		slug: "paga-crocodile-pond",
		name: "Paga Crocodile Ponds",
		category: "Wildlife",
		overview:
			"The Paga Crocodile Ponds are a series of sacred ponds in the town of Paga where Nile crocodiles live in harmony with the local community. According to local beliefs, the crocodiles are reincarnated souls of ancestors and are considered sacred. Visitors can safely interact with these normally dangerous reptiles, including touching and sitting near them, under the guidance of local pond keepers.",
		history:
			"The relationship between the people of Paga and the crocodiles dates back over 600 years, according to local oral tradition. Legend tells of a man who was saved by a crocodile while fleeing from enemies, and in gratitude, his descendants have protected the crocodiles ever since. The ponds have become a symbol of the harmonious relationship between humans and nature in traditional African culture. The site has gained international recognition as a unique example of human-wildlife coexistence.",
		cultural_significance:
			"• Sacred crocodiles that coexist peacefully with humans\n• Opportunity to touch and sit near live crocodiles safely\n• Traditional beliefs and stories about human-crocodile relationships\n• Cultural significance in local traditional practices\n• Photography opportunities with the crocodiles\n• Insight into traditional conservation practices",
		images: [
			"/placeholder.svg?height=400&width=600&query=Paga+crocodile+ponds+Ghana+sacred",
			"/placeholder.svg?height=400&width=600&query=Paga+crocodiles+human+interaction",
		],
		location: {
			address: "",
			country: "Ghana",
			country_code: "GH",
			city: "Paga",
			longitude: -1.1167,
			latitude: 10.9833,
			region: "Upper East",
		},
		visitingInformation: {
			opening_hours: "Daily from 8:00 AM to 5:00 PM",
			entry_fee: "GH₵20 for Ghanaians, GH₵40 for foreign visitors",
		},
	},
];

// Helper functions
export function getAllAttractions() {
	return attractions;
}

export function getAttractionById(id: string) {
	return attractions.find((attraction) => attraction.id === id);
}

export function getAttractionsByIds(ids: string[]) {
	return attractions.filter((attraction) => ids.includes(attraction.id));
}

export function getAttractionsByRegion(region: string) {
	return attractions.filter(
		(attraction) =>
			attraction.location.region.toLowerCase() === region.toLowerCase()
	);
}

export function searchAttractions(query: string) {
	if (!query) return [];

	const normalizedQuery = query.toLowerCase();

	return attractions.filter((attraction) => {
		return (
			attraction.name.toLowerCase().includes(normalizedQuery) ||
			attraction.overview.toLowerCase().includes(normalizedQuery) ||
			attraction.location.region
				.toLowerCase()
				.includes(normalizedQuery) ||
			attraction.category.toLowerCase().includes(normalizedQuery)
		);
	});
}

export function getAllCategories() {
	const categories = new Set<string>();
	attractions.forEach((attraction) => {
		categories.add(attraction.category);
	});
	return Array.from(categories).sort();
}

export function getAllRegions() {
	const regions = new Set<string>();
	attractions.forEach((attraction) => {
		regions.add(attraction.location.region);
	});
	return Array.from(regions).sort();
}
