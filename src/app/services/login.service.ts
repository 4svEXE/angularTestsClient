import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { UserModel } from "../models/User";
import { UserTokenService } from "./user-token.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  token: string = "";
  user: UserModel = new UserModel("", "", "", "");
  isAdmin: boolean = false;

  constructor(
    private webReqService: WebRequestService,
    private userTokenService: UserTokenService
  ) {}

  registerUser(user: UserModel) {
    return this.webReqService.post("user/", user);
  }

  loginUser(email: string, password: string) {
    return this.webReqService.post("user/login/", { email, password });
  }

  storeUser(token: string, user: UserModel) {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", JSON.stringify(user.isAdmin));
    localStorage.setItem("user", JSON.stringify(user));

    this.userTokenService.setLoggetUser(true);
    this.userTokenService.userIsAdmin(user.isAdmin);

    this.token = token;
    this.user = user;
    this.isAdmin = user.isAdmin;
  }
}
