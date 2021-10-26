import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarCircularComponent } from './AngGui/nav-bar/circular/nav-bar-circular.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, NavBarCircularComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
