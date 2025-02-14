import { useState } from "react";
import Button from "./components/Button";

const Commands = ({ 
  onPlace,
  onMove,
  onTurnLeft,
  onTurnRight,
 }) => {
  const [x, setX] = useState('0');
  const [y, setY] = useState('0');
  const [direction, setDirection] = useState('N');

  return (
    <div className="p-4 font-bold">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <div className="flex items-center flex-1">
            <label htmlFor="x" className="mr-2 whitespace-nowrap">
              X:
            </label>
            <input
              id="x"
              type="number"
              className="w-full text-right border-b-2 border-gray-600"
              value={x}
              onChange={(e) => setX(e.target.value)}
            />
          </div>
          <div className="flex items-center flex-1">
            <label htmlFor="y" className="mr-2 whitespace-nowrap">
              Y:
            </label>
            <input
              id="y"
              type="number"
              className="w-full text-right border-b-2 border-gray-600"
              value={y}
              onChange={(e) => setY(e.target.value)}
            />
          </div>
        </div>
  
        <div className="flex items-center">
          <label htmlFor="direction" className="mr-2 whitespace-nowrap">
            Direction:
          </label>
          <select
            id="direction"
            className="flex-grow text-right border-b-2 border-gray-600"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="N">North</option>
            <option value="E">East</option>
            <option value="S">South</option>
            <option value="W">West</option>
          </select>
        </div>
  
        <Button className="mt-4" onClick={() => onPlace(x, y, direction)}>
          Place
        </Button>
      </div>
      <ul className="space-y-4 mt-4">
        <li className="flex space-x-4">
          <Button onClick={onTurnLeft}>Left</Button>
          <Button onClick={onTurnRight}>Right</Button>
        </li>
        <li>
          <Button onClick={onMove}>Move</Button>
        </li>
      </ul>
    </div>
  )
 }

export default Commands;
