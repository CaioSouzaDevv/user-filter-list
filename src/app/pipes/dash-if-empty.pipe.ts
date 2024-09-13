import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any{
   const is_empty = value === undefined || value == null || value === '';

   if(is_empty) {
    return '-';
   }
   return value;
  }

}
