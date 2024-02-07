import MyCarousel from "../MyComponents/MyCarousel/MyCarousel";

export default function RaceCarousel({ className }: {className: string }) {
  return (
    <>
        <div className={className}>
            <MyCarousel />
        </div>
    </>
  )
}
