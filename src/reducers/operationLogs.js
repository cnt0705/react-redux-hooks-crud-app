import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'

export const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
    case DELETE_ALL_OPERATION_LOGS:
      const log = action.payload
      return [log, ...state]

    default:
      return state
  }
}
