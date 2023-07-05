import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { WebRequestService } from "src/app/services/web-request.service";
// import { Router } from "@angular/router";
import { TestModel } from "src/app/models/Test";
import { fakeTest } from "src/app/db/fakeTest";

@Component({
  selector: "app-test-results",
  templateUrl: "./test-results.component.html",
  styleUrls: ["./test-results.component.scss"],
})
export class TestResultsComponent {
  tests: TestModel[] = [fakeTest];
  currentQuestion: number = 0;
  correctAnswers: number = 0;

  constructor(
    private route: ActivatedRoute,
    private webReq: WebRequestService,
    // private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);

      this.webReq.get("tests/result/" + params["id"]).subscribe((data: any) => {
        this.tests = data.tests;

        this.correctAnswers = data.tests.filter(
          (test: any) => test.isCorrect
        ).length - 1;
        // console.log("tests :>> ", this.tests);
      });
    });
  }

  next() {
    if (this.currentQuestion < this.tests.length - 1) {
      this.currentQuestion++;
    } else {
      this.currentQuestion = 0;
    }
  }

  prew() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    } else {
      this.currentQuestion = this.tests.length - 1;
    }
  }
}
