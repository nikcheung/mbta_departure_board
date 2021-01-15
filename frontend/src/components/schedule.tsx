import React from 'react'
import { Schedule, Route, Vehicle, Prediction } from '../types'

interface ScheduleProps {
  schedule: Schedule;
  routes: Route[];
  vehicles: Vehicle[];
  predictions: Prediction[];
}

function getStatus(prediction: Prediction, scheduledDepartureTime: Date): string {
  if (!prediction) return "UNKNOWN";
  return new Date(prediction.attributes.departure_time) <= scheduledDepartureTime ? "ON TIME" : "DELAYED";
}

// would like to have redux instead of passing these lists
const ScheduleComponent: React.FC<ScheduleProps> = ({ schedule, routes, vehicles, predictions }) => {
  const tripId = schedule.relationships.trip.data.id
  const route = routes.find(route => route.id == schedule.relationships.route.data.id);
  const vehicle = vehicles.find(vehicle => vehicle.relationships.trip.data.id == tripId);
  const prediction = predictions.find(prediction => prediction.relationships.trip.data.id == tripId);
  
  const direction_id = schedule.attributes.direction_id;
  const direction = route?.attributes.direction_names[direction_id];
  const destination = route?.attributes.direction_destinations[direction_id];
  const status = getStatus(prediction, schedule.attributes.departure_time);

  return (
    <tr>
      <td>{schedule.attributes.departure_time.toDateString()}</td>
      <td>{schedule.attributes.departure_time.toLocaleTimeString("en-US")}</td>
      <td>{direction}</td>
      <td>{destination}</td>
      <td>{vehicle?.attributes.label}</td>
      <td>{status}</td>
    </tr>
  )
}

export { ScheduleComponent }
