import React from "react";
import Row from "./components/Row";

const Board: React.FC = () => {
  return (
    <div role="grid" aria-label="Board" className="border border-gray-900">
      {/* <Row x={0} />
      <Row x={1} />
      <Row x={2} />
      <Row x={3} />
      <Row x={4} /> */}
      {[0, 1, 2, 3, 4].map((x) => (
        <Row key={x} x={x} />
      ))}
    </div>
  );
};

export default Board;
