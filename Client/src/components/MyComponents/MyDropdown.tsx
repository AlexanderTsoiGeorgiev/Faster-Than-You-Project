import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Link } from "react-router-dom";
  
export default function MyDropdown() {
  return (
    <>
        <DropdownMenu>
                    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                    <Link to="/Home">
                                      <DropdownMenuItem>Profile</DropdownMenuItem>
                                    </Link>
                        </DropdownMenuContent>
        </DropdownMenu>
    </>
  )
}
