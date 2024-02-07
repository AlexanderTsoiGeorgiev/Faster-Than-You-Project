export default function CarouselItem( { countryName, image, alt, raceName, raceType = "sprint" }: { countryName: string,  image: string; alt: string; raceName: string; raceType: string;} ) {
  return (
    <>
		<article className="flex flex-col h-full bg-secondary-lighter-color p-4 w-1/2">
			<header className="flex flex-col items-center justify-center">
				<div className="rounded-md overflow-hidden">
					<img src={image} alt={alt} />
				</div>
				<span>{countryName}</span>
				<a href="#">{raceName}</a>
			</header>
			<section className="flex flex-1 items-center justify-between">
				<ul className="list-none">
					<li>
						<span>Practice 1</span>
						<span>Thu</span>
						<span>13:30 - 14:30</span>
					</li>
					<li>
						<span>Practice 1</span>
						<span>Thu</span>
						<span>13:30 - 14:30</span>
					</li>
					<li>
						<span>Practice 1</span>
						<span>Thu</span>
						<span>13:30 - 14:30</span>
					</li>
				</ul>
				<ul className="list-none">
					<li>
						<span>Practice 1</span>
						<span>Thu</span>
						<span>13:30 - 14:30</span>
					</li>
					<li>
						<span>Practice 1</span>
						<span>Thu</span>
						<span>13:30 - 14:30</span>
					</li>
				</ul>
			</section>
			<footer>
				<p>Bwoah</p>
				local time and your time goes here
			</footer>
		</article>
    </>
  )
}
