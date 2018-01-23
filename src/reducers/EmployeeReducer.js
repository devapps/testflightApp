import  {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  id: null,
  first_name: null,
  last_name: null,
  prototypeId: null,
  name: null,
  userStory: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, id, first_name, last_name, prototypeId, name, userStory }
    default:
      return state

  }
}
