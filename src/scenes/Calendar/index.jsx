import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
// import {formatDate} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {Header} from '../../components/global';
import { tokens } from "../../theme";

const index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick =(selected)=> {
    const title = prompt('please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick =(selected)=> {
    if(window.confirm(`Are you sure want to delete the event ${selected.event.title} ?`)) {
      selected.event.remove();
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
      <Box display="flex" justifyContent="space-between">
        <Box 
          flex="1 1 20%" 
          backgroundColor={colors.primary[400]}
          padding="15px"
          borderRadius= "4px"
        >
          <Typography variant="h5">
            Events
          </Typography>
          <List>
            {currentEvents.map(event=> (
              <ListItem 
              key={event.id} 
              sx={{
                backgroundColor: colors.greenAccent[500], 
                m: "10px 0", 
                borderRadius: "2px"
              }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                  <Typography>
                    {event.start.year}{event.start.month}{event.start.date}
                    {/* {formatDate(event.start, {
                      year:"numeric",
                      month: "short",
                      date: "numeric"
                    })} */}
                  </Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins= {[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today", 
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {id: '1234', title: "All-day event", date: "2022-09-14"},
              {id: '1334', title: "Timed event", date: "2022-09-28"},
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default index