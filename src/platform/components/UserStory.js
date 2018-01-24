import React, { Component } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import { Button } from './common'


class UserStory extends Component {

  handleStart(id) {
    Actions[`experience00${id}`]()
  }

  render() {
    const { first_name, name, userStory, prototype_id, image } = this.props.testPilot
    const { flexContainerStyle,pageStyle, greetingStyle, titleStyle, preambleStyle, contextStyle, buttonStyle, imageContainerStyle, imageStyle } = styles

    return (
      <View style={pageStyle}>
        <ScrollView>
          <View style={{ backgroundColor: '#fff' }}>
            <Text style={greetingStyle}>
              Hello, {first_name}:
            </Text>

            <View style={flexContainerStyle}>
              <View style={imageContainerStyle}>
                <Animatable.Image
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  style={imageStyle}
                  source={{ uri: image }}
                />
              </View>

              <View>
                <Text style={preambleStyle}>
                  Thank you for the taking the time to look at our new experience. Below is a little context for who you can keep in mind as you navigate around the prototype.
                </Text>
              </View>
            </View>
          </View>

          <Text style={titleStyle}>
            {name}
          </Text>
          <Text style={contextStyle}>
            {userStory}
          </Text>
        </ScrollView>

        <Button onPress={() => this.handleStart(prototype_id)}>
          Start Prototype
        </Button>
      </View>
    )
  }
}

const styles = {
  flexContainerStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  pageStyle:{
    backgroundColor: '#25324F',
    flex: 1
  },
  greetingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF004F',
    padding: 8
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#fff',
    padding: 8
  },
  preambleStyle: {
    fontSize: 14,
    marginBottom: 30,
    color: '#FF004F',
    padding: 8,
    flexWrap: 'wrap',
    paddingRight: 20,
    width: '25%',
    textAlign: 'justify'
  },
  contextStyle: {
    fontSize: 16,
    color: '#fff',
    padding: 8,
    lineHeight: 27,
    paddingBottom: 80
  },
  imageContainerStyle:{
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 23
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
}

const mapStateToProps = state => {
  return { testPilot: state.testPilot }
}

export default connect(mapStateToProps, null)(UserStory)
