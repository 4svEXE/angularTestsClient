import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SettingsWidgetService {
  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  sendSettings(settings: any) {
    this.dataSubject.next(settings);
  }

  constructor() {}
}

// type ConfigType = {
//   testSize: number; // 10,15,20
//   difficulty: number; // 1,2,3
//   rightAnswers: number; // 0-20
// };
