import { useState } from "react";
import { Direction, Position, RobotInitialState } from "./DeployRobot";

const useRobot = () => {
  const [robotState, setRobotState] = useState<RobotInitialState | null>(null);

  const placeRobot = (x: number, y: number, direction: Direction) => {
    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
      const position: Position = { x, y };
      setRobotState({ position, direction });
    }
  };

  const moveRobot = () => {
    if (robotState) {
      const { position, direction } = robotState;
      const newPosition = { ...position };

      switch (direction) {
        case "NORTH":
          if (newPosition.y < 4) newPosition.y += 1;
          break;
        case "SOUTH":
          if (newPosition.y > 0) newPosition.y -= 1;
          break;
        case "EAST":
          if (newPosition.x < 4) newPosition.x += 1;
          break;
        case "WEST":
          if (newPosition.x > 0) newPosition.x -= 1;
          break;
      }

      setRobotState({ ...robotState, position: newPosition });
    }
  };

  const turnRobot = (turn: "Left" | "Right") => {
    if (robotState) {
      const directions: Direction[] = ["NORTH", "EAST", "SOUTH", "WEST"];
      const currentDirIndex = directions.indexOf(robotState.direction);
      let newDirIndex: number;

      if (turn === "Left") {
        newDirIndex = (currentDirIndex - 1 + 4) % 4;
      } else {
        newDirIndex = (currentDirIndex + 1) % 4;
      }

      setRobotState({ ...robotState, direction: directions[newDirIndex] });
    }
  };

  return { placeRobot, robotState, moveRobot, turnRobot };
};

export default useRobot;
