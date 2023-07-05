import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fakeTest } from "src/app/db/fakeTest";

import { TestModel } from "src/app/models/Test";
import { NotificationService } from "src/app/services/notification.service";
import { TestService } from "src/app/services/test.service";


@Component({
  selector: "app-edit-test",
  templateUrl: "./edit-test.component.html",
  styleUrls: ["./edit-test.component.scss"],
})
export class EditTestComponent {
  testModel: TestModel = fakeTest;

  constructor(
    private testService: TestService,
    private notifyService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") || '';

    this.testService.getTestQuestion(id).subscribe((testQuestion) => {
// проблеми з типами об'єкт і тест
      // this.testQuest = testQuestion
      
      console.log("testQuestion", testQuestion);
    });
  }

  createNewTest(event: any) {
    event.preventDefault();

    this.testService
      .createTestQuestion(this.testModel)
      .subscribe((responce: any) => {
        this.showToasterSuccess(
          "Test question wos saved successfully!",
          "Succes!"
        );

        this.clearInputs();
      });
  }

  setDifficulty(difficulty: number) {
    // this.testModel.difficulty = difficulty;
  }

  clearInputs() {
    this.testModel = fakeTest;
  }

  // Notifications

  showToasterSuccess(message: string, title: string) {
    this.notifyService.showSuccess(message, title);
  }

  showToasterError(message: string, title: string) {
    this.notifyService.showError(message, title);
  }

  showToasterInfo(message: string, title: string) {
    this.notifyService.showInfo(message, title);
  }

  showToasterWarning(message: string, title: string) {
    this.notifyService.showWarning(message, title);
  }
}

type answerType = {
  title: string;
  isCorrect: boolean;
};
