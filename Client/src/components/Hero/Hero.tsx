import Card from "../Card/Card";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        
        <>
            <section className="flex flex-wrap m-auto my-8 justify-start gap-6 md:h-[900px] h-auto">
                <div className="flex flex-col max-w-[50%] sm:max-w-full md:w-full min-h-full flex-1 ">
                    <section className="flex flex-col sticky top-24 border-primary border-t-[10px] border-r-[10px] rounded-tr-[2em] pr-4">
                        

                        <h1 className="font-bold text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ullam voluptate ipsum repellendus placeat! Voluptatibus consectetur voluptatum tempora exercitationem perspiciatis cum sint debitis, deserunt qui mollitia, commodi ipsam ut in.</h1>
                        <div className="">
                            <img src="https://cdn-5.motorsport.com/images/mgl/YXRAzVo0/s1200/charles-leclerc-ferrari-sf-23.webp" alt="" />
                        </div>
                    </section>
                    <div className=" h-full">
                        <div className="h-full border-primary border-r-[10px] z-50"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:max-w-[50%] w-full">
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 flex-grow">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    </div>
                <Button className="w-1/3 mt-3"> BUTTON </Button>
                    
                </div>
            </section>
        </>
    )
}