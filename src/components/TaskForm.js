import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskForm = ({ route, navigation }) => {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
const { addTask, editTask } = useContext(TaskContext);

  const saveTask = async () => {
    if (title.trim() === '') {
      Alert.alert('Error', 'Task title cannot be empty.');
      return;
    }

    try {
      if (task) {
        const updatedTaskReq = {
            id: task.id,
            title: title? title :task.title,
            description: description? description : task.description,
            completed: task.completed
        }
        console.log("####### updatedTaskReq ############"+ JSON.stringify(updatedTaskReq))
        editTask(updatedTaskReq);
      } else {
        const newTask = { title: title, description: description, completed: false };
        addTask(newTask);
      }
      console.log("####### Go Back ############")
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save task.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput 
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Text>Task Description:</Text>
      <TextInput 
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Save Task" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default TaskForm;
