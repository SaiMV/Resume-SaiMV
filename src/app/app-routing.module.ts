import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CompanyExperienceDetailsComponent } from './pages/company-experience-details/company-experience-details.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: PersonalDetailsComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'educationDetails', component: EducationDetailsComponent },
  { path: 'personalDetails', component: PersonalDetailsComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
  {
    path: 'companyExperienceDetailsComponent',
    component: CompanyExperienceDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
