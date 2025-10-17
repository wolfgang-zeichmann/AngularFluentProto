import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { 
  provideFluentDesignSystem, 
  fluentButton, 
  fluentCard,
  fluentTextField,
  fluentCheckbox,
  fluentRadio,
  fluentRadioGroup,
  fluentSelect,
  fluentOption,
  fluentSlider,
  fluentSwitch,
  fluentProgressRing,
  fluentBadge,
  fluentDivider,
  fluentAccordion,
  fluentAccordionItem,
  fluentCalendar,
} from '@fluentui/web-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular Fluent UI Web Components Demo';
  
  @ViewChild('calendar', { static: false }) calendarRef!: ElementRef;
  
  textValue = '';
  isChecked = false;
  radioValue = 'option1';
  selectValue = 'apple';
  sliderValue = 50;
  switchValue = false;
  exampleTextField = 'Initial Value';
  selectedDate = '2025-10-16';

  // Calendar and appointments properties
  selectedCalendarDate: Date | null = null;
  appointments: { [key: string]: Array<{ time: string, title: string, description: string, type: 'meeting' | 'reminder' | 'event' }> } = {
    '2025-10-17': [
      { time: '09:00', title: 'Team Standup', description: 'Daily team sync meeting', type: 'meeting' },
      { time: '14:30', title: 'Client Call', description: 'Project review with client', type: 'meeting' }
    ],
    '2025-10-18': [
      { time: '10:00', title: 'Code Review', description: 'Review pull requests', type: 'meeting' },
      { time: '16:00', title: 'Doctor Appointment', description: 'Annual checkup', type: 'reminder' }
    ],
    '2025-10-20': [
      { time: '13:00', title: 'Lunch Meeting', description: 'Business lunch with partners', type: 'meeting' }
    ],
    '2025-10-22': [
      { time: '18:00', title: 'Team Building', description: 'Office team building event', type: 'event' },
      { time: '19:30', title: 'Dinner', description: 'Team dinner after event', type: 'event' }
    ],
    '2025-10-25': [
      { time: '11:00', title: 'Sprint Planning', description: 'Plan next sprint tasks', type: 'meeting' }
    ]
  };

  ngOnInit(): void {
    // Register Fluent UI Web Components
    provideFluentDesignSystem()
      .register(
        fluentButton(),
        fluentCard(),
        fluentTextField(),
        fluentCheckbox(),
        fluentRadio(),
        fluentRadioGroup(),
        fluentSelect(),
        fluentOption(),
        fluentSlider(),
        fluentSwitch(),
        fluentProgressRing(),
        fluentBadge(),
        fluentDivider(),
        fluentAccordion(),
        fluentAccordionItem(),
        fluentCalendar(),
      );
  }

  ngAfterViewInit(): void {
    // Set up event listener for calendar after view initialization
    setTimeout(() => {
      if (this.calendarRef && this.calendarRef.nativeElement) {
        const calendar = this.calendarRef.nativeElement;
        console.log('Calendar element:', calendar);
        
        // Listen for various calendar events
        calendar.addEventListener('selectedDatesChange', (event: any) => {
          console.log('selectedDatesChange event:', event);
          this.handleCalendarDateChange(event);
        });
        
        calendar.addEventListener('change', (event: any) => {
          console.log('change event:', event);
          this.handleCalendarDateChange(event);
        });
        
        calendar.addEventListener('click', (event: any) => {
          console.log('click event on calendar:', event);
          // Handle click events on date cells
          this.handleCalendarClick(event);
        });
      }
    }, 100);
  }

  onButtonClick(): void {
    alert('Fluent UI Button clicked!');
  }

  onTextChange(event: any): void {
    this.textValue = event.target.value;
  }

  onTextFieldChange(event: any): void {
    this.exampleTextField = event.target.value;
  }

  onCheckboxChange(event: any): void {
    this.isChecked = event.target.checked;
  }

  onRadioChange(event: any): void {
    this.radioValue = event.target.value;
  }

  onSelectChange(event: any): void {
    this.selectValue = event.target.value;
  }

  onSliderChange(event: any): void {
    this.sliderValue = event.target.value;
  }

  onSwitchChange(event: any): void {
    this.switchValue = event.target.checked;
  }

  onDateChange(event: any): void {
    this.selectedDate = event.target.value;
  }

  // Calendar methods
  handleCalendarDateChange(event: any): void {
    console.log('Calendar date change event:', event);
    const target = event.target;
    
    if (target && target.selectedDates && target.selectedDates.length > 0) {
      this.selectedCalendarDate = new Date(target.selectedDates[0]);
      console.log('Selected date from selectedDates:', this.selectedCalendarDate);
    } else if (target && target.value) {
      this.selectedCalendarDate = new Date(target.value);
      console.log('Selected date from value:', this.selectedCalendarDate);
    }
  }

  handleCalendarClick(event: any): void {
    console.log('Calendar click event:', event);
    
    // Try to find the clicked date element
    const clickedElement = event.target;
    console.log('Clicked element:', clickedElement);
    
    // Look for date information in various attributes
    if (clickedElement) {
      const dateValue = clickedElement.getAttribute('data-date') || 
                       clickedElement.getAttribute('aria-label') ||
                       clickedElement.textContent;
      
      console.log('Date value found:', dateValue);
      
      // If we found a number (day), try to construct the date
      if (dateValue && /^\d{1,2}$/.test(dateValue.trim())) {
        const day = parseInt(dateValue.trim());
        // Use current month and year (October 2025)
        this.selectedCalendarDate = new Date(2025, 9, day); // October is month 9 (0-based)
        console.log('Selected date from click:', this.selectedCalendarDate);
      }
    }
  }

  onCalendarDateSelect(event: any): void {
    console.log('Calendar clicked:', event);
    
    // Try different ways to get the selected date
    const target = event.target;
    console.log('Target:', target);
    
    // Check if we can get the selected date from the calendar element
    if (target && target.selectedDates && target.selectedDates.length > 0) {
      this.selectedCalendarDate = new Date(target.selectedDates[0]);
      console.log('Selected date from selectedDates:', this.selectedCalendarDate);
    } else if (target && target.value) {
      this.selectedCalendarDate = new Date(target.value);
      console.log('Selected date from value:', this.selectedCalendarDate);
    } else {
      // Fallback: try to get date from event details
      const clickedElement = event.target.closest('[data-date], [aria-label*="2025"]');
      if (clickedElement) {
        // Try to extract date from aria-label or data attributes
        const ariaLabel = clickedElement.getAttribute('aria-label');
        if (ariaLabel) {
          // Extract date from aria-label (format might vary)
          const dateMatch = ariaLabel.match(/(\d{1,2}),?\s*(\d{4})/);
          if (dateMatch) {
            const day = parseInt(clickedElement.textContent || '1');
            const year = parseInt(dateMatch[2]);
            // Assume current month for now (October = 9 in 0-based index)
            this.selectedCalendarDate = new Date(year, 9, day);
            console.log('Selected date from aria-label:', this.selectedCalendarDate);
          }
        }
      }
    }
    
    // If still no date, set to today as fallback
    if (!this.selectedCalendarDate) {
      this.selectedCalendarDate = new Date();
      console.log('Fallback to today:', this.selectedCalendarDate);
    }
  }

  getSelectedDateString(): string {
    if (!this.selectedCalendarDate) return '';
    return this.selectedCalendarDate.toISOString().split('T')[0];
  }

  getAppointmentsForSelectedDate(): Array<{ time: string, title: string, description: string, type: 'meeting' | 'reminder' | 'event' }> {
    const dateKey = this.getSelectedDateString();
    return this.appointments[dateKey] || [];
  }

  hasAppointments(date: string): boolean {
    return this.appointments[date] && this.appointments[date].length > 0;
  }

  getAppointmentTypeClass(type: string): string {
    switch(type) {
      case 'meeting': return 'appointment-meeting';
      case 'reminder': return 'appointment-reminder';
      case 'event': return 'appointment-event';
      default: return '';
    }
  }

  formatSelectedDate(): string {
    if (!this.selectedCalendarDate) return '';
    return this.selectedCalendarDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Method to directly select a date for testing
  selectDate(dateString: string): void {
    this.selectedCalendarDate = new Date(dateString);
    console.log('Date selected programmatically:', this.selectedCalendarDate);
  }
}