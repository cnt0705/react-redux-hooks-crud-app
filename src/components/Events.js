import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

import { Event } from '../components/Event'

export const Events = ({ className }) => {
  const { state } = useContext(AppContext)

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
          {state.events.map(event => (
            <Event key={event.id} event={event} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
