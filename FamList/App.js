import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
// import Homepage from './components/Homepage.js';
import Chores from './components/Chores.js';
import Events from './components/Events.js';
import Groceries from './components/Groceries.js';
import Tasks from './components/Tasks.js';

const Homepage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  fontSize: 36}}>
    <Text style={{fontSize: 48}}>
      Listly
    </Text>
    <Button title="Login" onPress={() => {console.log('clicked')}}/>
  </View>
  )
}

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: {},
      groceries: {},
      tasks: {},
      chores: {},
      events: {},

    };

    this.addGrocery = this.addGrocery.bind(this);
    this.addTask = this.addTask.bind(this);
    this.addChore = this.addChore.bind(this);
    this.addEvent = this.addEvent.bind(this);

  }

  componentDidMount() {
    this.getUsers();
    this.getGroceries();
    this.getTasks();
    this.getChores();
    this.getEvents();
  }

  getUsers(){
    var url = 'http://localhost:8008/family/users';
    axios.get(url)
    .then((response) => {
      // console.log('Axios get response', response.data);
      this.setState({
        users: response.data
      })
    })
    .catch(error => {
      console.error('Axios get error', error);
    })
  }

  getGroceries(){
    var url = 'http://localhost:8008/family/groceries';
    axios.get(url)
    .then((response) => {
      // console.log('Axios get response', response.data);
      this.setState({
        groceries: response.data
      })
    })
    .catch(error => {
      console.error('Axios get error', error);
    })
  }

  addGrocery(value) {
    console.log('grocery value', value);
    axios.post('http://localhost:8008/family/groceries', {value})
      .then(response => {
        this.getGroceries();
      })
      .catch(error => {
        console.error('Axios addGrocery error', error);
      })
  }


  getTasks(){
    var url = 'http://localhost:8008/family/tasks';
    axios.get(url)
    .then((response) => {
      // console.log('Axios get response', response.data);
      this.setState({
        tasks: response.data
      })
    })
    .catch(error => {
      console.error('Axios get error', error);
    })
  }

  addTask(value) {
    axios.post('http://localhost:8008/family/tasks', {value})
      .then(response => {
        this.getTasks();
      })
      .catch(error => {
        console.error('Axios addTask error', error);
      })
  }

  getChores(){
    var url = 'http://localhost:8008/family/chores';
    axios.get(url)
    .then((response) => {
      // console.log('Axios get response', response.data);
      this.setState({
        chores: response.data
      })
    })
    .catch(error => {
      console.error('Axios get error', error);
    })
  }

  addChore(value) {
    axios.post('http://localhost:8008/family/chores', {value})
      .then(response => {
        this.getChores();
      })
      .catch(error => {
        console.error('Axios addTask error', error);
      })
  }

  getEvents(){
    var url = 'http://localhost:8008/family/events';
    axios.get(url)
    .then((response) => {
      // console.log('Axios get response', response.data);
      this.setState({
        events: response.data
      })
    })
    .catch(error => {
      console.error('Axios get error', error);
    })
  }

  addEvent(value) {
    axios.post('http://localhost:8008/family/events', {value})
      .then(response => {
        this.getEvents();
      })
      .catch(error => {
        console.error('Axios addEvent error', error);
      })
  }



  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 14,
            },
            activeTintColor: 'darkslategrey',
            inactiveTintColor: 'olivedrab',
          }}
        >
          <Tab.Screen name="Home" component={Homepage} />
          <Tab.Screen name="Tasks" children={() => <Tasks tasks={this.state.tasks} addTask={this.addTask} />}/>
          <Tab.Screen name="Chores" children={() => <Chores chores={this.state.chores} addChore={this.addChore} />} />
          <Tab.Screen name="Grocery List" children={() => <Groceries groceries={this.state.groceries} addGrocery={this.addGrocery} />}/>
          <Tab.Screen name="Events" children={() => <Events events={this.state.events} addEvent={this.addEvent} />} />
        </Tab.Navigator>
      </NavigationContainer>

    );
  }
};


export default App;
