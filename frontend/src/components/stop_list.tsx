import React, { useEffect, useState } from 'react'
import { StopComponent } from './stop'
import { Stop } from '../types'
import { MbtaApiClient } from '../lib/mbta_api_client'

interface StopListProps {
  chooseStop: (id: number) => void;
}

const limit = 10;

const StopList: React.FC<StopListProps> = ({chooseStop}) => {
  const [stops, setStops] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    MbtaApiClient.fetchStops(limit, offset, json => setStops(json.data))
  }, [offset, chooseStop])
  return (
    <div>
      <h1>Stops</h1>
      {stops.map((stop: Stop) => {
          <StopComponent stop={stop} key={stop.id} chooseStop={chooseStop}></StopComponent>
        })}
      {offset > 0 &&
        <button onClick={() => setOffset(offset - limit)}>Previous</button>}
      <button onClick={() => setOffset(offset + limit)}>Next</button>
    </div>
  )
}

export { StopList }
