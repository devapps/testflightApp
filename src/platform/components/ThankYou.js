import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class ThankYou extends Component {

  render() {
    const { pageStyle, imageStyle, footerTextStyle, subtitleTextStyle, footerStyle, thankYouSectionStyle, thankYouTextStyle, signatureTextStyle } = styles

    return (
      <View style={pageStyle}>
        <View style={footerStyle}>
          <Image
            style={imageStyle}
            source={require('../../images/logo-blue.png')}
          />
          <Text style={footerTextStyle}>TEST FLIGHT</Text>
          <Text style={subtitleTextStyle}>a launchpad for innovation</Text>
        </View>
        <View style={thankYouSectionStyle}>
          <View>
            <Text style={thankYouTextStyle}>Thank you!</Text>
            <Text style={signatureTextStyle}>-the innovation team</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    backgroundColor: '#FF004F',
    justifyContent: 'flex-end'
  },
  imageStyle: {
    height: 75,
    width: 40
  },
  footerTextStyle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitleTextStyle: {
    color: '#25324F',
    fontSize: 12,
    textAlign: 'center'
  },
  footerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  thankYouSectionStyle: {
    position: 'absolute',
    top: '33%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#25324F',
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center'
  },
  thankYouTextStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center'
  },
  signatureTextStyle: {
    color: '#FFF',
    fontSize: 11,
    textAlign: 'center'
  }
}

export default ThankYou
