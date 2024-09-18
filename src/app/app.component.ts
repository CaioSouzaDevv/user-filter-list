import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/user-list';
import { iFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{

  usersList: IUser[] = [];
usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    console.log('onInit');
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }



  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFIlter(filterOptions: iFilterOptions) {
    console.log(filterOptions);

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: iFilterOptions, UsersList: IUser[]): IUser[] {
   let filteredList: IUser[] = [];

   filteredList = this.filterUsersListByName(filterOptions.name, UsersList);
   return filteredList;
  }

  filterUsersListByName(name: string | undefined, UsersList: IUser[]): IUser[] {
const NAME_NOT_TYPPED = name === undefined;

if(NAME_NOT_TYPPED) {
  return this.usersList;
}

const filteredList = this.usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()) );
return filteredList;

  }

}
