import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 5,
        width: '97%',
        backgroundColor: '#FF004F',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#FF004F',
        marginLeft: 5,
        marginRight: 5
    }
}

export { Button }
