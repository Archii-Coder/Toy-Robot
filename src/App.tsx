import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import { Direction } from "./components/DeployRobot";
import Grids from "./components/Grids/Grids";
import ReportPosition from "./components/ReportPosition/ReportPosition";
import useRobot from "./components/UseRobot";

function App() {
  const { placeRobot, robotState, moveRobot, turnRobot } = useRobot();
  const [placeInput, setPlaceInput] = useState<string>("0 | 0 | NORTH");

  const handlePlace = () => {
    const [x, y, direction] = placeInput.split(" | ");
    placeRobot(Number(x), Number(y), direction as Direction);
  };

  return (
    <div className="page-view">
      <ReportPosition robotState={robotState} />

      <Grids robotState={robotState} />

      <ControlPanel
        placeInput={placeInput}
        setPlaceInput={setPlaceInput}
        handlePlace={handlePlace}
        moveRobot={moveRobot}
        turnRobot={turnRobot}
      />
    </div>
  );
}

export default App;
