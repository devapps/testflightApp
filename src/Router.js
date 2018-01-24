import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './experience001/components/LoginForm'

//platform scenes
import Loading from './platform/components/Loading'
import UserStory from './platform/components/UserStory'
import AppLogin from './platform/components/AppLogin'
import Feedback from './platform/components/Feedback'
import ThankYou from './platform/components/ThankYou'
import NoExperiencesToReview from './platform/components/NoExperiencesToReview'

//experience001 scenes
import EmployeeList from './experience001/components/EmployeeList'
import EmployeeCreate from './experience001/components/EmployeeCreate'
import EmployeeEdit from './experience001/components/EmployeeEdit'

//experience002 scenes
import AlbumShopping from './experience002/components/AlbumShopping'
import AlbumDetail from './experience002/components/AlbumDetail'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='root'>
        <Scene key='load' initial>
          <Scene key='loading' component={Loading} title='Loading'/>
        </Scene>
        <Scene key='authenticate'>
          <Scene key='appLogin' component={AppLogin} title='Test Flight Login' />
        </Scene>
        <Scene key='context'>
          <Scene key='userStory' component={UserStory} title='Experience Context'/>
        </Scene>
        <Scene key='experience001'>
          <Scene key='auth' >
            <Scene key='login' component={LoginForm} title='Please Login' initial />
          </Scene>
          <Scene key='main'>
            <Scene
              rightTitle='Add'
              onRight={() => Actions.employeeCreate()}
              key='employeeList'
              component={EmployeeList}
              title='Employees'
              initial
            />
          </Scene>
          <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
          <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
        </Scene>
        <Scene key='experience002'>
          <Scene key='albumShopping' component={AlbumShopping} title='Album Shopping' />
        </Scene>
        <Scene key='feedbackSection'>
          <Scene key='feedback' component={Feedback} title='Experience Feedback' />
          <Scene key='thankYou' component={ThankYou} title='Thank You' />
        </Scene>
        <Scene key='noExperiences'>
          <Scene key='noExperiencesToReview' component={NoExperiencesToReview} showNavigationBar={false} />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
