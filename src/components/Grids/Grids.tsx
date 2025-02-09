import React from "react";
import "../../styles/Grids.css";
import { RobotInitialState } from "../DeployRobot";

interface GridProps {
  robotState: RobotInitialState | null;
}

const Grids: React.FC<GridProps> = ({ robotState }) => {
  const renderCell = (x: number, y: number) => {
    const isRobotOn =
      robotState?.position.x === x && robotState?.position.y === y;
    return (
      <td className="map-pattern">
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
    );
  };

  const getDirectionArrow = (direction: string) => {
    switch (direction) {
      case "NORTH":
        return "↑";
      case "EAST":
        return "→";
      case "SOUTH":
        return "↓";
      case "WEST":
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

export default Grids;
