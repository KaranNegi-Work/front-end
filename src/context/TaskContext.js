import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchTasksFromAPI, createTaskInAPI, updateTaskInAPI, deleteTaskFromAPI } from '../api/taskApis';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  console.log("#####State: " + JSON.stringify(state) +" ###### action: "+ JSON.stringify(action))
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'EDIT_TASK':
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try { 
      const storedTasks = await AsyncStorage.getItem('tasks');
      const storedTaskCheck = JSON.parse(storedTasks);
      if (storedTasks !== null && storedTaskCheck.length > 0) {
        dispatch({ type: 'FETCH_TASKS', payload: JSON.parse(storedTasks) });
      } else {
        const fetchedTasks = await fetchTasksFromAPI();
        dispatch({ type: 'FETCH_TASKS', payload: fetchedTasks });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    const newTask = await createTaskInAPI(task);
    dispatch({ type: 'ADD_TASK', payload: newTask });
    saveTasks([...tasks, newTask]);
  };

  const editTask = async (task) => {
    const updatedTaskReq = {
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed
    }
    const updatedTask = await updateTaskInAPI(updatedTaskReq);
    dispatch({ type: 'EDIT_TASK', payload: updatedTaskReq });
    saveTasks(tasks.map(t => t.id === task.id ? updatedTaskReq : t));
  };

  const removeTask = async (taskId) => {
    await deleteTaskFromAPI(taskId);
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
    saveTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
