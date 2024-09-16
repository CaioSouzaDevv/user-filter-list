import { Component } from '@angular/core';
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
  
  dateSelected(date: any) {
    console.log(date);
}

onFilter() {
  console.log(this.filterOptions);
}

}
