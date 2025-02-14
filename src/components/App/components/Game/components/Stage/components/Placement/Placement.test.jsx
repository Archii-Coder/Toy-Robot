import { render, screen } from "@testing-library/react";
import Placement from "./Placement";

test("renders placement children", () => {
  render(
    <Placement coordinate={{ x: 1, y: 2, f: "N" }}>
      <div>Hello world</div>
    </Placement>
  );

  expect(screen.getByTestId("placement")).toHaveTextContent("Hello world");
});

test("renders placement at the correct position", () => {
  render(
    <Placement coordinate={{ x: 1, y: 2, f: "N" }}>
      <div>Hello world</div>
    </Placement>
  );

  expect(screen.getByTestId("placement")).toHaveStyle({
    top: "120px",
    left: "60px",
    transform: "rotate(0deg)",
  });
});
