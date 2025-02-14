const Cell = ({
  x, y
}) => (
  <div
    role="gridcell"
    aria-label={`Cell ${x}, ${y}`} 
    className="w-[60px] h-[60px] border border-gray-900" 
  />
)

export default Cell;
