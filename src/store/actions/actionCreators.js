import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks
  }
}
// Single task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task
  }
}
// Edit task
export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task
  }
}
// Delete Task
export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId
  };
};
// Add Task
export const addTask = (task) => {
  return {
    type: at.ADD_TASK,
    payload: task
  };
};