import { render, screen } from '@testing-library/react'
import Map from '.'

describe('Map', () => {
  it('It should render without anyt marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('It should render marker in correct place ', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latittude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)
    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
  })
})
