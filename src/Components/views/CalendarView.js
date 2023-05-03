import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const EventComponent = ({ event, deleteEvent }) => {
  const handleDelete = () => {
    deleteEvent(event.id);
  };

  return (
    <div>
      <strong>{event.title}</strong>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const CalendarView = ({ events, deleteEvent }) => {
  return (
    <div className="Calendar">
      <div className="header">
        <h1>Calendar</h1>
        <div className="notice"></div>
      </div>
      <div>
        {events ? (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events.map((event) => ({
              title: <EventComponent event={event} deleteEvent={deleteEvent} />,
              start: event.date,
            }))}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};


export default CalendarView
  
  
  
  
  
  