import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css'],
})
export class EducationDetailsComponent {
  educationalData = [
    {
      course: 'Master of Technology',
      stream: 'Computer Application',
      percenctage: 56,
      institution: 'BITS, Pilani. Rajasthan',
      year: '2012-2016',
    },
    {
      course: 'Batchelor of Science',
      stream: 'Computer Science',
      percenctage: 67,
      institution:
        'College of Applied Science-IHRD, Calicut University, Kerala',
      year: '2009-2012',
    },
    {
      course: 'Higher Secondary',
      stream: 'Computer Science, HSE, Kerala State Board',
      percenctage: 70,
      institution: ' THSS IHRD, Vazhakkad, Malappuram',
      year: '2006-2008',
    },
    {
      course: 'SSLC',
      stream: 'Science, Kerala State Board',
      percenctage: 70,
      institution: 'SPBS Ramanattukara, Calicut',
      year: '2006',
    },
  ];
}
