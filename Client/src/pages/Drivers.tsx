import { useEffect, useState } from "react";

import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";
import ResponseDTO from "@/DTOs/ResponseDTO";
import DriverCard from "@/components/Card/DriverCard";
import styles from "@/assets/styles";
import useAxios from "@/hooks/axios/useAxios";
import Ports from "@/hooks/axios/ports";

// const allDrivers: AllDriversDTO[] = [];

// console.log("ALL DRIVERS", allDrivers);

export default function Drivers() {
    console.log("loading components");
    const [drivers, setDrivers] = useState<AllDriversDTO[]>([]);

    const axios = useAxios(Ports.Drivers);

    useEffect(() => {
        const getAllDrivers = async () => {
            try {
                const response = await axios.get<ResponseDTO<AllDriversDTO[]>>(
                    "/Drivers/All"
                );
                const data: AllDriversDTO[] | undefined = response.data.result;
                if (data) {
                    setDrivers(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        getAllDrivers();
    }, []);

    console.log(drivers);
    return (
        <>
            <div
                className={`flex flex-col ${styles.pageWidth} ${styles.padeMargin} m-auto text-center mt-5`}
            >
                <div className="border-primary border-t-[10px] border-r-[10px] rounded-tr-[2em] mb-4 min-h-20 text-start pt-4 pr-4 ">
                    All F1 Drivers 2023
                </div>
                <div className="bg-blue-700">
                    Cards
                    <div className="grid grid-cols-4 gap-4 p-2">
                        {drivers.map((d) => (
                            <div key={d.id}>
                                <DriverCard driver={d}></DriverCard>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-yellow-700">CTA IDK</div>
            </div>
        </>
    );
}
