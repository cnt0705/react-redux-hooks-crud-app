import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'

export const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const log = action.payload
      return [log, ...state]

    case DELETE_ALL_OPERATION_LOGS:
      return []

    default:
      return state
  }
}
