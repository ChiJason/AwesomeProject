/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import Styles from './Styles';
import InputButton from './InputButton';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

const inputButtons = [
  [1,2,3,'/'],
  [4,5,6,'*'],
  [7,8,9,'-'],
  [0,'.','=','+']
];

class AwesomeProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      previousInputValue:0,
      inputValue:0,
      selectedSymbol: null
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.displayContainer}>
          <Text style={Styles.displayText}>{this.state.inputValue}</Text>
        </View>
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
                      <InputButton value={input}
                        hightlight={this.state.selectedSymbol === input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r + "-" + i} />
                  );
              }

              views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
          }

          return views;
      }

      _onInputButtonPressed(input){
        switch (typeof input) {
          case 'number':
            return this._handleNumberInput(input);
            break;
          case 'string':
            return this._handleStringInput(input);
            break;
          default:

        }
      }

   _handleNumberInput(num) {
       let inputValue = (this.state.inputValue * 10) + num;

       this.setState({
           inputValue: inputValue
       })
   }

   _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                inputValue = this.state.inputValue,
                previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
        }
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
