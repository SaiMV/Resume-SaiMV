import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'flash-screen',
  templateUrl: './flash-screen.component.html',
  styleUrls: ['./flash-screen.component.css'],
})
export class FlashScreen {
  @ViewChild('shineTwo') shineTwoRef: any;
  @ViewChild('lableContainer1') lableContainer1: any;
  @ViewChild('lableContainer2') lableContainer2: any;

  intervalShine: any;
  intervalShine2: any;
  intervalTranslation1: any;
  constructor(private myElement: ElementRef) {
    this.intervalShine2 = setInterval(() => {
      this.setShine2();
      // window.open("http://localhost:4200/", "full", "dependent=yes, fullscreen=yes")
    }, 1);

    this.intervalShine = setInterval(() => {
      const childElements = this.lableContainer1.nativeElement.childNodes;
      if (childElements) {
        this.setShine();
      }
    }, 25);

    this.intervalTranslation1 = setInterval(() => {
      const childElements = this.lableContainer2.nativeElement.childNodes;
      if (childElements) {
        this.translateText();
      }
    }, 25);
  }

  moveupto = 0;
  setShine2() {
    this.moveupto += 2;
    if (this.moveupto > 480) {
      clearInterval(this.intervalShine2);
      return;
    }
    this.shineTwoRef.nativeElement.style.transform =
      'translateX(' + this.moveupto + 'px) rotate(20deg)';
  }

  opacityupto = 0;
  setShine() {
    this.opacityupto += 0.01;
    if (this.opacityupto > 1) {
      clearInterval(this.intervalShine);
      return;
    }
    const childElements = this.lableContainer1.nativeElement.childNodes;
    for (let element in childElements) {
      if (!isNaN(parseInt(element))) {
        childElements[element].style.display = 'inline';
        childElements[element].style.opacity = this.opacityupto;
      }
    }
  }

  translateupto = 100;
  translateOpacityupto = 0;
  translateText() {
    this.translateupto -= 6;
    this.translateOpacityupto += 0.01;
    if (this.translateupto <= 0 && this.translateOpacityupto >= 1) {
      this.setElementOpacity(1);
      clearInterval(this.intervalTranslation1);
      return;
    }
    if (this.translateupto >= 0) {
      this.lableContainer2.nativeElement.style.transform =
        'translateY(' + this.translateupto + 'px) ';
    }
    this.setElementOpacity(this.translateOpacityupto);
  }

  setElementOpacity(translateOpacityupto: any) {
    const childElements2 = this.lableContainer2.nativeElement.childNodes;

    for (let element2 in childElements2) {
      if (!isNaN(parseInt(element2))) {
        childElements2[element2].style.opacity = translateOpacityupto;
      }
    }
  }
}
