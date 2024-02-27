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

 import ResponseDTO from "../../../DTOs/ResponseDTO";
 import RaceMeetingDTO from "../../../DTOs/RaceMeetingDTO";
 import RaceSessionDTO from "../../../DTOs/RaceSessionDTO";


//const data: ResponseDTO = await fetchData();
//console.log(data.Result);

// const Races: RaceDTO[] =  data.Result!.map((obj: any) => ({
//         CircuitKey: obj.circuit_key,
//         CircuitShortName: obj.circuit_short_name,
//         CountryCode: obj.country_code,
//         CountryKey: obj.country_key,
//         CountryName: obj.country_name,
//         DateEnd: obj.date_end,
//         DateStart: obj.date_start,
//         GmtOffset: obj.gmt_offset,
//         Location: obj.location,
//         MeetingKey: obj.meeting_key,
//         SessionKey: obj.session_key,
//         SessionName: obj.session_name,
//         SessionType: obj.session_type,
//         Year: obj.year
// }));

//console.log(Races);

const raceMeetingsResponse = await getRaceMeetings();
const raceMeetings: RaceMeetingDTO[] = raceMeetingsResponse.result!.map((rm: any) => ({
    circuitKey: rm.circuit_key,
    circuitShortName: rm.circuit_short_name,
    countryCode: rm.country_code,
    countryKey: rm.country_key,
    countryName: rm.country_name,
    dateStart: new Date(rm.date_start),
    gmtOffset: rm.gmt_offset,
    location: rm.location,
    meetingKey: rm.meeting_key,
    meetingName: rm.meeting_name,
    meetingOfficialName: rm.meeting_official_name,
    year: rm.year
}));

const raceSessionsResponse = await getRaceSessions();
const raceSessions: RaceSessionDTO[] = raceSessionsResponse.result!.map((rs: any) => ({
    location: rs.location,
    countryKey: rs.country_key,
    countryCode: rs.country_code,
    countryName: rs.country_name,
    circuitKey: rs.circuit_key,
    circuitShortName: rs.circuit_short_name,
    sessionType: rs.session_type,
    sessionName: rs.session_name,
    dateStart: new Date(rs.date_start),
    dateEnd: new Date(rs.date_end),
    gmtOffset: rs.gmt_offset,
    sessionKey: rs.session_key,
    meetingKey: rs.meeting_key,
    year: rs.year
}));

console.log(raceMeetings);
console.log(raceSessions);




export default function MyCarousel() {
    return (
        <>
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
                
                {/* {Races.map(r => {
                        <CarouselItem className="" key={r.SessionKey}>
                            <RaceCarouselItem countryName={"Bahrain"} image={Bahrain} alt="Bahrain Flag" raceName="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024"/>
                        </CarouselItem>
                })} */}

                {raceMeetings.map(rm => (
                     <CarouselItem className="" key={rm.meetingKey}>
                        <RaceCarouselItem raceMeeting={rm} raceSessions={raceSessions} image={Bahrain} alt="Bahrain Flag"/>
                    </CarouselItem>
                ))}
                
            {/* <CarouselItem className="">
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
            </CarouselItem> */}
        </CarouselContent>
        <CarouselNext /> 
        <CarouselPrevious />
    </Carousel>
    </>
  )
}

async function getRaceSessions() {

        const fetchResponse: Response = await fetch("https://localhost:7002/RaceSessions");
        const data = await fetchResponse.json();

        
        const result: ResponseDTO = {
            result: JSON.parse(data.result),
            message: data.message,
            isSuccess: data.isSuccess
        }
    
        return result;
}

async function getRaceMeetings() {

    const fetchResponse: Response = await fetch("https://localhost:7003/RaceMeeting");
    const data = await fetchResponse.json();

    const result: ResponseDTO = {
        result: JSON.parse(data.result),
        message: data.message,
        isSuccess: data.isSuccess
    }
    
    return result;
}


