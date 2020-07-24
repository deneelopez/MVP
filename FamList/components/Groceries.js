import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Grocery from './Grocery.js';

class Groceries extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      quantity: ''
    }
  }

  handleItem = (text) => {
    this.setState({item: text})
  }

  handleQuantity = (text) => {
    this.setState({quantity: text})
  }

  render() {
    return (
      <>
        <View style={{ padding: 50, flex: 1, justifyContent: 'center' }}>
          {this.props.groceries.map(grocery => {
            return (
              <Grocery key={grocery.id} grocery={grocery} />
            )
          })}
        </View>

        <View style = {styles.container}>
          <Text>Add new item</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Quantity"
            onChangeText={this.handleQuantity}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Item"
            onChangeText={this.handleItem}
          />

          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.props.addGrocery([this.state.quantity, this.state.item])
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </>

    );
  }

}

export default Groceries;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     padding: 50
  },
  input: {
     margin: 15,
     height: 40,
     width: 100,
     borderColor: 'darkslategrey',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: 'olivedrab',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})