import { ArrowProps } from "./types";

export const Arrow = ({ type, angle, length, color, width }: ArrowProps) => {
  return (
    <line
      x1="50"
      y1="50"
      x2="50"
      y2={50 - length}
      stroke={color}
      strokeWidth={width}
      transform={`rotate(${angle} 50 50)`}
    />
  );
};
