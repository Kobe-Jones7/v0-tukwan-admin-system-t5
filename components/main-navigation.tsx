import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                    href="/packages"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">Tour Packages</div>
                    <p className="text-sm leading-tight text-white/90">
                      Discover curated travel experiences across Ghana
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/attractions" title="Attractions">
                Explore Ghana's historical sites, natural wonders, and cultural landmarks
              </ListItem>
              <ListItem href="/marketplace" title="Marketplace">
                Shop authentic African arts, crafts, and cultural items
              </ListItem>
              <ListItem href="/vooya-wallet" title="Vooya Wallet">
                Your digital wallet for seamless travel payments and rewards
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/attractions?region=Greater+Accra" title="Greater Accra">
                Explore the vibrant capital region with historical sites and urban attractions
              </ListItem>
              <ListItem href="/attractions?region=Central" title="Central Region">
                Discover coastal castles, rainforests, and cultural heritage
              </ListItem>
              <ListItem href="/attractions?region=Eastern" title="Eastern Region">
                Experience waterfalls, mountains, and traditional crafts
              </ListItem>
              <ListItem href="/attractions?region=Ashanti" title="Ashanti Region">
                Visit the cultural heart of Ghana with rich traditions and history
              </ListItem>
              <ListItem href="/attractions?region=Northern" title="Northern Region">
                Explore wildlife, traditional villages, and unique landscapes
              </ListItem>
              <ListItem href="/attractions?region=Volta" title="Volta Region">
                Discover mountains, lakes, and diverse cultural experiences
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/attractions?category=Historical" title="Historical Sites">
                Castles, forts, and monuments showcasing Ghana's rich history
              </ListItem>
              <ListItem href="/attractions?category=Nature" title="Natural Wonders">
                National parks, waterfalls, mountains, and wildlife
              </ListItem>
              <ListItem href="/attractions?category=Cultural" title="Cultural Experiences">
                Museums, cultural centers, and traditional villages
              </ListItem>
              <ListItem href="/attractions?category=Beach" title="Beaches">
                Beautiful coastal destinations for relaxation and water activities
              </ListItem>
              <ListItem href="/attractions?category=Religious" title="Religious Sites">
                Mosques, churches, and traditional spiritual locations
              </ListItem>
              <ListItem href="/attractions?category=Market" title="Markets">
                Vibrant markets showcasing local crafts, food, and daily life
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
