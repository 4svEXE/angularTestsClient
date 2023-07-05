import { Component } from "@angular/core";
import { TestService } from "src/app/services/test.service";
import { NotificationService } from "./../../../services/notification.service";
import { TestModel } from "src/app/models/Test";
import { fakeTest } from "src/app/db/fakeTest";

@Component({
  selector: "app-all-tests",
  templateUrl: "./all-tests.component.html",
  styleUrls: ["./all-tests.component.scss"],
})
export class AllTestsComponent {
  tests: TestModel[] = testsSchema;

  constructor(
    private testService: TestService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.getTests();
  }

  question: questionType = { isActive: false, isCorrect: false };
  questions: questionType[] = [this.question];

  getTests() {
    this.testService.getTestQuestions().subscribe((tests: any) => {
      if (tests[0] !== undefined) {
        this.tests = tests;

        // fill questions array question objecs
        for (let i = 0; i < this.tests.length - 1; i++) {
          let testsCopy = Object.assign({}, this.question);
          this.questions.push(testsCopy);
        }

        this.questions[0].isActive = true;
      }
    });
  }

  deleteTest(id: string) {
    const message = "Are you sure you want to delete this test";

    if (confirm(message)) {
      this.testService.deleteTestQuestion(id).subscribe((res) => {
        this.tests = this.tests.filter((test) => test._id !== id);
      });
    }
  }
}

type questionType = {
  isActive: boolean;
  isCorrect: boolean;
};

const testsSchema = [fakeTest];
