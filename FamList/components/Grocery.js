import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Alert } from 'react-native';
import axios from 'axios';

const Grocery = ({ grocery }) => {
  return (
    <>
      <Text style={{paddingTop: 10}}>
        {grocery.quantity}  {grocery.item}
      </Text>

    </>
  )
}

export default Grocery;
