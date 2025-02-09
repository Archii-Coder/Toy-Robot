import React from "react";
import { RobotInitialState } from "../DeployRobot";

interface ReportPositionProps {
  robotState: RobotInitialState | null;
}

const ReportPosition: React.FC<ReportPositionProps> = ({ robotState }) => {
  return (
    <div className="report-position">
      <label>Current Position: </label>
      <input
        placeholder="X | Y | DIRECTION"
        readOnly
        value={
          robotState
            ? `${robotState.position.x} | ${robotState.position.y} | ${robotState.direction}`
            : ""
        }
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default ReportPosition;
