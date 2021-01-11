import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

import { OperationLog } from './OperationLog'

export const OperationLogs = ({ className }) => {
  const { state } = useContext(AppContext)

  return (
    <section className={className}>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">内容</th>
            <th scope="col">日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => (
            <OperationLog key={index} operationLog={log} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
