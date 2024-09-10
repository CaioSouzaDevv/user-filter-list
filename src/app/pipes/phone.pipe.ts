import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const invalid_phone = !phone || phone.length < 10 || phone.length > 11;


    if(invalid_phone) {
      return 'Telefone Indisponível ou inválido';
    }

    const cellphone = phone.length === 11;

    if(cellphone) {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
    }


    
  }

}
