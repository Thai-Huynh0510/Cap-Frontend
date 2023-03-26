import { Component } from "react";
import { Connect } from "react-redux";
import { fetchAllTasksThunk,  } from "../store/thunks";

class Tasks extends Component {
    componentDidMount() {
      this.props.fetchAllTasks()
    }
  
    render() {
      return (
        <TasksView tasks={this.props.allTasks}
          deleteTask={this.props.deleteTask} />
      )
    }
  }
  
  // Map state to props;
  const mapState = state => {
    return {
      allTasks: state.allTasks
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
      fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
      deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
    }
  }
  
  export default connect(mapState, mapDispatch)(Tasks)