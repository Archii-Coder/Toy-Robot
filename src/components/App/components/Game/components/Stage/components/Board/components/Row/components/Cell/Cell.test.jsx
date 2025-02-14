import { render, screen } from "@testing-library/react";
import Cell from "./Cell";

test("renders Cell", () => {
  render(<Cell x={1} y={0} />);

  expect(
    screen.getByRole("gridcell", { name: "Cell 1, 0" })
  ).toBeInTheDocument();
});
