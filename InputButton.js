
import React, {Component} from 'react';
import Styles from './Styles';
import {
  View,
  Text,
  TouchableHighlight
}from 'react-native';

export default class InputButton extends Component {

  render() {
    return (
      <TouchableHighlight style={Styles.inputButton}
        underlayColor="#193441"
        onPress={this.props.onPress}>
        <Text style={Styles.inputButtonText}> {this.props.Value} </Text>
      </TouchableHighlight>
    )
  }
}
