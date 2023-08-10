import { Component , OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventChangeArg, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { createEventId } from './utils';
//import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  calendarPlugins = [dayGridPlugin];
  calendarEvents: any[] = []; // Make sure it's properly defined
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    }, 
    
    weekends: true,
    selectable: true,
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,timeGridPlugin,listPlugin,interactionPlugin],
    select: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

    //  handleEventChange: any;

  title = 'rendez-vous';
 

  handleEventClick(info : EventClickArg) {
    if(confirm(`Are you sure you want to delete the event '${info.event.title}'`)){
      info.event.remove();
    }
  }

  

  handleDateClick(info : DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = info.view.calendar;

    calendarApi.unselect(); // clear date selection

    if(title){
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay
      })
    }
  }

  

}