import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { WebRequestService } from "src/app/services/web-request.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-cabinet",
  templateUrl: "./user-cabinet.component.html",
  styleUrls: ["./user-cabinet.component.scss"],
})
export class UserCabinetComponent {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private webReq: WebRequestService,
    private router: Router
  ) {
    //this.lists //= [{}];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // перевірка чи токен співпадає з ід юзера

      if (params["id"] === localStorage.getItem("token")) {
        this.webReq.get("user/" + params["id"]).subscribe((user) => {
          this.user = user;
          // console.log("user :>> ", user);
        });
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }
}
