// import necessary modules
import { useEffect, useState } from "react";
import { Direction, Position, RobotInitialState } from "../types";

// create the function to place the robot in the grid and show its current position and direction
const useRobot = () => {
  const [robotState, setRobotState] = useState<RobotInitialState | null>(null);

  // life cycle hook to initialize the robot
  useEffect(() => {
    // initialize the robot
    console.log("Initializing robot...");

    // clean up the robot on unmount
    return () => {
      console.log("Cleaning up robot...");
      setRobotState(null);
    };
  }, []);

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
          if (newPosition.y < 4) newPosition.y += 1;
          break;
        case "West":
          if (newPosition.y > 0) newPosition.y -= 1;
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

  //
  const reportRobot = (): string => {
    if (robotState) {
      const { x, y } = robotState.position;
      return `Robot is at (${x}, ${y}) facing ${robotState.direction}`;
    }
    return "Robot not placed yet";
  };

  // use the useEffect hook to update the robot's position and direction in the console
  useEffect(() => {
    if (robotState) {
      console.log(
        `Robot placed at (${robotState.position.x}, ${robotState.position.y}) facing ${robotState.direction}`
      );
    }
  }, [robotState]);

  return { placeRobot, robotState, moveRobot, turnRobot, reportRobot };
};

// export the function
export default useRobot;
