import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

import ResponseDTO from "../../DTOs/ResponseDTO";
// import DriverDTO from "../../DTOs/Driver/DriverDTO";
import DriverNavMenuDTO from "../../DTOs/Driver/DriverNavMenuDTO";

const allDriversResponse = await GetAllDrivers();
const drivers: DriverNavMenuDTO[] = allDriversResponse.result!.map((d: any) => ({
        id: d.id,
        fullName: d.fullName, 
        teamColor: d.teamColor
    }));

console.log("Drivers", drivers);


export default function MyNavMenu() {
  return (
    <>
        <NavigationMenu>
             <NavigationMenuList> 
                {/* <NavigationMenuLink> */}    
                        <Link to="home" className="px-4 py-2">
                            Home
                        </Link>
                {/* </NavigationMenuLink> */}
            </NavigationMenuList> 
        </NavigationMenu>

        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Drivers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" w-[800px] grid grid-cols-4 gap-4 list-none">
                                {
                                    drivers.map(d => 
                                        <li key={d.id}>
                                            <div className={`w-5 h-5 bg-[#${d.teamColor}]`}></div>
                                            <Link to={`/drivers/${d.fullName}`}>
                                                {d.fullName}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Teams</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="w-[400px] grid grid-cols-4 gap-4 list-none">
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, hic.</li>
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="!bg-primary">
                    <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-accent focus:!text-background">Tracks</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-[400px] grid grid-cols-4 gap-4 list-none">
                                <li>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                        <Link to="shop" className="px-4 py-2">
                            Shop
                        </Link>
                </NavigationMenuItem>
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


async function GetAllDrivers() {
    const promise = await fetch("https://localhost:7001/Drivers/All");
    const data: ResponseDTO = await promise.json();

    console.log(data);
    console.log(data.result);

    return data;
}