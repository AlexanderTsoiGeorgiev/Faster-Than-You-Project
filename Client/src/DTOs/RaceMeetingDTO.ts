interface RaceMeetingDTO {
    circuitKey: number,
    circuitShortName: string,
    countryCode: number,
    countryKey: number,
    countryName: string,
    dateStart: Date,
    gmtOffset: string,
    location: string,
    meetingKey: number,
    meetingName: string,
    meetingOfficialName: string,
    year: number
}

export default RaceMeetingDTO;