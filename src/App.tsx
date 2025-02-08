import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grids";
import useRobot from "./hooks/useRobot";
import { Direction } from "./types";

function App() {
  // set up state and initialize robot with initial position and direction
  const { placeRobot, robotState, moveRobot, turnRobot, reportRobot } =
    useRobot();
  const [placeInput, setPlaceInput] = useState<string>("0,0,North");
  const [report, setReport] = useState<string>("");

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

  // handle state changes
  const handleReport = () => {
    setReport(reportRobot());
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
          <button onClick={handleReport}>Report</button>
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
        {report && (
          <div className="report-message">
            <p>{report}</p>
          </div>
        )}
        {/* <input
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
        <button onClick={handleReport}>Report</button> */}
      </div>
      {/* {robotState && <div className="report">{report}</div>}
      <Grid robotState={robotState} /> */}
    </div>
  );
}

export default App;
