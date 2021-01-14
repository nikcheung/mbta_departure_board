import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { StopList } from './components/stop_list'
import { DepartureBoard } from './components/departure_board'

const App = () => {
  // maybe i would rather use a router or something to switch pages
  const [stopId, setStopId] = useState(0)
  const chooseStop = (id: number) => setStopId(id)
  const clearStop = () => setStopId(0)
  return (
    <div>
      { stopId > 0 ? (
        <DepartureBoard stopId={stopId} backToList={clearStop}/>
       ) : (
        <StopList chooseStop={chooseStop}></StopList>
       ) }
    </div>
  )
}

const root = document.getElementById('app')
ReactDOM.render(<App />, root)