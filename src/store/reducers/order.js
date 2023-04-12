import { FETCH_ORDER } from "../actions/actionTypes"

const initialState = {
  task: []
}

// REDUCER
const order = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return action.payload
    default:
      return state
  }
}

export default order