import { useContext } from 'react'
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions'
import { AppContext } from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)

  const deleteEvent = id => {
    dispatch({ type: DELETE_EVENT, payload: { id } })
    dispatch({
      type: ADD_OPERATION_LOG,
      payload: {
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentIso8601(),
      },
    })
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
