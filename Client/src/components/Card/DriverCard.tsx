import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";
// import { Monaco } from "../../assets/CountryFlags/CountryFlags";

// === "MON" ? (
//   <img src={`${Monaco}`} />
// ) : (
//   <div>Nada </div>
// )

export default function DriverCard({ driver }: { driver: AllDriversDTO }) {
    return (
        <div className="flex flex-col bg-secondary-300 rounded-lg px-2 py-1 hover:-translate-y-2 transition-all">
            <div>Driver</div>
            <div className="flex flex-row justify-between">
                <div>
                    <span>{driver.fullName}</span>
                    <div>WHAA</div>
                </div>
                <span>{driver.countryCode}</span>
            </div>
            <div className="flex flex-col">
                <span>{driver.teamName}</span>
                <div>DRIVER IMAGE</div>
            </div>
        </div>
    );
}
