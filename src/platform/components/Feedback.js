import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, BlueButton } from './common'
import { painGainInputUpdate, simpleInputUpdate } from '../../actions'

class Feedback extends Component {
  state = {
    painGain: null,
    simple: null,
    changeRequest: '',
    nextSteps: ''
  }

  handleSubmit() {
    const { painGain, simple, changeRequest, nextSteps } = this.state
    console.log(this.props);
  }

  updateLocalState(input) {
    this.setState(input)
  }

  renderGainYesThumbs() {
    const{ yesThumbImageStyle } = styles
    if(this.state.painGain){
      return (
        <TouchableWithoutFeedback onPress={() => this.updateLocalState({ painGain: true })}>
          <Image
            style={yesThumbImageStyle}
            source={require('../../images/thumb-blue.png')}
          />
        </TouchableWithoutFeedback>
      )
    }else{
        return (
          <TouchableWithoutFeedback onPress={() => this.updateLocalState({ painGain: true })}>
            <Image
              style={yesThumbImageStyle}
              source={require('../../images/thumb-white.png')}
            />
          </TouchableWithoutFeedback>
        )
      }
    }

  renderGainNoThumbs() {
    const { noThumbImageStyle } = styles
    if(this.state.painGain === false){
      return (
        <TouchableWithoutFeedback onPress={() => this.updateLocalState({ painGain: false })}>
          <Image
            style={noThumbImageStyle}
            source={require('../../images/thumb-blue.png')}
          />
        </TouchableWithoutFeedback>
      )
    }else{
        return (
          <TouchableWithoutFeedback onPress={() => this.updateLocalState({ painGain: false })}>
            <Image
              style={noThumbImageStyle}
              source={require('../../images/thumb-white.png')}
            />
          </TouchableWithoutFeedback>
        )
      }
    }

    renderSimpleYesThumbs() {
      const{ yesThumbImageStyle } = styles
      if(this.state.simple){
        return (
          <TouchableWithoutFeedback onPress={() => this.updateLocalState({ simple: true })}>
            <Image
              style={yesThumbImageStyle}
              source={require('../../images/thumb-blue.png')}
            />
          </TouchableWithoutFeedback>
        )
      }else{
          return (
            <TouchableWithoutFeedback onPress={() => this.updateLocalState({ simple: true })}>
              <Image
                style={yesThumbImageStyle}
                source={require('../../images/thumb-white.png')}
              />
            </TouchableWithoutFeedback>
          )
        }
      }

    renderSimpleNoThumbs() {
      const { noThumbImageStyle } = styles
      if(this.state.simple === false){
        return (
          <TouchableWithoutFeedback onPress={() => this.updateLocalState({ simple: false })}>
            <Image
              style={noThumbImageStyle}
              source={require('../../images/thumb-blue.png')}
            />
          </TouchableWithoutFeedback>
        )
      }else{
          return (
            <TouchableWithoutFeedback onPress={() => this.updateLocalState({ simple: false })}>
              <Image
                style={noThumbImageStyle}
                source={require('../../images/thumb-white.png')}
              />
            </TouchableWithoutFeedback>
          )
        }
      }

  render() {
    const { pageStyle, titleStyle, sectionStyle, thumbTextStyle, textInputStyle, smallTextInputStyle } = styles

    return (
      <View style={pageStyle}>
        <ScrollView>
          {/* <Text style={titleStyle}>TELL US WHAT YOU THINK</Text> */}
          <View style={sectionStyle}>
            <Text style={thumbTextStyle}>This experience provides a gain or removes a gain for the target user(s):</Text>
            <View style={{ flexDirection: 'row'}}>
              {this.renderGainYesThumbs()}
              {this.renderGainNoThumbs()}
            </View>
          </View>
          <View style={sectionStyle}>
            <Text style={thumbTextStyle}>This experience was simple and intuitive for our target users(s) to accomplish their goal:</Text>
            <View style={{ flexDirection: 'row' }}>
              {this.renderSimpleYesThumbs()}
              {this.renderSimpleNoThumbs()}
            </View>
          </View>
          <View style={sectionStyle}>
            <Text style={thumbTextStyle}>What would you change about this experience?</Text>
            <TextInput
              style={textInputStyle}
              multiline={true}
              numberOfLines={5}
              editable={true}
              maxLength={240}
              onChangeText={(text) => this.setState({ changeRequest: text })}
              value={this.state.changeRequest}
            />
          </View>
          <View style={sectionStyle}>
            <Text style={thumbTextStyle}>What next steps would you like to see?</Text>
            <TextInput
              style={smallTextInputStyle}
              multiline={true}
              numberOfLines={4}
              editable={true}
              maxLength={140}
              onChangeText={(text) => this.setState({ nextSteps: text })}
              value={this.state.nextSteps}
            />
          </View>
        </ScrollView>
        <BlueButton onPress={() => this.handleSubmit()}>
          Submit Feedback
        </BlueButton>
      </View>
    )
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    backgroundColor: '#FF004F',
  },
  titleStyle: {
    fontSize: 22,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25
  },
  sectionStyle:{
    flexDirection: 'column',
    width: '90%',
    marginTop: 40,
    marginLeft: '5%',
    alignItems: 'center'
  },
  thumbTextStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  yesThumbImageStyle: {
    height: 70,
    width: 70,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  noThumbImageStyle: {
    height: 70,
    width: 70,
    marginLeft: 20,
    transform: [{rotateX: '180deg'}, {rotateY: '180deg'}],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  textInputStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 2,
    marginTop: 10,
    padding: 5
  },
  smallTextInputStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 2,
    marginTop: 10,
    padding: 5
  }
}

const mapStateToProps = state => {
  console.log(state.testPilot);
  return state.testPilot
}

export default connect(mapStateToProps, { painGainInputUpdate, simpleInputUpdate })(Feedback)
