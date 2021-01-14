import React from 'react'
import { Stop } from '../types'

interface StopProps {
  stop: Stop,
  chooseStop: (id: number) => void
}

const StopComponent: React.FC<StopProps> = ({stop, chooseStop}) => {
  return (
    <div className="mb-4">
      <button className="btn-primary" onClick={() => chooseStop(stop.id)}>
        {stop.attributes.name}
      </button>
    </div>
  )
}

export { StopComponent }
