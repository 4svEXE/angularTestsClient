import { TestModel } from "../models/Test";

export const fakeTest: TestModel = new TestModel(
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


