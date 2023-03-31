import * as ac from './actions/actionCreators';
import axios from 'axios';
// const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

//Fetch all Employees 

export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`)
    dispatch(ac.fetchAllEmployees(res.data))
  } catch(error) {
    console.log(error)
  }
}

// Delete Employees 
export const deleteEmployeeThunk = employeeId => async dispatch => {
  try {
    await axios.delete(`${path}/employees/${employeeId}`);
    // delete succesful so change state with dispatch
    dispatch(ac.deleteEmployee(employeeId));
  } catch(err) {
    console.error(err);
  }
};


// All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let res = await axios.get(`${path}/tasks`)
      dispatch(ac.fetchAllTasks(res.data))
    } catch(error) {
      console.log(error)
    }
  }
 // delete task
export const deleteTaskThunk = taskId => async dispatch => {
  try {
    await axios.delete(`${path}/tasks/${taskId}`);
    dispatch(ac.deleteTask(taskId));
  } catch(err) {
    console.error(err);
  }
};
// Add task
export const addTaskThunk = task => async dispatch => {
  try {
    let res = await axios.post(`${path}/tasks`, task);
    // delete succesful so change state with dispatch
    dispatch(ac.addTask(res.data));
    return res.data
  } catch(err) {
    console.error(err);
  }
};