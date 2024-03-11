import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";
import ResponseDTO from "@/DTOs/ResponseDTO"
import DriverCard from "@/components/Card/DriverCard";
import styles from "@/assets/styles";

const allDriversResponse = await getAllDrivers();
const allDrivers: AllDriversDTO[] = allDriversResponse.result!.map((d: any) => ({
      id: d.id,
      driverNumber: d.driverNumber,
      fullName: d.fullName,
      teamName: d.teamName,
      teamColor: d.teamColor,
      headshotURL: d.headshotURL,
      countryCode: d.countryCode
}));

console.log("ALL DRIVERS", allDrivers);


export default function Drivers() {
  return (
    <>
        <div className={`flex flex-col ${styles.pageWidth} ${styles.padeMargin} m-auto text-center mt-5`}>
          <div className="border-primary border-t-[10px] border-r-[10px] rounded-tr-[2em] mb-4 min-h-20 text-start pt-4 pr-4 ">All F1 Drivers 2023</div>
          <div className="bg-blue-700">
            Cards
            <div className="grid grid-cols-4 gap-4 p-2">
              {allDrivers.map((d:AllDriversDTO) => (
                <div key={d.id}>
                  <DriverCard driver={d}></DriverCard>
                </div>
                ))}
            </div>
          </div>
          <div className="bg-yellow-700">CTA IDK</div>
        </div>
    </>
  )
}


async function getAllDrivers() {
  
  const fetchResponse: Response = await fetch("https://localhost:7001/Drivers/All");
  const data = await fetchResponse.json();

  const result: ResponseDTO = {
      result: data.result,
      message: data.message,
      isSuccess: data.isSuccess
  };
  
  return result;
}