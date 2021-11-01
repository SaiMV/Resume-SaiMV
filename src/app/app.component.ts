import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('mainContainer') mainContainer: any;
  flashScreen = true;
  constructor() {
    // setTimeout(() => {
    //   this.flashScreen = false;
    //   this.intervalTranslation1 = setInterval(() => {
    //     this.setElementOpacity();
    //   }, 2);
    // }, 2300);
    //     window.open("http://localhost:4200/", "full", "dependent=yes, fullscreen=yes")
  }
  intervalTranslation1: any;
  opacityupto: any = 0;
  setElementOpacity() {
    const elm = this.mainContainer.nativeElement;
    this.opacityupto += 0.01;
    if (this.opacityupto > 1) {
      clearInterval(this.intervalTranslation1);
      return;
    }
    elm.style.opacity = this.opacityupto;
  }
}
