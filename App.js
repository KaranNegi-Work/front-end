import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './src/components/TaskList';
import TaskForm from './src/components/TaskForm';
import { TaskProvider } from './src/context/TaskContext';
const Stack = createStackNavigator();
export default function App() {
    return (
      <TaskProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen name="TaskList" component={TaskList} />
          <Stack.Screen name="TaskForm" component={TaskForm} />
        </Stack.Navigator>
    </NavigationContainer>
    </TaskProvider>
  );
}


