import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      // Load your events here from your backend or data source
    ],
  };
  title = 'rendez-vous';

  constructor() {}



  ngOnInit(): void {
    this.calendarOptions = {
      // ... other options
      eventClick: this.handleEventClick.bind(this),
      selectable: true,
      select: this.handleDateSelect.bind(this),
    };
  }
  
  handleEventClick(eventInfo: { event: any; }) {
    // Handle event click logic
    console.log('Event clicked:', eventInfo.event);
  }
  
  handleDateSelect(selectInfo: { startStr: any; endStr: any; }) {
    // Handle date selection logic
    console.log('Date selected:', selectInfo.startStr, selectInfo.endStr);
  }
  
}
