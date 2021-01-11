import { useContext } from 'react'
import { DELETE_EVENT } from '../actions'
import { AppContext } from '../contexts/AppContext'

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)

  const deleteEvent = id => {
    dispatch({ type: DELETE_EVENT, payload: { id } })
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => deleteEvent(event.id)}>
          削除
        </button>
      </td>
    </tr>
  )
}
