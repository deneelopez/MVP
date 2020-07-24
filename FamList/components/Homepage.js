import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert } from 'react-native';
import axios from 'axios';
// import Chores from './Chores.jsx';
// import Events from './Eventsjsx';
// import Groceries from './Groceries.jsx';
// import Tasks from './Tasks.jsx';

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Homepage
        </Text>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')}/>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')}/>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')}/>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')}/>
      </View>
    );
  }

}

export default Homepage;