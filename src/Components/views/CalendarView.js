import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const CalendarView = ({ events,deleteEvent }) => {
  const eventArray = events.map(event => {
    return {
      id: event.id,
      title: event.title,
      start: event.start_date,
      end: event.end_date
    }  
  })
  const handleEventClick = (eventInfo) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(eventInfo.event.id)
    }
  }
  return (
    <div className="Calendar">
      <NavBar />
      <div className="header">
        <h1>Calendar</h1>
        <div className="notice"></div>
      </div>
      <div>
      <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={eventArray}
            eventClick={handleEventClick}
            />
      </div>
    </div>
  );
};


export default CalendarView
  
  
  
  
  
  