import React, { useContext, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet, Alert } from 'react-native';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';

const TaskList = ({ navigation}) => {
    const { tasks, removeTask, editTask } = useContext(TaskContext);
    const toggleComplete = (id) => {
        const task = tasks.find(task => task.id === id);
        console.log("#######task############"+JSON.stringify(task))
        const updatedTask = { ...task, completed: !task.completed };
        console.log("#######updatedTask############"+JSON.stringify(updatedTask))
        editTask(updatedTask);
      };


  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem 
            task={item}
            deleteTask={removeTask}
            toggleComplete={toggleComplete}
            navigation={navigation}
          />
        )}
      />
      <Button
        title="Add Task"
        onPress={() => 
            navigation.navigate('TaskForm')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TaskList;
