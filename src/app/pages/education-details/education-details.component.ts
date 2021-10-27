import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css'],
})
export class EducationDetailsComponent {
  name = 'Angular ' + VERSION.major;
}
