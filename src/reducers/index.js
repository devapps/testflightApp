import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducer'
import EmployeeReducer from './EmployeeReducer'
import TestPilotReducer from './TestPilotReducer'

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  testPilot: TestPilotReducer
})
