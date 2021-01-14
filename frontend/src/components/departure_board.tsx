import React, { useEffect, useState } from 'react'
import { AppearanceComponent } from './appearance'
import { Appearance } from '../types'
import { MbtaApiClient } from '../lib/mbta_api_client'

interface DepartureBoardProps {
  stopId: number;
  backToList: () => void;
}

const DepartureBoard: React.FC<DepartureBoardProps> = ({stopId, backToList}) => {
  const [scheduleInfo, setScheduleInfo] = useState(null)
  useEffect(() => {
    MbtaApiClient.fetchSchedules(stopId, (json) => setScheduleInfo(json.data))
  }, [stopId, backToList])
  return (
    <div className="mb-4">
      {scheduleInfo &&
        scheduleInfo.map((appearance: Appearance) => <AppearanceComponent appearance={appearance} key={appearance.id}/>)
      }
      <button className="btn-secondary" onClick={backToList}>Back to list</button>
    </div>
  )
}

export { DepartureBoard }
