import { useEffect, useState } from "react";

import DriverCard from "@/components/Card/DriverCard";
import styles from "@/assets/styles";

import ResponseDTO from "@/DTOs/ResponseDTO";
import AllDriversDTO from "@/DTOs/Driver/AllDriversDTO";

import useAxios from "@/hooks/axios/useAxios";
import Ports from "@/hooks/axios/ports";

export default function Drivers() {
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
            }
        };
        getAllDrivers();
    }, []);

    return (
        <>
            <div
                className={`flex flex-col ${styles.pageWidth} ${styles.padeMargin} m-auto text-center mt-5`}
            >
                <div className="border-primary-500 border-t-[10px] border-r-[10px] rounded-tr-[2em] mb-4 min-h-20 text-start pt-4 pr-4 font-heading font-extrabold text-4xl">
                    All F1 Drivers 2023
                </div>
                <div className="bg-blue-700">
                    Card
                    <div className="flex flex-wrap">
                        {drivers.map((d) => (
                            <DriverCard key={d.id} driver={d}></DriverCard>
                        ))}
                    </div>
                </div>
                <div className="bg-yellow-700">CTA IDK</div>
            </div>
        </>
    );
}
