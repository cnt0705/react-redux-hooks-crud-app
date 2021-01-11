import { Event } from '../components/Event'
import { DELETE_EVENT } from '../actions'

export const Events = ({ className, events, dispatch }) => {
  const deleteEvent = id => {
    dispatch({ type: DELETE_EVENT, payload: { id } })
  }

  return (
    <section className={className}>
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
  )
}
