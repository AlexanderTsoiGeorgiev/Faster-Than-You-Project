import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
    return (
        
        <>
            <Carousel className="w-4/5 m-auto py-8" 
            plugins={[
            ]}>
                <CarouselContent>
                    <CarouselItem>
                        {/* <img src="https://cdn-7.motorsport.com/images/mgl/01WlqrvY/s1200/charles-leclerc-ferrari-sf-23.webp" alt="Image" 
                        className=""/> */}
                        {/* <div className="bg-[url('')] w-[350px] h-[350px]">ZZZZZZZZZZZZZZZZZZZ</div> */}
                            <div className="bg-primary aspect-video bg-[url('https://cdn-5.motorsport.com/images/mgl/YXRAzVo0/s1200/charles-leclerc-ferrari-sf-23.webp')] bg-bottom bg-opacity-60">
                                <div className="aspect-video bg-black bg-opacity-30">

                                </div>
                            </div>
                        {/* <AspectRatio ratio={16/9}>
                    </AspectRatio> */}
                    </CarouselItem>
                    <CarouselItem>
                            <div className="bg-primary aspect-video bg-[url('https://cdn-6.motorsport.com/images/mgl/01WlqrvY/s1200/charles-leclerc-ferrari-sf-23.webp')] bg-cover bg-opacity-60">
                                <div className="aspect-video bg-black bg-opacity-30">

                                </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem>3</CarouselItem>
                </CarouselContent>
                <CarouselNext /> 
                <CarouselPrevious />
            </Carousel>
        </>
    )
}



//https://cdn-5.motorsport.com/images/mgl/YXRAzVo0/s1200/charles-leclerc-ferrari-sf-23.webp