import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Chore from './Chore.js';

class Chores extends Component {
  constructor(props){
    super(props)
    this.state = {
      chore: '',
      dueDate: ''
    }
  }

  handleChore = (text) => {
    this.setState({chore: text})
  }

  handleDate = (text) => {
    this.setState({dueDate: text})
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, padding: 50, justifyContent: 'center' }}>
          {this.props.chores.map(chore => {
            return (
              <Chore key={chore.id} chore={chore} />
            )
          })}
        </View>

        <View style = {styles.container}>
          <Text>Add new item</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Chore"
            onChangeText={this.handleChore}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Due Date"
            onChangeText={this.handleDate}
          />

          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.props.addChore([this.state.chore, this.state.dueDate])
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </>

    );
  }

}

export default Chores;


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