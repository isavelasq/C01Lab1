import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './components/ToDoList'
import ToDoList from './components/ToDoList'

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialValues={["Clean room", "Study", "World domination"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
