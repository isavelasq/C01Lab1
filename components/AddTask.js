import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    
    const [initialValue, setInitialValue] = useState('');

    const handleAddTask = () => {
        if(initialValue.trim() !== '') {
            onAddTask(initialValue);
            setInitialValue('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter task to do"
            value={initialValue}
            onChangeText={(text) => setInitialValue(text)}
            keyboardType="default"
            returnKeyType="done"
          />
          <Button title="Add Todo" onPress={handleAddTask} />
        </View>
      );

};

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

  export default AddTask;