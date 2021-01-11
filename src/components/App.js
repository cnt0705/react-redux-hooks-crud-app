import { useReducer } from 'react'
import { eventReducer } from '../reducers'

import { Events } from '../components/Events'
import { EventForm } from '../components/EventForm'

export const App = () => {
  const [events, dispatch] = useReducer(eventReducer, [])

  return (
    <div className="container-fluid p-5">
      <EventForm events={events} dispatch={dispatch} className="mb-5" />
      <Events events={events} dispatch={dispatch} className="mb-5" />
    </div>
  )
}
