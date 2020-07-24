import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert } from 'react-native';
import axios from 'axios';

const Chore = ({ chore }) => {

  return (
      <Text style={{paddingTop: 10}}>
        {chore.chore} by {chore.dueDate}
      </Text>

  )
}

export default Chore;
