import React from "react";

interface ControlPanelProps {
  placeInput: string;
  setPlaceInput: (value: string) => void;
  handlePlace: () => void;
  moveRobot: () => void;
  turnRobot: (direction: "Left" | "Right") => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  placeInput,
  setPlaceInput,
  handlePlace,
  moveRobot,
  turnRobot,
}) => {
  return (
    <div className="control-panel">
      <label>DEPLOY INPUT FORMAT BELOW: </label>
      <label>X | Y | NORTH / SOUTH / EAST / WEST </label>
      <div className="set-robot">
        <input
          placeholder="X | Y | DIRECTION"
          value={placeInput}
          onChange={(e) => setPlaceInput(e.target.value)}
          style={{ textAlign: "center" }}
        />
        <button onClick={handlePlace}>PLACE ROBOT</button>
      </div>

      <div className="control-robot">
        <button onClick={() => turnRobot("Left")}>LEFT</button>
        <button onClick={moveRobot}>MOVE</button>
        <button onClick={() => turnRobot("Right")}>RIGHT</button>
      </div>
    </div>
  );
};

export default ControlPanel;
