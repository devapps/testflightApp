// Import library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from './AlbumList'


// Create component
class AblumShopping extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
    this.setState({ showModal: !this.state.showModal })
  }

  onOk() {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AlbumList />
        <ShakeMessage
          visible={this.state.showModal}
          onAccept={this.onOk.bind(this)}
        >
          When you are finished, simply shake your phone and we'll take you out of the experience. Enjoy!
        </ShakeMessage>
      </View>
    )
  }
}

export default AlbumList
