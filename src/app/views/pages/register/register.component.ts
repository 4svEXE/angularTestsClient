import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { UserModel } from "./../../../models/User";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  user = new UserModel("", "", "", "");

  constructor(
    private loginService: LoginService,
    private notifyService: NotificationService,
    private router: Router
  ) {}

  setFirstName(firstName: string) {
    this.user.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.user.lastName = lastName;
  }

  setEmail(email: string) {
    this.user.email = email;
    this.user.login = email;
  }

  setPassword(password: string) {
    this.user.password = password;
  }

  registerUser(event: any) {
    event.preventDefault();

    console.log("user", this.user);

    if (
      this.user.firstName.length >= 3 &&
      this.user.lastName.length > 3 &&
      this.user.email.length > 3 &&
      this.user.password.length > 3
    ) {
      this.loginService.registerUser(this.user).subscribe((res: any) => {
        const message = `User ${
          this.user.firstName + " " + this.user.lastName
        } successfully registered!`;

        if (res?.user !== undefined) {
          this.notifyService.showSuccess(message, "Succes");

          this.loginService.storeUser(res.user._id, res.user);

          this.router.navigate(["/user-cabinet/" + res.user._id]);
        } else {
          this.notifyService.showError("Server error", "Warning");
        }
      });
    } else {
      const message = "All fields must be at least 3 characters long.";
      this.notifyService.showError(message, "Warning");
    }
  }
}
