import {
  TEST_PILOT_UPDATE
} from './types'

export const testPilotUpdate = ({ id, first_name, last_name, prototypeId, name, userStory }) => {
  return {
    type: TEST_PILOT_UPDATE,
    payload: { id, first_name, last_name, prototypeId, name, userStory }
  }
}
