import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { catchError, debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/modules/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input('displaySearch') displaySearch = false;
  searchQuery = new FormControl('');
  @Output() searchResult = new EventEmitter<any>();
  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.search();
  }
  search() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      switchMap(userId =>
        this.userService.getUserById(userId).pipe(
          catchError(() => {
            this.searchResult.emit(null);
            return of(null)
          })
        )
      )
    ).subscribe(
      (user: any) => {
        this.searchResult.emit(user);
      }
    ).add(
      takeUntil(this.destroy$)
    );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

