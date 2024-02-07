import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
 } from "@/components/ui/carousel";

 import {
     Bahrain,
    } from "../../../assets/CountryFlags/CountryFlags";

 import RaceCarouselItem  from "./RaceCarouselItem";

export default function MyCarousel() {
  return (
    <Carousel className=" m-auto py-8" 
    plugins={[
    ]}>
        <CarouselContent>   
            {/* <CarouselItem className="pl-0">
                    <div className="aspect-video bg-[url('https://cdn-5.motorsport.com/images/mgl/YXRAzVo0/s1200/charles-leclerc-ferrari-sf-23.webp')] bg-bottom overflow-hidden border-primary border-t-[10px] border-r-[10px] rounded-tr-[2em]">
                        <div className="aspect-video bg-black bg-opacity-30 hover:bg-opacity-0">
                            Jumboron  
                            <section className="flex flex-col items-center justify-center text-white m-auto max-w-full min-h-full">
                                <h2>HI HHAHA</h2>
                                <h2>BYE HHAHA</h2>

                            </section>

                        </div>
                    </div>
            </CarouselItem> */}
            {/* <CarouselItem className="pl-0">
                    <div className="bg-primary aspect-video bg-[url('https://cdn-6.motorsport.com/images/mgl/01WlqrvY/s1200/charles-leclerc-ferrari-sf-23.webp')] bg-cover bg-opacity-60">
                        <div className="aspect-video bg-black bg-opacity-30">

                        </div>
                    </div>
            </CarouselItem> */}
            <CarouselItem className="">
                <RaceCarouselItem countryName={"Bahrain"} image={Bahrain} alt="Bahrain Flag" raceName="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024"/>
            </CarouselItem>
            <CarouselItem className="">
                <RaceCarouselItem countryName={"Bahrain"} image={Bahrain} alt="Bahrain Flag" raceName="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024"/>
            </CarouselItem>
            <CarouselItem className="">
                <RaceCarouselItem countryName={"Bahrain"} image={Bahrain} alt="Bahrain Flag" raceName="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024"/>
            </CarouselItem>
            <CarouselItem className="">
                <RaceCarouselItem countryName={"Bahrain"} image={Bahrain} alt="Bahrain Flag" raceName="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024"/>
            </CarouselItem>
        </CarouselContent>
        <CarouselNext /> 
        <CarouselPrevious />
    </Carousel>
  )
}
