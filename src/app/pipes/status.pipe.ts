import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    
   const invalid_status =  status === undefined || status === null;

   if (invalid_status) {
    return 'Status indisponível ou inválido';
   }
   return status ? 'Ativo' : 'Inativo';
  }

}
