import { Loader } from "../../../shared/ui";
import { useClock } from "../lib/hooks/use-clock";
import { ClockDisplay } from "./clock-display";

export const Clock = () => {
  const {
    loading,
    clockCount,
    availableCities,
    timezones,
    selectedCities,
    handleCityChange,
    setClockCount,
  } = useClock();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <label>Количество часов: </label>
        <select
          value={clockCount}
          onChange={(e) =>
            setClockCount(Math.min(10, Math.max(1, Number(e.target.value))))
          }
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {Array.from({ length: clockCount }).map((_, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <select
              value={selectedCities[index] || ""}
              onChange={(e) => handleCityChange(index, e.target.value)}
              style={{ marginBottom: "10px", width: "200px" }}
            >
              <option value="">Выберите город</option>
              {availableCities.map((city) => (
                <option
                  key={city}
                  value={city}
                  disabled={
                    selectedCities.includes(city) &&
                    selectedCities[index] !== city
                  }
                >
                  {city} (UTC{timezones[city]})
                </option>
              ))}
            </select>
            <ClockDisplay
              timezoneOffset={
                selectedCities[index]
                  ? Number(timezones[selectedCities[index]])
                  : 0
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
