import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"

export default function Template()
{
    return(
        <div className="h-dvh w-full grid grid-cols-12  ">

             <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
                <NavbarSide />
             </div>
             <div className="bg-gray-800 col-span-12 md:col-span-9 ">

             </div>

            <NavbarBottom />
        </div>
    )
}