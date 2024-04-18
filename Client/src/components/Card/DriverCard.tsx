import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";

export default function DriverCard(  {driver} : { driver: AllDriversDTO }) {
  return (
    <div className="flex flex-col bg-secondary-300 rounded-lg px-2 py-1">
        <div>Driver</div>
        <div className="flex flex-row justify-between">
            <div>
                <span>{driver.fullName}</span>
            </div>
            <span>{driver.countryCode}</span>
        </div>
        <div className="flex flex-col">
            <span>{driver.teamName}</span>
            <div>DRIVER IMAGE</div>
        </div>
        
    </div>
  )
}
