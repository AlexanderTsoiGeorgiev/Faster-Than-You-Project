import Hero from "@/components/Hero/Hero";
import RaceCarousel from "@/components/RaceCarousel/RaceCarousel";

import style from "../assets/styles";

let number = 0;
export default function Index() {
    console.log("number", number++);

    return (
        <>
            <Hero className={`${style.pageWidth} ${style.padeMargin}`} />
            <div>
                <RaceCarousel
                    className={`${style.pageWidth} ${style.padeMargin}`}
                />
            </div>
        </>
    );
}
