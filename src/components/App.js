import { useReducer } from 'react'
import { eventReducer } from '../reducers'

import { Event } from '../components/Event'
import { EventForm } from '../components/EventForm'

export const App = () => {
  const [events, dispatch] = useReducer(eventReducer, [])

  const deleteEvent = id => {
    dispatch({ type: 'DELETE_EVENT', payload: { id } })
  }

  return (
    <div className="container-fluid p-5">
      <EventForm events={events} dispatch={dispatch} />
      <section className="mb-5">
        <h4>イベント作成フォーム</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">タイトル</th>
              <th scope="col">ボディ</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <Event key={event.id} event={event} deleteEvent={deleteEvent} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
