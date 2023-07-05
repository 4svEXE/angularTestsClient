import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private loginService: LoginService,
    private notifyService: NotificationService,
    private router: Router
  ) {}

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  loginUser(event: any) {
    event.preventDefault();

    this.loginService
      .loginUser(this.email, this.password)
      .subscribe((data: any) => {

        if (data.success) {
          const message = 'You have successfully logged in!'
          this.notifyService.showSuccess(message, "Succes");

          this.loginService.storeUser(data.user._id, data.user);

          // this.userTokenService.sendData(data);

          this.router.navigate(['/user-cabinet/' + data.user._id])

        } else {
          this.notifyService.showError(data.message , "Warning");
        }
      });
  }
}
