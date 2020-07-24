import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Event from './Event.js';

class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
      event: '',
      date: ''
    }
  }

  handleEvent = (text) => {
    this.setState({event: text})
  }

  handleDate = (text) => {
    this.setState({date: text})
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, padding: 50, justifyContent: 'center' }}>
          {this.props.events.map(event => {
            return (
              <Event key={event.id} event={event} />
            )
          })}
        </View>

        <View style = {styles.container}>
          <Text>Add Event</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Event"
            onChangeText={this.handleEvent}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Date"
            onChangeText={this.handleDate}
          />

          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.props.addEvent([this.state.event, this.state.date])
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </>

    );
  }

}

export default Events;

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