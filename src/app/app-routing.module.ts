import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ProjectDetailsComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'education-details', component: EducationDetailsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
