export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export interface Position {
  x: number;
  y: number;
}

export interface RobotInitialState {
  position: Position;
  direction: Direction;
}
