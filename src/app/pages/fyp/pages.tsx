import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default function Fyp()
{
    

    return (
    <div>
        <Carousel axis="vertical" infiniteLoop  showIndicators={false} showStatus={false}> 
                 <div>
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/profile_picture.webp" alt="" />
                     </div>
                 </div>
                 <div>
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/caraass.jpg" alt="" />
                     </div>
               
                 </div>
                 <div>
                    <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/pokemon_landingpage_bg.jpg" alt="" />
                     </div>
                  
                 </div>
         </Carousel>
    </div>
    )
}