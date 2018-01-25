import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './experience1/components/LoginForm'

//platform scenes
import Loading from './platform/components/Loading'
import UserStory from './platform/components/UserStory'
import AppLogin from './platform/components/AppLogin'
import Feedback from './platform/components/Feedback'
import ThankYou from './platform/components/ThankYou'
import NoExperiencesToReview from './platform/components/NoExperiencesToReview'

//experience1 scenes
import EmployeeList from './experience1/components/EmployeeList'
import EmployeeCreate from './experience1/components/EmployeeCreate'
import EmployeeEdit from './experience1/components/EmployeeEdit'

//experience2 scenes
import AlbumShopping from './experience2/components/AlbumShopping'
import AlbumDetail from './experience2/components/AlbumDetail'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='root'>
        <Scene key='load' initial>
          <Scene key='loading' component={Loading} title='Loading Test Flight'/>
        </Scene>
        <Scene key='authenticate'>
          <Scene key='appLogin' component={AppLogin} title='Test Flight Login' />
        </Scene>
        <Scene key='context'>
          <Scene key='userStory' component={UserStory} title='Experience Context'/>
        </Scene>
        <Scene key='experience1'>
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
        <Scene key='experience2'>
          <Scene key='albumShopping' component={AlbumShopping} title='Album Shopping' />
        </Scene>
        <Scene key='feedbackSection'>
          <Scene key='feedback' component={Feedback} title='Experience Feedback' />
        </Scene>
        <Scene key='thankYouSection'>
          <Scene key='thankYou' component={ThankYou} showNavigationBar={false} />
        </Scene>
        <Scene key='noExperiences'>
          <Scene key='noExperiencesToReview' component={NoExperiencesToReview} showNavigationBar={false} />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
