import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HowItWorksVolunteerComponent } from './components/how-it-works-volunteer/how-it-works-volunteer.component';
import { HowItWorksOrganisationComponent } from './components/how-it-works-organisation/how-it-works-organisation.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInProfessionalComponent } from './components/logged-in-professional/logged-in-professional.component';
import { LoggedInVolunteerComponent } from './components/logged-in-volunteer/logged-in-volunteer.component';
import { FlowChartComponent } from './components/flow-chart/flow-chart.component';
import { TrainingResourcesAddictionComponent } from './components/training-resources-addiction/training-resources-addiction.component';
import { TrainingResourcesFrailtyComponent } from './components/training-resources-frailty/training-resources-frailty.component';
import { TrainingResourcesDisabilityComponent } from './components/training-resources-disability/training-resources-disability.component';
import { TrainingResourcesIllnessComponent } from './components/training-resources-illness/training-resources-illness.component';
import { TrainingResourcesMentalHealthComponent } from './components/training-resources-mental-health/training-resources-mental-health.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'how-it-works-volunteer', component: HowItWorksVolunteerComponent },
  { path: 'how-it-works-organisation', component: HowItWorksOrganisationComponent },
  { path: 'logged-in-volunteer', component: LoggedInVolunteerComponent },
  { path: 'logged-in-professional', component: LoggedInProfessionalComponent },
  { path: 'flowchart', component: FlowChartComponent },
  { path: 'training-resources-addiction', component: TrainingResourcesAddictionComponent },
  { path: 'training-resources-frailty', component: TrainingResourcesFrailtyComponent },
  { path: 'training-resources-disability', component: TrainingResourcesDisabilityComponent },
  { path: 'training-resources-illness', component: TrainingResourcesIllnessComponent },
  { path: 'training-resources-mental-health', component: TrainingResourcesMentalHealthComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }