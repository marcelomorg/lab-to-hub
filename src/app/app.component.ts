import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weeks: number[][] = [];
  daysInMonth!: number;

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based index

    const daysInPreviousMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    this.daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysCounter = 1 - firstDayOfWeek;
    const weeks = [];
    while (daysCounter <= this.daysInMonth) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(daysCounter <= 0 ? daysInPreviousMonth + daysCounter : daysCounter);
        daysCounter++;
      }
      weeks.push(week);
    }
    this.weeks = weeks;
  }

  selectDate(day: number) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 1-based index

    const fullDate = `${year}-${month}-${day}`;
    alert(`Horários disponíveis para o dia ${fullDate}`);
    // Aqui você pode adicionar lógica para exibir os horários disponíveis para este dia
  }
}
