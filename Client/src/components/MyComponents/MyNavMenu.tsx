import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

export default function MyNavMenu() {
  return (
    <>
        <NavigationMenu>
             <NavigationMenuList> 
                <NavigationMenuItem>
                        <Link to="home" className="px-4 py-2">
                            Home
                        </Link>
                </NavigationMenuItem>
            </NavigationMenuList> 
        </NavigationMenu>

        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Drivers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Teams</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Tracks</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
             <NavigationMenuList> 
                <NavigationMenuItem>
                        <Link to="shop" className="px-4 py-2">
                            Shop
                        </Link>
                </NavigationMenuItem>
            </NavigationMenuList> 
        </NavigationMenu>

        <NavigationMenu>
             <NavigationMenuList> 
                <NavigationMenuItem>
                        <Link to="tickets" className="px-4 py-2">
                            Tickets
                        </Link>
                </NavigationMenuItem>
            </NavigationMenuList> 
        </NavigationMenu>
    </>
  )
}
