import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab_to_hub';

  ngOnInit() {
    const tableBody = document.querySelector('#calendario tbody') as HTMLTableSectionElement;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based index

    // Dia da semana do primeiro dia do mês
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    // Número de dias no mês anterior
    const daysInPreviousMonth = new Date(year, month, 0).getDate();

    let row = document.createElement('tr');

    // Preencher as células vazias com os últimos dias do mês anterior
    for (let i = daysInPreviousMonth - firstDayOfWeek + 1; i <= daysInPreviousMonth; i++) {
        let cell = document.createElement('td');
        cell.textContent = i.toString();
        row.appendChild(cell);
    }

    // Preencher o restante dos dias do mês atual
    for (let i = 1; i <= 31; i++) { // Consideramos o máximo de 31 dias para evitar loop infinito
        const dayOfWeek = new Date(year, month, i).getDay();
        if (dayOfWeek === 0) {
            tableBody.appendChild(row);
            row = document.createElement('tr');
        }
        const cell = document.createElement('td');
        cell.textContent = i.toString();
        cell.addEventListener('click', () => {
            const clickedDate = cell.textContent;
            const clickedMonth = month + 1;
            const clickedYear = year;
            const fullDate = `${clickedYear}-${clickedMonth}-${clickedDate}`;
            alert('Horários disponíveis para o dia ' + fullDate);
            // Aqui você pode adicionar lógica para exibir os horários disponíveis para este dia
        });
        row.appendChild(cell);
    }

    // Adicionar a última linha se necessário
    if (row.children.length > 0) {
        tableBody.appendChild(row);
    }
  }
}
