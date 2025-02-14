import React, { ReactNode } from "react";
import { RobotCoordinate } from "../../../../Game";

interface RotateMap {
  [key: string]: number;
}

const ROTATE_MAP: RotateMap = {
  N: 0,
  E: 90,
  S: 180,
  W: 270,
};

interface PlacementProps {
  coordinate: RobotCoordinate;
  children: ReactNode;
}

const Placement: React.FC<PlacementProps> = ({ coordinate, children }) => {
  return (
    <div
      data-testid="placement"
      className="absolute h-[60px] w-[60px]"
      style={{
        top: `${60 * coordinate.y}px`,
        left: `${60 * coordinate.x}px`,
        transform: `rotate(${ROTATE_MAP[coordinate.f]}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default Placement;
