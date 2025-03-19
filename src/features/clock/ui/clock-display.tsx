import { Arrow } from "@shared/ui";
import { getCoords } from "@shared/lib";

import { useClockDisplay } from "../lib/hooks";
import { ClockDisplayProps } from "./types";

export const ClockDisplay = ({ timezoneOffset }: ClockDisplayProps) => {
  const { hourDeg, minuteDeg, secondDeg, segments, hours, minutes, seconds } =
    useClockDisplay(timezoneOffset);

  return (
    <>
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
        />
        {segments.map((_, i) => {
          const { x1, x2, y1, y2 } = getCoords(i);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ccc"
              strokeWidth="1"
            />
          );
        })}
        <Arrow type="hour" angle={hourDeg} length={20} color="#333" width={2} />
        <Arrow
          type="minute"
          angle={minuteDeg}
          length={30}
          color="#666"
          width={2}
        />
        <Arrow
          type="second"
          angle={secondDeg}
          length={30}
          color="#ff0000"
          width={1}
        />
      </svg>
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    </>
  );
};
