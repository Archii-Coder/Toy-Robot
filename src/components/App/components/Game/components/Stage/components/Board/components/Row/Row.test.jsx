import { render, screen } from "@testing-library/react"
import Row from "./Row"
import { test } from "vitest"

test('renders row', () => {
  render(<Row x={1} />)

  expect(
    screen.getByRole('row', { name: 'Row 1' })
  ).toBeInTheDocument()
})

test('renders cells', () => {
  render(<Row x={1} />)

  expect(
    screen.getByRole('gridcell', { name: 'Cell 1, 0' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('gridcell', { name: 'Cell 1, 1' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('gridcell', { name: 'Cell 1, 2' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('gridcell', { name: 'Cell 1, 3' })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('gridcell', { name: 'Cell 1, 4' })
  ).toBeInTheDocument()
})
