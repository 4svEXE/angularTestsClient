import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TestsComponent } from './views/pages/tests/tests.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsWidgetComponent } from './views/shared/sidebar/settings-widget/settings-widget.component';
import { CreateTestComponent } from './views/pages/create-test/create-test.component';
import { AllTestsComponent } from './views/pages/all-tests/all-tests.component';
import { EditTestComponent } from './views/pages/edit-test/edit-test.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { LoginComponent } from './views/pages/login/login.component';
import { LoginService } from './services/login.service';
import { UserCabinetComponent } from './views/pages/user-cabinet/user-cabinet.component';
import { TestResultsComponent } from './views/pages/test-results/test-results.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    TestsComponent,
    SettingsWidgetComponent,
    CreateTestComponent,
    AllTestsComponent,
    EditTestComponent,
    RegisterComponent,
    LoginComponent,
    UserCabinetComponent,
    TestResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
