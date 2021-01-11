import { useReducer } from 'react'
import { eventReducer } from '../reducers'
import { AppContext } from '../contexts/AppContext'

import { Events } from '../components/Events'
import { EventForm } from '../components/EventForm'

export const App = () => {
  const [events, dispatch] = useReducer(eventReducer, [])

  return (
    <AppContext.Provider value={{ events, dispatch }}>
      <div className="container-fluid p-5">
        <EventForm className="mb-5" />
        <Events className="mb-5" />
      </div>
    </AppContext.Provider>
  )
}
