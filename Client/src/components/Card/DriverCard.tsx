import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";
// import { Monaco } from "../../assets/CountryFlags/CountryFlags";

// === "MON" ? (
//   <img src={`${Monaco}`} />
// ) : (
//   <div>Nada </div>
// )

export default function DriverCard({ driver }: { driver: AllDriversDTO }) {
    return (
        <div className="flex-1/4 max-w-[25%] p-2">
            <div className="flex flex-col  bg-secondary-300 px-2 py-1 hover:-translate-y-2 transition-all border-primary-500 border-t-2 border-r-2 rounded-tr-xl">
                <div>Driver</div>
                <div className="flex flex-row justify-between">
                    <div className={`before:h-full before:border-2`}>
                        {/* TODO: Add driver.teamColor as border-color on before element */}
                        <span className="ml-3">{driver.fullName}</span>
                    </div>
                    <span>{driver.countryCode}</span>
                </div>
                <div className="flex flex-col">
                    <span>{driver.teamName}</span>
                    <div>DRIVER IMAGE</div>
                </div>
            </div>
        </div>
    );
}
