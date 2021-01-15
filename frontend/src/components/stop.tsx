import React from 'react'
import { Stop } from '../types'

interface StopProps {
  stop: Stop,
  chooseStop: (stop: Stop) => void
}

const StopComponent: React.FC<StopProps> = ({stop, chooseStop}) => {
  return (
    <div className="mb-3">
      <button className="btn btn-info" onClick={() => chooseStop(stop)}>
        {stop.attributes.name}
      </button>
    </div>
  )
}

export { StopComponent }
