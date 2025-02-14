import { render, screen } from "@testing-library/react"
import Board from "./Board";

test('renders Board', () => {
  render(<Board />)

  expect(screen.getByRole('grid', { name: 'Board' })).toBeInTheDocument();
})

test('renders Rows', () => {
  render(<Board />)

  expect(screen.getByRole('row', { name: 'Row 0' })).toBeInTheDocument();
  expect(screen.getByRole('row', { name: 'Row 1' })).toBeInTheDocument();
  expect(screen.getByRole('row', { name: 'Row 2' })).toBeInTheDocument();
  expect(screen.getByRole('row', { name: 'Row 3' })).toBeInTheDocument();
  expect(screen.getByRole('row', { name: 'Row 4' })).toBeInTheDocument();
});
