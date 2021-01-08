export const Event = ({ event, deleteEvent }) => {
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
