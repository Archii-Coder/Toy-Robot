import React from "react";
import { RobotCoordinate } from "../../Game";
import Board from "./components/Board";
import Placement from "./components/Placement";
import Robot from "./components/Robot";

interface StageProps {
  robotCoordinate: RobotCoordinate | null;
}

const Stage: React.FC<StageProps> = ({ robotCoordinate }) => {
  return (
    <div className="relative">
      {robotCoordinate && (
        <Placement coordinate={robotCoordinate}>
          <Robot />
        </Placement>
      )}
      <Board />
    </div>
  );
};

export default Stage;
