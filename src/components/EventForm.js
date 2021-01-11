import { useState, useContext } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'
import { AppContext } from '../contexts/AppContext'

export const EventForm = ({ className }) => {
  const [form, setForm] = useState({ title: '', body: '' })
  const { state, dispatch } = useContext(AppContext)

  const emptyForm = !form.title || !form.body
  const noEvents = state.events.length <= 0

  const addEvent = e => {
    e.preventDefault()
    dispatch({ type: CREATE_EVENT, payload: form })
    setForm({ title: '', body: '' })
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    dispatch({ type: DELETE_ALL_EVENTS })
  }

  return (
    <section className={className}>
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
        <button
          type="submit"
          className="btn btn-primary mr-3"
          disabled={emptyForm}
          onClick={addEvent}
        >
          イベントを作成する
        </button>
        <button
          type="submit"
          className="btn btn-danger mr-3"
          disabled={noEvents}
          onClick={deleteAllEvents}
        >
          すべてのイベントを削除する
        </button>
      </form>
    </section>
  )
}
