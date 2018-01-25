import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { RedButton } from './RedButton'

const ShakeMessageConfirm  = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle, buttonCardSectionStyle } = styles

  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
          <RedButton onPress={onAccept}>Yes</RedButton>
          <RedButton onPress={onDecline}>No</RedButton>
        </CardSection>

      </View>
    </Modal>
  )
}

const styles = {
  buttonCardSectionStyle: {
    justifyContent: 'center',
    width: '97%',
    alignSelf: 'center'
  },
  cardSectionStyle: {
    borderRadius: 3,
    justifyContent: 'center',
    width: '97%',
    alignSelf: 'center'
  },
  textStyle: {
    color: '#FF004F',
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 50
  },
  containerStyle: {
    backgroundColor: 'rgba(37,50,79, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { ShakeMessageConfirm }
