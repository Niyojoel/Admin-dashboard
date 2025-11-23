import { useEffect, useRef, useState } from "react";
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
import { useScreenSizeContext } from "../../context/useScreenSizeContext";
import { BoxWithHeight } from "../layout";

const index = () => {
  
  const {isContainerSize} = useScreenSizeContext();

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
    <Box>
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
      {isContainerSize?.m !== null && <BoxWithHeight sx={
        {
          display: "flex", 
          justifyContent: "space-between",
          flexDirection: isContainerSize?.m ? "column" : 'row', 
          gap: isContainerSize?.m || isContainerSize.l ? '1.5rem': '0px'
        }
      }>
        <Box 
          flex={isContainerSize?.l && "1"} 
          backgroundColor={colors.primary[400]}
          padding="15px"
          borderRadius= "4px"
        >
          <Typography variant="h5">
            Events
          </Typography>
          <List sx={{
            display: "flex",
            m: "7px 0 0", 
            flexDirection: isContainerSize?.m ? 'row': 'column', 
            gap: "10px"
          }}
            
            >
            {currentEvents.map(event=> (
              <ListItem 
              key={event.id} 
              sx={{
                backgroundColor: colors.greenAccent[500], 
                width:'fit-content',
                borderRadius: "2px",
                padding: "0.2rem 1rem",
                
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
        <Box flex="5" ml="15px">
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
      </BoxWithHeight>}
    </Box>
  )
}

export default index