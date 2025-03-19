import { ChangeEvent } from "react";

import { ClocksSelectProps } from "./types";

export const ClocksSelect = ({
  clockCount,
  setClockCount,
}: ClocksSelectProps) => {
  const clocks = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setClockCount(Math.min(10, Math.max(1, Number(e.target.value))));

  return (
    <div className="mb-4">
      <label className="mr-1">Выберите количество часов: </label>
      <select
        value={clockCount}
        onChange={handleSelect}
        className="mb-4 px-1 py-1 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400 transition-colors duration-200"
      >
        {clocks.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};
