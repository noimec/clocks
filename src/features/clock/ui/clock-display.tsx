import { useClockDisplay } from "../lib/hooks/use-clock-display";

interface ClockDisplayProps {
  timezoneOffset: number;
}

export const ClockDisplay = ({ timezoneOffset }: ClockDisplayProps) => {
  const { hourDeg, minuteDeg, secondDeg } = useClockDisplay(timezoneOffset);

  return (
    <svg width="200" height="200" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#ccc"
        strokeWidth="2"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30 * (Math.PI / 180);
        const x1 = 50 + 40 * Math.sin(angle);
        const y1 = 50 - 40 * Math.cos(angle);
        const x2 = 50 + 45 * Math.sin(angle);
        const y2 = 50 - 45 * Math.cos(angle);
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
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="30"
        stroke="#333"
        strokeWidth="2"
        transform={`rotate(${hourDeg} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="10"
        stroke="#666"
        strokeWidth="2"
        transform={`rotate(${minuteDeg} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="10"
        stroke="#ff0000"
        strokeWidth="1"
        transform={`rotate(${secondDeg} 50 50)`}
      />
    </svg>
  );
};
