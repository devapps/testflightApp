import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Feedback extends Component {

  loadPage() {
    Actions.thankYouSection()
  }

  render() {
    return (
      <Text onPress={() => this.loadPage()}>Feedback</Text>
    )
  }
}

export default Feedback
