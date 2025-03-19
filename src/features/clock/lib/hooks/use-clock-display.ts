import { useEffect, useState } from "react";

import { UseClockDisplayReturnType } from "./types";

export const useClockDisplay = (timezoneOffset: number): UseClockDisplayReturnType => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const segments = Array.from({ length: 12 })

    const localTime = new Date(time.getTime() + timezoneOffset * 3600000);
    const hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const seconds = localTime.getUTCSeconds();

    const hourDeg = ((hours % 12) + minutes / 60) * 30;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    return {
        hourDeg,
        minuteDeg,
        secondDeg,
        segments,
        hours,
        minutes,
        seconds
    }
}