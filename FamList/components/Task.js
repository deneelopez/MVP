import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert } from 'react-native';
import axios from 'axios';

const Task = ({ task }) => {
  // console.log('user', users[task.userID]);
  return (
      <Text style={{paddingTop: 10}}>
        {task.task} by {task.dueDate}
      </Text>

  )
}

export default Task;
