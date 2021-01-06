export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = action.payload
      const id = state.length === 0 ? 1 : state.slice(-1)[0].id + 1
      return [...state, { id, ...event }]

    case 'DELETE_EVENT':
      return state

    case 'DELETE_ALL_EVENTS':
      return []

    default:
      return state
  }
}
