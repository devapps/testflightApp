import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HEROKU } from 'react-native-dotenv'
import { testPilotUpdate } from '../../actions'
import { View, AsyncStorage, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'

class Loading extends Component {
  async componentDidMount() {
    const tempId = await AsyncStorage.getItem('id')
    if(!tempId){
      Actions.authenticate()
    }else{
      const userJson = await fetch(`${HEROKU}/users/${tempId}`)
      const user = await userJson.json()
      const { id, first_name, last_name, prototype_id, image } = user.users
      const prototypeJson = await fetch(`${HEROKU}/prototypes/${prototype_id}`)
      const prototype = await prototypeJson.json()
      const { name, description, userStory } = prototype.prototypes
      this.props.testPilotUpdate({ id, first_name, last_name, prototype_id, image, name, userStory })
      setTimeout(() => {
        Actions.context()
      }, 4000)
    }

  }

  render() {
    const { pageStyle, imageStyle } = styles
    return (
      <View style={pageStyle}>
        <Animatable.Image
          animation="flipOutX"
          easing="ease-out"
          delay={3000}
          duration={1000}
          iterationCount={1}
          style={imageStyle}
          source={require('../../images/logo-blue.png')}
        />
      </View>

    )
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF004F'
  },
  imageStyle: {
    height: 300,
    width: 200
  }
}

export default connect(null, { testPilotUpdate })(Loading)
