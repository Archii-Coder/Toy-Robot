const ROTATE_MAP = {
  'N': 0,
  'E': 90,
  'S': 180,
  'W': 270,
}

const Placement = ({ coordinate, children }) => {
  return (
    <div
      data-testid="placement"
      className="absolute h-[60px] w-[60px]"
      style={{
        top: `${60 * coordinate.y}px`,
        left: `${60 * coordinate.x}px`,
        transform: `rotate(${ROTATE_MAP[coordinate.f]}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default Placement;
