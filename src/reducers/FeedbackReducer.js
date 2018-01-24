import {
  PAINGAIN_INPUT_UPDATE,
  SIMPLE_INPUT_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  painGain: null,
  simple: null,
  change: '',
  nextSteps: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAINGAIN_INPUT_UPDATE:
      return action.payload
    case SIMPLE_INPUT_UPDATE:
      return action.payload
    default:
      return state

  }
}
