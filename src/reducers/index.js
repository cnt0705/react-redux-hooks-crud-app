import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions'

export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = action.payload
      const nextId = state.length === 0 ? 1 : state.slice(-1)[0].id + 1
      return [...state, { ...event, id: nextId }]

    case DELETE_EVENT:
      const eventId = action.payload.id
      return state.filter(event => event.id !== eventId)

    case DELETE_ALL_EVENTS:
      return []

    default:
      return state
  }
}
