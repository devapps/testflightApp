import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AsyncStorage, View } from 'react-native'
import { FIREBASE_API_KEY } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'
import { ShakeMessageConfirm } from './platform/components/common'


class App extends Component {

  async componentWillMount() {
    const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: "manager-7c65b.firebaseapp.com",
      databaseURL: "https://manager-7c65b.firebaseio.com",
      projectId: "manager-7c65b",
      storageBucket: "manager-7c65b.appspot.com",
      messagingSenderId: "570495185896"
    };
    firebase.initializeApp(config);

    await AsyncStorage.setItem('id', '3')

    setTimeout(() => {
      Actions.feedbackSection()
    }, 38000)
  }

  onOk() {
    Actions.feedbackSection()
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
        <Provider store={store}>
          <Router />
        </Provider>

    )
  }
}

export default App
