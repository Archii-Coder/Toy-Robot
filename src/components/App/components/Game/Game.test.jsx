import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

test("renders board", () => {
  render(<Game />);
  expect(screen.getByRole("grid", { name: "Board" })).toBeInTheDocument();
});

test("renders commands", () => {
  render(<Game />);

  expect(screen.getByRole("button", { name: "Place" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Move" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Left" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Right" })).toBeInTheDocument();
});

test("places robot", async () => {
  const user = userEvent.setup();

  render(<Game />);

  expect(screen.queryByTestId("placement")).not.toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Place" }));

  expect(screen.getByTestId("placement")).toBeInTheDocument();
  expect(screen.getByTestId("placement")).toHaveStyle({
    top: "0px",
    left: "0px",
    transform: "rotate(0deg)",
  });
});

test("turns and moves robot", async () => {
  const user = userEvent.setup();

  render(<Game />);

  await user.click(screen.getByRole("button", { name: "Place" }));
  await user.click(screen.getByRole("button", { name: "Right" }));
  await user.click(screen.getByRole("button", { name: "Move" }));

  expect(screen.getByTestId("placement")).toHaveStyle({
    top: "0px",
    left: "60px",
    transform: "rotate(90deg)",
  });
})
