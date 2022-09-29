import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AboutUsComponent } from "./about-us/about-us.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationBaseComponent } from "./registration-base/registration-base.component";
import { AuthLayoutComponent } from "./shared/components/auth-layout/auth-layout.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from "src/environments/environment";

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {path: '', redirectTo: '/auth/welcome', pathMatch: 'full'},
    {path: 'about', component: AboutUsComponent,},
    {path: 'login', component: LoginComponent},
    {path: 'registrationbase', component: RegistrationBaseComponent},
    {path: 'welcome', component: WelcomeComponent}
  ]}
]

@NgModule({
  imports:[
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent,
    AboutUsComponent,
    RegistrationBaseComponent,
    AuthLayoutComponent,
  ],
  providers:[
  ]
})

export class AuthModule{
}
