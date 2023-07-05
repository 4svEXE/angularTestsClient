import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {

  private dataSubject = new Subject<boolean>();
  isLoggetUser$ = this.dataSubject.asObservable();

  setLoggetUser(isLoggetUser: boolean): void {
    this.dataSubject.next(isLoggetUser);
  }


  private isAdminSubject = new Subject<boolean>();
  isAdminSubject$ = this.isAdminSubject.asObservable();

  userIsAdmin(isAdminSubject: boolean): void{
    this.isAdminSubject.next(isAdminSubject);
  }
}
