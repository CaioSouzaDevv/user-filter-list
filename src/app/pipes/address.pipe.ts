import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {

    const invalid_address = 
    !address || 
    !address.rua ||
    !address.cidade ||
    !address.estado ||
    address.numero === null || address.numero === undefined;

    if(invalid_address) {
      return 'Endereço não disponível ou inválido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado} `;

    
  }

}
