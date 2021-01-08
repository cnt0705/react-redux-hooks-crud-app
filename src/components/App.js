import { useReducer, useState } from 'react'
import { eventReducer } from '../reducers'

export const App = () => {
  const [state, dispatch] = useReducer(eventReducer, [])
  const [form, setForm] = useState({ title: '', body: '' })

  const addEvent = e => {
    e.preventDefault()
    dispatch({ type: 'CREATE_EVENT', payload: form })
    setForm({ title: '', body: '' })
  }

  const deleteEvent = id => {
    dispatch({ type: 'DELETE_EVENT', payload: { id } })
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  return (
    <div className="container-fluid p-5">
      <section className="mb-5">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              type="text"
              className="form-control"
              id="formEventTitle"
              value={form.title}
              onChange={e => setForm(form => ({ ...form, title: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea
              className="form-control"
              id="formEventBody"
              value={form.body}
              onChange={e => setForm(form => ({ ...form, body: e.target.value }))}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-3" onClick={addEvent}>
            イベントを作成する
          </button>
          <button type="submit" className="btn btn-danger mr-3" onClick={deleteAllEvents}>
            すべてのイベントを削除する
          </button>
        </form>
      </section>

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
            {state.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteEvent(event.id)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
