import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchTaskThunk, editTaskThunk } from "../store/thunks"
import EditTaskView from "./views/EditTaskView";

class EditTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.task.id,
      description: this.props.task.description,
      completion_status: this.props.task.completion_status,
      due_date: this.props.task.due_date,
      comments: this.props.task.comments,
      employeeId: this.props.task.employeeId,
      redirect: false,
      redirectId: null,
      error: ""
    }
  }

  componentDidMount() {
    // Getting task ID from url
    this.props.fetchTask(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    // Get new info for task from form input
    if (this.state.description === "") {
      this.setState({ error: "Description field is required" });
      return;
    }

    let task = {
      id: this.state.id,
      description: this.state.description,
      completion_status: this.state.completion_status,
      due_date: this.state.due_date,
      comments: this.state.comments,
      employeeId: this.state.employeeId,
    }

    let editedTask = await this.props.editTask(task)

    this.setState({
      description: this.state.description,
      completion_status: this.state.completion_status,
      due_date: this.state.due_date,
      comments: this.state.comments,
      employeeId: null,
      redirect: true,
      redirectId: task.id,
      error: ""
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    // Go to single task view of the edited task
    if (this.state.redirect) {
      return (<Redirect to={`/tasks/${this.state.redirectId}`} />)
    }

    return (

      <EditTaskView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        task={this.state}
      />
    )
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatch = (dispatch) => {
  return ({
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  })
};

export default connect(mapState, mapDispatch)(EditTask);