/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Styles from './Styles';
import InputButton from './InputButton';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const inputButtons = [
  [1,2,3,'/'],
  [4,5,6,'*'],
  [7,8,9,'-'],
  [0,'.','=','+']
];

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.displayContainer}></View>
        <View style={Styles.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }
  _renderInputButtons() {
          let views = [];

          for (var r = 0; r < inputButtons.length; r ++) {
              let row = inputButtons[r];

              let inputRow = [];
              for (var i = 0; i < row.length; i ++) {
                  let input = row[i];

                  inputRow.push(
                      <InputButton value={input} key={r + "-" + i} />
                  );
              }

              views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
          }

          return views;
      }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
