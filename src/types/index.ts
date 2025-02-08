// define the basic 4 types for the direction state
export type Direction = "North" | "East" | "South" | "West";

// define the position state
export interface Position {
  x: number;
  y: number;
}

// define robot's initial position and direction
export interface RobotInitialState {
  position: Position;
  direction: Direction;
}
