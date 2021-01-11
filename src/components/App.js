import { useReducer } from 'react'
import reducer from '../reducers'
import { AppContext } from '../contexts/AppContext'

import { Events } from '../components/Events'
import { EventForm } from '../components/EventForm'

export const App = () => {
  const initialState = { events: [] }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid p-5">
        <EventForm className="mb-5" />
        <Events className="mb-5" />
      </div>
    </AppContext.Provider>
  )
}
