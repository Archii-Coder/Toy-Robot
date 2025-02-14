import React, { useState } from "react";
import Commands from "./components/Commands";
import Stage from "./components/Stage";

type Direction = "N" | "E" | "S" | "W";

export interface RobotCoordinate {
  x: number;
  y: number;
  f: Direction;
}

const modulo = (a: number, b: number): number => ((a % b) + b) % b;
const range = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const Game: React.FC = () => {
  const [robotCoordinate, setRobotCoordinate] =
    useState<RobotCoordinate | null>(null);

  const handlePlace = (x: string, y: string, f: Direction): void => {
    setRobotCoordinate({ x: Number.parseInt(x), y: Number.parseInt(y), f });
  };

  const handleMove = (): void => {
    if (!robotCoordinate) {
      return;
    }
    const Move_Delta_Map: Record<Direction, { dx: number; dy: number }> = {
      N: { dx: 0, dy: -1 },
      E: { dx: 1, dy: 0 },
      S: { dx: 0, dy: 1 },
      W: { dx: -1, dy: 0 },
    };
    const { dx, dy } = Move_Delta_Map[robotCoordinate.f];
    setRobotCoordinate({
      ...robotCoordinate,
      x: range(robotCoordinate.x + dx, 0, 4),
      y: range(robotCoordinate.y + dy, 0, 4),
    });
  };

  const handleTurn = (direction: "Left" | "Right"): void => {
    if (!robotCoordinate) {
      return;
    }

    const FACE: Direction[] = ["N", "E", "S", "W"];
    const FACE_DELTA_MAP: Record<"Left" | "Right", number> = {
      Right: +1,
      Left: -1,
    };

    const currentIndex = FACE.findIndex((face) => face === robotCoordinate.f);
    const deltaFace = FACE_DELTA_MAP[direction];

    setRobotCoordinate({
      ...robotCoordinate,
      f: FACE[modulo(currentIndex + deltaFace, 4)],
    });
  };

  return (
    <main className="p-6 flex justify-between">
      <div className="pl-2">
        <Stage robotCoordinate={robotCoordinate} />
      </div>
      <div className="pt-2 max-w-[50%]">
        <Commands
          onMove={() => handleMove()}
          onTurnLeft={() => handleTurn("Left")}
          onTurnRight={() => handleTurn("Right")}
          onPlace={(x, y, direction) => handlePlace(x, y, direction)}
        />
      </div>
    </main>
  );
};

export default Game;
