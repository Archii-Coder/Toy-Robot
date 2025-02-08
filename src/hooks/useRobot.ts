// import necessary modules
import { useState } from "react";
import { Direction, Position, RobotInitialState } from "../types";

// create the function to place the robot in the grid and show its current position and direction
const useRobot = () => {
  const [robotState, setRobotState] = useState<RobotInitialState | null>(null);

  // function to place the robot in the grid
  const placeRobot = (x: number, y: number, direction: Direction) => {
    // limit the robot's position within the grid
    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
      const position: Position = { x, y };
      setRobotState({ position, direction });
    }
  };

  // function to move the robot in the current direction
  const moveRobot = () => {
    if (robotState) {
      const { position, direction } = robotState;
      const newPosition = { ...position };

      switch (direction) {
        case "North":
          if (newPosition.y < 4) newPosition.y += 1;
          break;
        case "South":
          if (newPosition.y > 0) newPosition.y -= 1;
          break;
        case "East":
          if (newPosition.x < 4) newPosition.x += 1;
          break;
        case "West":
          if (newPosition.x > 0) newPosition.x -= 1;
          break;
      }

      setRobotState({ ...robotState, position: newPosition });
    }
  };

  // function to turn the robot left or right
  const turnRobot = (turn: "Left" | "Right") => {
    if (robotState) {
      // update the robot's direction based on the turn direction
      const directions: Direction[] = ["North", "East", "South", "West"];
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

// export the function
export default useRobot;
