import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent {
  name = 'Angular ' + VERSION.major;
}
