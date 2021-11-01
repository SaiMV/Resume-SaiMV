import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarCircularComponent } from './AngGui/nav-bar/circular/nav-bar-circular.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { ProgressBarComponent } from './AngGui/progress-bar/progress-bar.component';
import { FlashScreen } from './AngGui/flash-screen/flash-screen.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavBarCircularComponent,
    HomeScreenComponent,
    AboutMeComponent,
    EducationDetailsComponent,
    ProgressBarComponent,
    FlashScreen,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
