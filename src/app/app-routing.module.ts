import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/pages/home/home.component";
import { TestsComponent } from "./views/pages/tests/tests.component";
import { CreateTestComponent } from "./views/pages/create-test/create-test.component";
import { AllTestsComponent } from "./views/pages/all-tests/all-tests.component";
import { EditTestComponent } from "./views/pages/edit-test/edit-test.component";
import { RegisterComponent } from "./views/pages/register/register.component";
import { LoginComponent } from "./views/pages/login/login.component";
import { UserCabinetComponent } from "./views/pages/user-cabinet/user-cabinet.component";
import { TestResultsComponent } from "./views/pages/test-results/test-results.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "tests", component: TestsComponent },
  { path: "test/results/:id", component: TestResultsComponent },

  { path: "create-test", component: CreateTestComponent },
  { path: "all-tests", component: AllTestsComponent },
  { path: "all-tests/edit-test/:id", component: EditTestComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "user-cabinet/:id", component: UserCabinetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
