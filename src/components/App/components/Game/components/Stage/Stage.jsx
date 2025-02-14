import Placement from "./components/Placement";
import Robot from "./components/Robot";
import Board from "./components/Board";

const Stage = ({ robotCoordinate }) => {
  return (
    <div className="relative">
      {robotCoordinate && (
        <Placement coordinate={robotCoordinate}>
          <Robot />
        </Placement>
      )}
      <Board />
    </div>
  );
};

export default Stage;
