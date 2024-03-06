import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";
import ResponseDTO from "@/DTOs/ResponseDTO"
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

export default function Drivers() {
  return (
    <>
        <div className={`flex flex-col ${styles.pageWidth} ${styles.padeMargin} m-auto text-center mt-5`}>
          <div className="bg-red-700">All Drivers</div>
          <div className="bg-blue-700">Cards</div>
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