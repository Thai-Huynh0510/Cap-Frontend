import { Component } from "react";
import { connect } from "react-redux"
import { fetchAllEventsThunk, deleteEventThunk  } from "../store/thunks";
import CalendarView from "./views/CalendarView"

class Calendar extends Component {
    componentDidMount() {
      this.props.fetchAllEvents()
    }
  
    render() {
      console.log(this.props.Events);
      return (
        <CalendarView events={this.props.allEvents}
        deleteEvent={this.props.deleteEvent} />
      )
    }
  }
  
  // Map state to props;
  const mapState = state => {
    return {
      allEvents: state.allEvents
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
      fetchAllEvents: () => dispatch(fetchAllEventsThunk()),
      deleteEvent: (eventId) => dispatch(deleteEventThunk(eventId)),
    }
  }
  
  export default connect(mapState, mapDispatch)(Calendar)