import React, { useEffect, useState } from 'react'
import { ScheduleComponent } from './schedule'
import { Schedule, Stop, Route } from '../types'
import { MbtaApiClient } from '../lib/mbta_api_client'

interface DepartureBoardProps {
  stop: Stop;
  backToList: () => void;
}

const DepartureBoard: React.FC<DepartureBoardProps> = ({stop, backToList}) => {
  // i want redux :(
  const [scheduleInfo, setScheduleInfo] = useState(null)
  const [routes, setRoutes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    MbtaApiClient.fetchRoutes(stop.id, (routeResult: Route[]) => {
      const route_ids = routeResult.map(route => route.id)
      MbtaApiClient.fetchVehicles(route_ids, vehicleResult => setVehicles(vehicleResult))
      setRoutes(routeResult)
    })
    MbtaApiClient.fetchPredictions(stop.id, result => setPredictions(result))
    MbtaApiClient.fetchSchedules(stop.id, schedules => setScheduleInfo(schedules))
  }, [stop, backToList])

  return (
    <div>
      <h1>Departures from {stop.attributes.name}</h1>
      <p>Current Time: {new Date().toLocaleTimeString(`en-US`)}</p>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Time:</th>
              <th>Direction:</th>
              <th>Destination:</th>
              <th>Vehicle Number:</th>
              <th>Status:</th>
            </tr>
            {scheduleInfo &&
              scheduleInfo.map((schedule: Schedule) => (
                <ScheduleComponent
                  schedule={schedule}
                  routes={routes}
                  vehicles={vehicles}
                  predictions={predictions}
                  key={schedule.id}
                />
                )
              )
            }
          </tbody>
        </table>
        <button className="btn btn-secondary" onClick={backToList}>Back to list</button>
      </div>
    </div>
  )
}

export { DepartureBoard }
