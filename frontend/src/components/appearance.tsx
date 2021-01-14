import React from 'react'
import { Appearance } from '../types'

interface AppearanceProps {
  appearance: Appearance;
}

const AppearanceComponent: React.FC<AppearanceProps> = ({appearance}) => {
  return (
    <div className="mb-4">
      <table>
        <tr>
          <span>Arrival: {appearance.attributes.arrival_time}</span>
        <tr>
        </tr>
          <span>Departure: {appearance.attributes.departure_time}</span>
        </tr>
        <tr>
          <span>Direction: {appearance.attributes.direction_id}</span>
        </tr>
      </table>
    </div>
  )
}

export { AppearanceComponent }
