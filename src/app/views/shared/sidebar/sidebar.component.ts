import { Component } from "@angular/core";
import { UserModel } from "src/app/models/User";
import { ThemeService } from "src/app/services/theme.service";
import { UserTokenService } from "src/app/services/user-token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  isOpenSisebar: boolean = true;
  isActive: boolean = false; // Opened or closed sidebar
  isLoggetUser: boolean = false;
  isAdmin: boolean = false;
  token: string | null = null;

  user: UserModel = new UserModel("", "", "", "");

  isDarkTheme: boolean = Boolean(
    localStorage.getItem("isDarkTheme") === "true"
  );

  constructor(
    private themeService: ThemeService,
    private userTokenService: UserTokenService,
    private router: Router
  ) {
    this.userTokenService.isLoggetUser$.subscribe((isLoggetUser) => {
      this.isLoggetUser = isLoggetUser;
    });

    this.userTokenService.isAdminSubject$.subscribe((isAdminSubject) => {
      this.isAdmin = isAdminSubject;
    });
  }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.isLoggetUser = true;
      this.token = localStorage.getItem("token");
      this.isAdmin = localStorage.getItem("isAdmin") === "true";
    }
  }

  sendThemeState() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem("isDarkTheme", this.isDarkTheme.toString());
    this.themeService.setTheme(this.isDarkTheme);
  }

  logout() {
    this.isLoggetUser = false;
    this.isAdmin = false;
    this.router.navigate(["/home"]);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
  }
}
