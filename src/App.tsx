import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import useRobot from "./hooks/useRobot";
import { Direction } from "./types";

function App() {
  // set up state and initialize robot with initial position and direction
  const { placeRobot, robotState, moveRobot, turnRobot, reportRobot } =
    useRobot();
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>("North");
  const [report, setReport] = useState<string>("");

  // handle user input changes
  const handlePlace = () => {
    placeRobot(x, y, direction);
  };

  //
  const handleReport = () => {
    setReport(reportRobot());
  };

  return (
    <div className="App">
      <h1>Toy Robot</h1>
      <div>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
          placeholder="X (0-4)"
        />
        <input
          type="number"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
          placeholder="Y (0-4)"
        />
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value as Direction)}
        >
          <option value="North">North</option>
          <option value="East">East</option>
          <option value="South">South</option>
          <option value="West">West</option>
        </select>
        <button onClick={handlePlace}>Place</button>
        <button onClick={moveRobot}>Move</button>
        <button onClick={() => turnRobot("Left")}>Left</button>
        <button onClick={() => turnRobot("Right")}>Right</button>
        <button onClick={handleReport}>Report</button>
      </div>
      {robotState && (
        <div>
          Robot is at ({robotState.position.x}, {robotState.position.y} facing{" "}
          {robotState.direction})
        </div>
      )}
    </div>
  );
}

export default App;
