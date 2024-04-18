import Hero from "@/components/Hero/Hero";
import RaceCarousel from "@/components/RaceCarousel/RaceCarousel";

import style from "../assets/styles";

export default function Index() {
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
