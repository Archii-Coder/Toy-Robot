import Stage from "./components/Stage";
import Commands from "./components/Commands";

import { useState } from "react";

const modulo = (a, b) => ((a % b) + b) % b;
const range = (value, min, max) => Math.min(Math.max(value, min), max);

const Game = () => {
  const [robotCoordinate, setRobotCoordinate] = useState(null);

  const handlePlace = (x, y, f) => {
    setRobotCoordinate({
      x: Number.parseInt(x),
      y: Number.parseInt(y),
      f,
    });
  };

  const handleMove = () => {
    const MOVE_DELTA_MAP = {
      N: { dx: 0, dy: -1 },
      E: { dx: 1, dy: 0 },
      S: { dx: 0, dy: 1 },
      W: { dx: -1, dy: 0 },
    };

    const { dx, dy } = MOVE_DELTA_MAP[robotCoordinate.f];

    setRobotCoordinate({
      ...robotCoordinate,
      x: range(robotCoordinate.x + dx, 0, 4),
      y: range(robotCoordinate.y + dy, 0, 4),
    });
  };

  const handleTurn = (direction) => {
    const FACES = ["N", "E", "S", "W"];

    const FACE_DELTA_MAP = {
      Right: +1,
      Left: -1,
    };

    const currentIndex = FACES.findIndex((face) => face === robotCoordinate.f);
    const df = FACE_DELTA_MAP[direction];

    setRobotCoordinate({
      ...robotCoordinate,
      f: FACES[modulo(currentIndex + df, 4)],
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
