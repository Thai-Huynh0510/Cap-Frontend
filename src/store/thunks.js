import * as ac from './actions/actionCreators';
import axios from 'axios';
// const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";
// All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let res = await axios.get(`${path}/tasks`)
      dispatch(ac.fetchAllTasks(res.data))
    } catch(error) {
      console.log(error)
    }
  }