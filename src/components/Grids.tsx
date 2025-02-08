import React from "react";
import "../styles/Grid.css";
import { RobotInitialState } from "../types";

// define the grid props
interface GridProps {
  robotState: RobotInitialState | null;
}

// create the grid component
const Grid: React.FC<GridProps> = ({ robotState }) => {
  const renderCell = (x: number, y: number) => {
    const isRobotOn =
      robotState?.position.x === x && robotState?.position.y === y;
    return (
      <div key={`${x}-${y}`} className={`cell ${isRobotOn ? "robot-on" : ""}`}>
        {isRobotOn && (
          <div className={`arrow ${robotState.direction.toLowerCase()}`}>➤</div>
        )}
      </div>
    );
  };

  const renderGrid = () => {
    const grid = [];
    for (let y = 4; y >= 0; y--) {
      for (let x = 0; x < 5; x++) {
        grid.push(renderCell(x, y)); // render each cell
      }
    }
    return grid;
  };

  return (
    <div className="grid-container">
      <div className="grid">{renderGrid()}</div>
    </div>
  );
};

export default Grid;
