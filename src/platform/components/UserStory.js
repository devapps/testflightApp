import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


class UserStory extends Component {
  componentDidMount() {
    //grab the right route from async storage
    AsyncStorage.getItem('id')
      .then(result => {
        setTimeout(() => {
          if(result === '1'){
            Actions.experience001()
          }else{
            Actions.main()
          }
        }, 5000)
      })
  }

  render() {
    return (
      <View>
        <Text>UserStory</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.testPilot);

  return state.testPilot
}

export default connect(mapStateToProps, null)(UserStory)
