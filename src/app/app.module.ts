import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthService } from './shared/services/auth.service';
import { EditPersonalPageComponent } from './edit-personal-page/edit-personal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PersonalPageComponent,
    ErrorPageComponent,
    EditPersonalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers:[AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
