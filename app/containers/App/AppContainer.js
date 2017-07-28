import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'

export default class AppContainer extends Component {
  static propTypes = {}
  state = {}
  render() {
    return (
      <View style={{flex: 1}}>
        <ReactModoroNavigator />
      </View>
    )
  }
}
