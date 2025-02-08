import { useState } from "react";
import "./App.css";
import Grid from "./components/Grids";
import useRobot from "./hooks/useRobot";
import { Direction } from "./types";

function App() {
  // set up state and initialize robot with initial position and direction
  const { placeRobot, robotState, moveRobot, turnRobot } = useRobot();
  const [placeInput, setPlaceInput] = useState<string>("0,0,North");

  // handle user input changes
  const handlePlace = () => {
    const [x, y, direction] = placeInput.split(",");
    placeRobot(Number(x), Number(y), direction as Direction);
  };

  //
  const directionToArrow = (direction: Direction) => {
    switch (direction) {
      case "North":
        return "↑";
      case "East":
        return "→";
      case "South":
        return "↓";
      case "West":
        return "←";
    }
  };

  return (
    <div className="page-view">
      <div className="map-body">
        <Grid robotState={robotState} />
      </div>
      <div className="control-panel">
        <div className="control-robot">
          <button onClick={moveRobot}>Move</button>
          <button onClick={() => turnRobot("Left")}>Left</button>
          <button onClick={() => turnRobot("Right")}>Right</button>
          <label>Place input: X, Y, North/South/East/West </label>
          <div className="set-robot">
            <input
              placeholder="X, Y, Direction"
              value={placeInput}
              onChange={(e) => setPlaceInput(e.target.value)}
              style={{ textAlign: "center" }}
            />
            <button onClick={handlePlace}>Place Robot</button>
          </div>
        </div>
        <div className="report-position">
          <label>Current Position: </label>
          <input
            placeholder="X, Y, Direction"
            readOnly
            value={
              robotState
                ? `${robotState.position.x},${
                    robotState.position.y
                  },${directionToArrow(robotState.direction)}`
                : ""
            }
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
