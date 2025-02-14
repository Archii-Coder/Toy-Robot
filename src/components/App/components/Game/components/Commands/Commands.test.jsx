import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, vi } from "vitest"
import Commands from "./Commands"

test('calls onPlace on Place button clicked', async () => {
  const onPlace = vi.fn()
  const onMove = vi.fn()
  const onLeft = vi.fn()
  const onRight = vi.fn()

  const user = userEvent.setup()

  render(<Commands onPlace={onPlace} onMove={onMove} onRight={onRight} onLeft={onLeft} />)
  
  expect(screen.getByRole('button', { name: 'Place' })).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'Place' }))

  expect(onPlace).toHaveBeenCalled()
})
