import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testPilotUpdate } from '../../actions'
import { View, AsyncStorage, Animated, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 4500,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class Loading extends Component {
  async componentDidMount() {
    const tempId = await AsyncStorage.getItem('id')
    if(!tempId){
      Actions.authenticate()
    }else{
      const userJson = await fetch(`http://localhost:3000/api/users/${tempId}`)
      const user = await userJson.json()
      const { id, first_name, last_name, prototype_id, image } = user.users
      const prototypeJson = await fetch(`http://localhost:3000/api/prototypes/${prototype_id}`)
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
        <FadeInView>
          <Image
            style={imageStyle}
            source={require('../../images/logo-blue.png')}
          />
        </FadeInView>
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
