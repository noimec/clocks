import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../shared/config";
import { AppDispatch, fetchTimezones } from "../actions";

export const useClock = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { timezones, loading, clocks } = useSelector((state: RootState) => ({
        timezones: state.timezones.timezones,
        loading: state.loading.loading,
        clocks: state.clocks.clocks,
    }));

    const [clockCount, setClockCount] = useState(1);
    const [selectedCities, setSelectedCities] = useState([]);

    useEffect(() => {
        dispatch(fetchTimezones());
    }, [dispatch]);

    const handleCityChange = (index, city) => {
        const newSelectedCities = [...selectedCities];
        newSelectedCities[index] = city;
        setSelectedCities(newSelectedCities);
    };

    const availableCities = Object.keys(timezones).filter(
        (city) =>
            !selectedCities.includes(city) ||
            selectedCities.indexOf(city) === selectedCities.lastIndexOf(city)
    );

    return {
        clockCount,
        availableCities,
        loading,
        timezones,
        selectedCities,
        handleCityChange,
        setClockCount
    }

}