import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ task, deleteTask, toggleComplete, navigation }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={task.completed ? styles.completed : styles.notCompleted}>{task.title}</Text>
      <View style={styles.buttons}>
        <Button title="Edit" onPress={() => navigation.navigate('TaskForm', { task })} />
        <Button title="Delete" onPress={() => deleteTask(task.id)} />
        <Button title={task.completed ? "Mark InProgress" : "Mark Done"} onPress={() => toggleComplete(task.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f9c2ff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  notCompleted: {
    textDecorationLine: 'none',
  },
});

export default TaskItem;
