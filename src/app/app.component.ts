import { Component } from "@angular/core";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "client";
  isDarkTheme: boolean = Boolean(
    localStorage.getItem("isDarkTheme") === "true"
  );

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((data: boolean) => {
      this.isDarkTheme = data;
    });
  }
}
