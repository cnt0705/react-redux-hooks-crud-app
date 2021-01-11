export const OperationLog = ({ operationLog }) => (
  <tr>
    <td>{operationLog.description}</td>
    <td>{operationLog.operatedAt}</td>
  </tr>
)
