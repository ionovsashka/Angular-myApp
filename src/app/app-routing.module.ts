import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditPersonalPageComponent } from './edit-personal-page/edit-personal-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, canActivate:[AuthGuard], children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'account/:id', component: PersonalPageComponent},
    {path: 'account/:id/edit', component: EditPersonalPageComponent}
  ]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
