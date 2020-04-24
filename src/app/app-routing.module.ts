import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HowItWorksVolunteerComponent } from './components/how-it-works-volunteer/how-it-works-volunteer.component';
import { HowItWorksOrganisationComponent } from './components/how-it-works-organisation/how-it-works-organisation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'how-it-works-volunteer', component: HowItWorksVolunteerComponent },
  { path: 'how-it-works-organisation', component: HowItWorksOrganisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }