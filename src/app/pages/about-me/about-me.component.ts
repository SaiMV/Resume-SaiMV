import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [ './about-me.component.css' ]
})
export class AboutMeComponent  {
  name = 'Angular ' + VERSION.major;
}
