import Row from "./components/Row";

const Board = () => {
  return (
    <div role="grid" aria-label="Board" className="border border-gray-900">
      <Row x={0} />
      <Row x={1} />
      <Row x={2} />
      <Row x={3} />
      <Row x={4} />
    </div>
  );
};

export default Board;
