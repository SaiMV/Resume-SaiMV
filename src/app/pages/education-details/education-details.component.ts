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
      stream: 'Computer Science',
      percenctage: 67,
      institution: 'HSE, Kerala State Board | THSS IHRD, Vazhakkad, Malappuram',
      year: '2006-2008',
    },
    {
      course: 'SSLC',
      stream: 'Computer Science',
      percenctage: 67,
      institution: 'SPBS Ramanattukara, Calicut',
      year: '2006',
    },
  ];
  counterArray = [];
  counterFunction(percentage, index) {
    const counter = document.querySelector('.counter');
    // let count = 0;
    // this.counterArray[] = setInterval(() => {
    //  if(count == percentage) {
    //   clearInterval(count);
    //  }else {
    //   count+=1;
    // counter.textContent = count + "%";
    //  }
    // }, 42);
    // counter.textContent = percentage + "%";
    return true;
  }
}
