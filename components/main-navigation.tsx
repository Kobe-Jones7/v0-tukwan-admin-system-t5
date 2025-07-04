"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 px-4 py-2 hover:bg-accent data-[state=open]:bg-accent/50 transition-colors">
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-700/20 p-6 no-underline outline-none focus:shadow-md"
                    href="/packages"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Tour Packages</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover curated travel experiences across Ghana
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/attractions" title="Attractions">
                Explore Ghana's most beautiful destinations
              </ListItem>
              <ListItem href="/marketplace" title="Marketplace">
                Shop authentic Ghanaian crafts and souvenirs
              </ListItem>
              <ListItem href="/vooya-wallet" title="Vooya Wallet">
                Secure digital wallet for seamless payments
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 px-4 py-2 hover:bg-accent data-[state=open]:bg-accent/50 transition-colors">
            Destinations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/discover-ghana?region=greater-accra" title="Greater Accra">
                Capital region with vibrant city life and beaches
              </ListItem>
              <ListItem href="/discover-ghana?region=central" title="Central Region">
                Historic castles and coastal attractions
              </ListItem>
              <ListItem href="/discover-ghana?region=eastern" title="Eastern Region">
                Mountains, waterfalls, and natural beauty
              </ListItem>
              <ListItem href="/discover-ghana?region=ashanti" title="Ashanti Region">
                Cultural heart of Ghana with royal heritage
              </ListItem>
              <ListItem href="/discover-ghana?region=northern" title="Northern Region">
                Wildlife parks and traditional architecture
              </ListItem>
              <ListItem href="/discover-ghana?region=volta" title="Volta Region">
                Lake Volta and scenic landscapes
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 px-4 py-2 hover:bg-accent data-[state=open]:bg-accent/50 transition-colors">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/attractions?category=historical" title="Historical Sites">
                Castles, forts, and heritage locations
              </ListItem>
              <ListItem href="/attractions?category=natural" title="Natural Wonders">
                Parks, waterfalls, and scenic landscapes
              </ListItem>
              <ListItem href="/attractions?category=cultural" title="Cultural Experiences">
                Traditional festivals and local customs
              </ListItem>
              <ListItem href="/attractions?category=beaches" title="Beaches">
                Coastal destinations and beach resorts
              </ListItem>
              <ListItem href="/attractions?category=religious" title="Religious Sites">
                Churches, mosques, and spiritual locations
              </ListItem>
              <ListItem href="/attractions?category=markets" title="Markets">
                Local markets and shopping experiences
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
