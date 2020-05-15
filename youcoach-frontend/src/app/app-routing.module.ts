import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {BecomeCoachComponent} from './become-coach/become-coach.component';
import {DisplayProfileComponent} from './display-profile/display-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {CoachProfileComponent} from './coach-profile/coach-profile.component';
import {ValidateAccountComponent} from './validate-account/validate-account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'becomecoach', component: BecomeCoachComponent },
  {path: 'profile', component: DisplayProfileComponent },
  {path: 'edit-profile', component: EditProfileComponent },
  {path: 'coach-profile', component: CoachProfileComponent },
  {path: 'validate-account', component: ValidateAccountComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
