import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { TestModel } from "../models/Test";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class TestService {
  private dataSubject = new Subject<TestModel[] | object[]>();
  data$ = this.dataSubject.asObservable();

  sendData(data: TestModel[]) {
    this.dataSubject.next(data);
  }

  constructor(private webReqService: WebRequestService) {}

  // Create the observer
  testSubject = new BehaviorSubject(this.getTestQuestions());

  getTestQuestions() {
    return this.webReqService.get("tests");
  }

  createTestQuestion(testModel: TestModel | object) {
    return this.webReqService.post("tests", testModel);
  }

  deleteTestQuestion(id: string) {
    return this.webReqService.delete("tests/"+ id);
  }

  getTestQuestion(id: string) {
    return this.webReqService.get("tests/test/"+id);
  }

  saveTestResults(tests: TestModel | object, userId?: string | null) {
    return this.webReqService.post("tests/result/save", {tests, userId});
  }

  getTestResults(id: string) {
    return this.webReqService.get("tests/result/" + id);
  }
}
