import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testPilotUpdate } from '../../actions'
import { View, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Spinner } from './common'

class Loading extends Component {
  async componentDidMount() {
    const tempId = await AsyncStorage.getItem('id')
    console.log(tempId);
    if(!tempId){
      Actions.authenticate()
    }else{
      const userJson = await fetch(`http://localhost:3000/api/users/${tempId}`)
      const user = await userJson.json()
      const { id, first_name, last_name, prototypeId } = user
      const prototypeJson = await fetch(`http://localhost:3000/api/prototypes/${prototypeId}`)
      const prototype = await prototypeJson.json()
      const { name, description, userStory } = prototype
      console.log(id, first_name, last_name, prototypeId, name, userStory);
      this.props.testPilotUpdate({ id, first_name, last_name, prototypeId, name, userStory })
      setTimeout(() => {
        Actions.context()
      }, 2000)
    }

    //delete this section
    // setTimeout(() => {
    //   Actions.context()
    // }, 2000)

  }

  render() {
    return (
      <View>
        <Spinner />
      </View>
    )
  }
}

export default connect(null, { testPilotUpdate })(Loading)
