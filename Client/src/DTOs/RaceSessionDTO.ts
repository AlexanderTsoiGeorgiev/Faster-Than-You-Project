interface RaceSessionDTO {
    location: string,
    countryKey: number,
    countryCode: string,
    countryName: string,
    circuitKey: number,
    circuitShortName: string,
    sessionType: string,
    sessionName: string,
    dateStart: Date,
    dateEnd: Date,
    gmtOffset: string,
    sessionKey: number,
    meetingKey: number,
    year: number
}


export default RaceSessionDTO;