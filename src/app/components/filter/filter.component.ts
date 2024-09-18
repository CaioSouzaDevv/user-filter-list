import { Component, EventEmitter, Output } from '@angular/core';
import { iFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  filterOptions: iFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
statusList = [
{ description: 'ativo', value: true },
{ description: 'inativo', value: true },
];

@Output('onFilter') onFilterEmitt = new EventEmitter<iFilterOptions>();


  
  dateSelected(date: any) {
    console.log(date);
}

onFilter() {
  this.onFilterEmitt.emit(this.filterOptions);
}

}
