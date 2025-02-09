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

  return (
    <div className="page-view">
      <div className="report-position">
        <label>Current Position: </label>
        <input
          placeholder="X | Y | Direction"
          readOnly
          value={
            robotState
              ? `${robotState.position.x} | ${robotState.position.y} | ${robotState.direction}`
              : ""
          }
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="map-body">
        <Grid robotState={robotState} />
      </div>
      <div className="control-panel">
        <label>DEPLOY INPUT FORMAT BELOW: </label>
        <label>X | Y | NORTH / SOUTH / EAST / WEST </label>
        <div className="set-robot">
          <input
            placeholder="X | Y | Direction"
            value={placeInput}
            onChange={(e) => setPlaceInput(e.target.value)}
            style={{ textAlign: "center" }}
          />
          <button onClick={handlePlace}>PLACE REBOT</button>
        </div>

        <div className="control-robot">
          <button onClick={() => turnRobot("Left")}>LEFT</button>
          <button onClick={moveRobot}>MOVE</button>
          <button onClick={() => turnRobot("Right")}>RIGHT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
