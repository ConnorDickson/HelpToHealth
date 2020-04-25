import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { HowItWorksVolunteerComponent } from './components/how-it-works-volunteer/how-it-works-volunteer.component';
import { HowItWorksOrganisationComponent } from './components/how-it-works-organisation/how-it-works-organisation.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInVolunteerComponent } from './components/logged-in-volunteer/logged-in-volunteer.component';
import { LoggedInProfessionalComponent } from './components/logged-in-professional/logged-in-professional.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FlowChartComponent } from './components/flow-chart/flow-chart.component';
import { FlowChartDisabilityComponent } from './components/flow-chart-disability/flow-chart-disability.component';
import { FlowChartIllnessComponent } from './components/flow-chart-illness/flow-chart-illness.component';
import { FlowChartFrailtyComponent } from './components/flow-chart-frailty/flow-chart-frailty.component';
import { FlowChartMentalHealthComponent } from './components/flow-chart-mental-health/flow-chart-mental-health.component';
import { FlowChartAddictionComponent } from './components/flow-chart-addiction/flow-chart-addiction.component';
import { TrainingResourcesAddictionComponent } from './components/training-resources-addiction/training-resources-addiction.component';
import { TrainingResourcesFrailtyComponent } from './components/training-resources-frailty/training-resources-frailty.component';
import { TrainingResourcesDisabilityComponent } from './components/training-resources-disability/training-resources-disability.component';
import { TrainingResourcesIllnessComponent } from './components/training-resources-illness/training-resources-illness.component';
import { TrainingResourcesMentalHealthComponent } from './components/training-resources-mental-health/training-resources-mental-health.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    HowItWorksVolunteerComponent,
    HowItWorksOrganisationComponent,
    HomeComponent,
    LoggedInVolunteerComponent,
    LoggedInProfessionalComponent,
    FlowChartComponent,
    FlowChartDisabilityComponent,
    FlowChartIllnessComponent,
    FlowChartFrailtyComponent,
    FlowChartMentalHealthComponent,
    FlowChartAddictionComponent,
    TrainingResourcesAddictionComponent,
    TrainingResourcesFrailtyComponent,
    TrainingResourcesDisabilityComponent,
    TrainingResourcesIllnessComponent,
    TrainingResourcesMentalHealthComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }