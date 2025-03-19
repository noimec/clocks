import { ClockDisplay } from "./clock-display";
import { ClocksSelect } from "./clocks-select";
import { ClockMenu } from "./clock-menu";

import { Loader } from "@shared/ui";
import { useClock } from "../lib/hooks";

export const Clock = () => {
  const {
    loading,
    clocks,
    setClockCount,
    timezones,
    availableCities,
    handleCityChange,
  } = useClock();

  if (loading || !timezones) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl text-center mb-8">Часовые пояса</h1>

      <ClocksSelect clockCount={clocks.length} setClockCount={setClockCount} />

      <div className="flex flex-wrap justify-between">
        {clocks.map((clock, index) => (
          <div key={index} className="text-center">
            <ClockDisplay
              timezoneOffset={
                clock.timezone ? Number(timezones[clock.timezone]) : 0
              }
            />
            <ClockMenu
              index={index}
              clocks={clocks}
              timezones={timezones}
              selectedCity={clock.timezone}
              availableCities={availableCities}
              handleCityChange={handleCityChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
