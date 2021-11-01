import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCircularComponent } from './AngGui/nav-bar/circular/nav-bar-circular.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { ProgressBarComponent } from './AngGui/progress-bar/progress-bar.component';
import { FlashScreen } from './AngGui/flash-screen/flash-screen.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavBarCircularComponent,
    HomeScreenComponent,
    AboutMeComponent,
    EducationDetailsComponent,
    ProgressBarComponent,
    FlashScreen,
    PersonalDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
