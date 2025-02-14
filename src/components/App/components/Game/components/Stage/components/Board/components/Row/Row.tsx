import React from "react";
import Cell from "./components/Cell";

interface RowProps {
  x: number;
}

const Row: React.FC<RowProps> = ({ x }) => {
  return (
    <div role="row" aria-label={`Row ${x}`} className="flex">
      <Cell x={x} y={0} />
      <Cell x={x} y={1} />
      <Cell x={x} y={2} />
      <Cell x={x} y={3} />
      <Cell x={x} y={4} />
    </div>
  );
};

export default Row;
