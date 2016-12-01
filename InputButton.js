
import React, {Component} from 'react';
import Styles from './Styles';
import {
  View,
  Text
}from 'react-native';

export default class InputButton extends Component {

  render() {
    return (
      <View style={Styles.inputButton}>
        <Text style={Styles.inputButtonText}>{this.props.Value}</Text>
      </View>
    )
  }
}
