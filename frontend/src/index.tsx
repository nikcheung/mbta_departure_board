import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { StopList } from './components/stop_list'
import { DepartureBoard } from './components/departure_board'
import { Stop } from './types'

const App = () => {
  // maybe i would rather use a router or something to switch pages
  const [stop, setStop] = useState(null)
  const chooseStop = (stop: Stop) => setStop(stop)
  const clearStop = () => setStop(null)
  return (
    <div className="container mt-4">
      { stop ? (
        <DepartureBoard stop={stop} backToList={clearStop}/>
       ) : (
        <StopList chooseStop={chooseStop}></StopList>
       ) }
    </div>
  )
}

const root = document.getElementById('app')
ReactDOM.render(<App />, root)