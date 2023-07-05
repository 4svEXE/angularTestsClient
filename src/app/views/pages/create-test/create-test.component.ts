import { Component } from "@angular/core";
import { fakeTest } from "src/app/db/fakeTest";
import { TestModel } from "src/app/models/Test";
import { NotificationService } from "src/app/services/notification.service";
import { TestService } from "src/app/services/test.service";


@Component({
  selector: "app-create-test",
  templateUrl: "./create-test.component.html",
  styleUrls: ["./create-test.component.scss"],
})
export class CreateTestComponent {
  testModel: TestModel = this.newTestModel();

  constructor(
    private testService: TestService,
    private notifyService: NotificationService
  ) {}

  createNewTest(event: any) {
    event.preventDefault();

    this.testService
      .createTestQuestion(this.testModel)
      .subscribe((responce: any) => {
        this.showToasterSuccess(
          "Test question wos created successfully!",
          "Succes!"
        );

        this.clearInputs();
      });
  }

  setDifficulty(difficulty: number) {
    this.testModel.difficulty = difficulty;
  }

  newTestModel() {
    return new TestModel(
      "", // _id,
      "", // title
      1, // difficulty
      [
          { title: "", isCorrect: true },
          { title: "", isCorrect: false },
          { title: "", isCorrect: false },
          { title: "", isCorrect: false },
        ], // answers
        "", // image
      "" // explanation
    );
  }

  clearInputs() {
    this.testModel = this.newTestModel()
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
