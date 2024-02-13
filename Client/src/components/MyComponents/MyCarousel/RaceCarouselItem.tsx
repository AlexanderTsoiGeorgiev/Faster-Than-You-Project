import RaceMeetingDTO from "../../../DTOs/RaceMeetingDTO";
import RaceSessionDTO from "../../../DTOs/RaceSessionDTO";

export default function CarouselItem( {raceMeeting, raceSessions, image, alt} : {raceMeeting: RaceMeetingDTO, raceSessions: RaceSessionDTO[], image:string, alt:string} ) {
	
raceSessions = raceSessions.filter((rs: RaceSessionDTO) => rs.meetingKey === raceMeeting.meetingKey)
const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];

const [firstSession, secondSession, thirdSession, fourthSession, fifthSession] = raceSessions;

  return (
    <>
		<article className="flex flex-col h-full bg-secondary-lighter-color p-4 w-1/2">
			<header className="flex flex-col items-center justify-center">
				<div className="rounded-md overflow-hidden">
					<img src={image} alt={alt} />
				</div>
				<span>{raceMeeting.meetingOfficialName}</span>
				{/* <a href="#">{raceName}</a> */}
			</header>
			<section className="flex flex-1 items-center justify-between">
				<ul className="list-none">
						{firstSession ? (
							<>
								<li className="flex gap-2">
									<span>{firstSession.sessionName}</span>
									<span>{weekday[firstSession.dateStart.getDay()]}</span>
									<span>{`${firstSession.dateStart.getHours()} - ${firstSession.dateEnd.getHours()}`}</span>
								</li>
							</>
						) : null}
					{secondSession ? (
							<>
								<li className="flex gap-2">
									<span>{secondSession.sessionName}</span>
									<span>{weekday[secondSession.dateStart.getDay()]}</span>
									<span>{`${secondSession.dateStart.getHours()} - ${secondSession.dateEnd.getHours()}`}</span>
								</li>
							</>
						) : null}
					{thirdSession ? (
							<>
								<li className="flex gap-2">
									<span>{thirdSession.sessionName}</span>
									<span>{weekday[thirdSession.dateStart.getDay()]}</span>
									<span>{`${thirdSession.dateStart.getHours()} - ${thirdSession.dateEnd.getHours()}`}</span>
								</li>
							</>
						) : null}
				</ul>
				<ul className="list-none">
				{fourthSession ? (
							<>
								<li className="flex gap-2">
									<span>{fourthSession.sessionName}</span>
									<span>{weekday[fourthSession.dateStart.getDay()]}</span>
									<span>{`${fourthSession.dateStart.getHours()} - ${fourthSession.dateEnd.getHours()}`}</span>
								</li>
							</>
						) : null}
					{fifthSession ? (
							<>
								<li className="flex gap-2">
									<span>{fifthSession.sessionName}</span>
									<span>{weekday[fifthSession.dateStart.getDay()]}</span>
									<span>{`${fifthSession.dateStart.getHours()} - ${fifthSession.dateEnd.getHours()}`}</span>
								</li>
							</>
						) : null}
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
