import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { loadUsers } from 'src/app/core/state/user/actions/user.actions';
import { selectUsersForPage } from 'src/app/core/state/user/selectors/user.selectors';
import { UserState } from 'src/app/core/state/user/user.state';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: user[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10
  totalItems: number = 0;


  constructor(private store: Store<UserState>) { }
  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.currentPage = page;
    this.store.dispatch(loadUsers({ page }));
    this.store.pipe(select(selectUsersForPage(page))).subscribe(res => {
      this.users = res?.data;
      this.totalItems = res?.total

    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.loadUsers(this.currentPage);

    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers(this.currentPage);
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  handleSearchResult(result: any) {
    if (result) {

      this.users = [];
      Array.isArray(result) ? this.loadUsers(1) : this.users.push(result);

    } else {
      this.users = [];

    }
  }
}




