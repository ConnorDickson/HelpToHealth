import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HowItWorksVolunteerComponent } from './components/how-it-works-volunteer/how-it-works-volunteer.component';
import { HowItWorksOrganisationComponent } from './components/how-it-works-organisation/how-it-works-organisation.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInProfessionalComponent } from './components/logged-in-professional/logged-in-professional.component';
import { LoggedInVolunteerComponent } from './components/logged-in-volunteer/logged-in-volunteer.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'how-it-works-volunteer', component: HowItWorksVolunteerComponent },
  { path: 'how-it-works-organisation', component: HowItWorksOrganisationComponent },
  { path: 'logged-in-volunteer', component: LoggedInVolunteerComponent },
  { path: 'logged-in-professional', component: LoggedInProfessionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }