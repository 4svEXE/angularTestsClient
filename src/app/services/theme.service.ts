import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new Subject<boolean>();
  theme$ = this.themeSubject.asObservable();

  setTheme(isDarkTheme: boolean) {
    this.themeSubject.next(isDarkTheme);
  }
}
