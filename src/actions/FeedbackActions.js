import {
  PAINGAIN_INPUT_UPDATE,
  SIMPLE_INPUT_UPDATE
} from './types'

export const painGainInputUpdate = (input) => {
  console.log(input);
  return {
    type: PAINGAIN_INPUT_UPDATE,
    payload: { input }
  }
}

export const simpleInputUpdate = ({ input }) => {
  return {
    type: SIMPLE_INPUT_UPDATE,
    payload: { input }
  }
}
