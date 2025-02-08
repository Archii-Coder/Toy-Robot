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
      <td className="map-title">
        <div>
          {isRobotOn ? (
            <div className="toy-agent">
              <span>{getDirectionArrow(robotState.direction)}</span>
            </div>
          ) : (
            "T"
          )}
        </div>
      </td>
      // <div key={`${x}-${y}`} className={`cell ${isRobotOn ? "robot-on" : ""}`}>
      //   {isRobotOn && (
      //     <div className={`arrow ${robotState.direction.toLowerCase()}`}>➤</div>
      //   )}
      // </div>
    );
  };

  //
  const getDirectionArrow = (direction: string) => {
    switch (direction) {
      case "North":
        return "↑";
      case "East":
        return "→";
      case "South":
        return "↓";
      case "West":
        return "←";
      default:
        return "↑";
    }
  };

  const renderGrid = () => {
    const grid = [];
    for (let y = 4; y >= 0; y--) {
      const row = [];
      for (let x = 0; x < 5; x++) {
        row.push(renderCell(x, y));
      }
      grid.push(<tr key={y}>{row}</tr>);
    }
    return grid;
  };

  return (
    <table>
      <tbody>{renderGrid()}</tbody>
    </table>
  );
};

export default Grid;
