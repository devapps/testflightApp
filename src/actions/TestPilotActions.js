import {
  TEST_PILOT_UPDATE
} from './types'

export const testPilotUpdate = ({ id, first_name, last_name, prototype_id, name, userStory, image }) => {
  return {
    type: TEST_PILOT_UPDATE,
    payload: { id, first_name, last_name, prototype_id, name, userStory, image }
  }
}
