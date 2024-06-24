import { TASK_MANAGER_BASE_URL } from '@env';
export const fetchTasksFromAPI = async () => {
  try {
    const response = await fetch(`${TASK_MANAGER_BASE_URL}/tasks`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createTaskInAPI = async (task) => {
  try {
    const response = await fetch(`${TASK_MANAGER_BASE_URL}/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateTaskInAPI = async (task) => {
  try {
    const response = await fetch(`${TASK_MANAGER_BASE_URL}/task/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteTaskFromAPI = async (taskId) => {
  try {
    await fetch(`${TASK_MANAGER_BASE_URL}/task/${taskId}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.error(error);
  }
};
